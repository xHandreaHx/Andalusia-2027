// app.js: carica itinerary.json e popola la pagina
async function loadItinerary(){
  try{
    const res = await fetch('/data/itinerary.json');
    if(!res.ok) throw new Error('Impossibile caricare i dati');
    const data = await res.json();
    renderHero(data.heroImages || []);
    renderItinerary(data.days || []);
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

// inizializza
window.addEventListener('DOMContentLoaded', ()=>{
  loadItinerary();
});
