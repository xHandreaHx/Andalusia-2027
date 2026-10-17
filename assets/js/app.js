// app.js: carica itinerary.json, slider, e mappa Leaflet
async function loadItinerary(){
  try{
    const res = await fetch('/data/itinerary.json');
    if(!res.ok) throw new Error('Impossibile caricare i dati');
    const data = await res.json();
    renderHero(data.heroImages || []);
    renderItinerary(data.days || []);
    initSlider();
    initMap(data.days || []);
  }catch(err){
    console.error(err);
    const it = document.getElementById('itinerary');
    it.innerHTML = '<div class="card"><p>Errore caricamento itinerario.</p></div>';
  }
}

function renderHero(images){
  const slider = document.getElementById('hero-slider');
  if(!slider) return;
  slider.innerHTML = '';
  images.forEach((img, i)=>{
    const slide = document.createElement('div');
    slide.className = 'hero-slide';
    if(i===0) slide.classList.add('large');
    const image = document.createElement('img');
    image.src = img.src;
    image.alt = img.alt || `Immagine ${i+1}`;
    const caption = document.createElement('div');
    caption.className = 'hero-caption';
    caption.textContent = img.caption || '';
    slide.appendChild(image);
    slide.appendChild(caption);
    slider.appendChild(slide);
  });
}

function renderItinerary(days){
  const container = document.getElementById('itinerary');
  container.innerHTML = '';
  days.forEach(day=>{
    const card = document.createElement('section');
    card.className = 'card day-card';

    const header = document.createElement('div');
    header.className = 'day-header';
    const title = document.createElement('div');
    title.className = 'day-title';
    title.textContent = `${day.title}`;
    const badge = document.createElement('div');
    badge.className = 'day-badge';
    badge.textContent = day.badge || '';
    header.appendChild(title);
    header.appendChild(badge);

    card.appendChild(header);

    (day.events || []).forEach(ev=>{
      const evt = document.createElement('div');
      evt.className = 'event';
      const time = document.createElement('div');
      time.className = 'time';
      time.textContent = ev.time;
      const details = document.createElement('div');
      details.className = 'details';
      details.innerHTML = ev.details;
      evt.appendChild(time);
      evt.appendChild(details);
      card.appendChild(evt);
    });

    container.appendChild(card);
  });
}

// Slider: semplice autoplay + controls
function initSlider(){
  const slider = document.getElementById('hero-slider');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  if(!slider) return;
  let slides = Array.from(slider.children);
  if(slides.length===0) return;
  let index = 0;
  let timer = null;

  function show(i){
    index = (i + slides.length) % slides.length;
    const slide = slides[index];
    slide.scrollIntoView({behavior: 'smooth', inline: 'start'});
  }

  function next(){ show(index+1); }
  function prev(){ show(index-1); }

  nextBtn && nextBtn.addEventListener('click', ()=>{ next(); resetTimer(); });
  prevBtn && prevBtn.addEventListener('click', ()=>{ prev(); resetTimer(); });

  function startTimer(){ timer = setInterval(next, 5000); }
  function resetTimer(){ clearInterval(timer); startTimer(); }
  startTimer();

  // update slides reference if images load later
  window.addEventListener('resize', ()=>{ slides = Array.from(slider.children); });
}

// Leaflet map: aggiunge marker per i giorni con coords
function initMap(days){
  if(typeof L === 'undefined') return; // Leaflet non caricato
  const mapEl = document.getElementById('map');
  if(!mapEl) return;

  // default center: Sevilla
  const defaultCenter = [37.389092, -5.984459];
  const map = L.map('map', {scrollWheelZoom:false}).setView(defaultCenter, 7);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const markers = [];
  days.forEach(day=>{
    if(day.coords && Array.isArray(day.coords)){
      const m = L.marker(day.coords).addTo(map).bindPopup(`<strong>${day.title}</strong><br>${day.badge||''}`);
      markers.push(m);
    }
  });

  if(markers.length){
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds(), {padding:[40,40]});
  }
}

// inizializza
window.addEventListener('DOMContentLoaded', ()=>{
  loadItinerary();
});
