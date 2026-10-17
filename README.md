# Andalusia-2027
Sevilla,  Córdoba,  Cádiz 
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Andalusia 2027 🇪🇸</title>
  <meta name="theme-color" content="#b45309">
  <link rel="apple-touch-icon" href="https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=192&q=80">
  <style>
    :root {
      --bg: #f8fafc;
      --card-bg: #ffffff;
      --primary: #b45309;
      --primary-dark: #78350f;
      --primary-light: #fef3c7;
      --accent: #d97706;
      --text: #1e293b;
      --sub: #64748b;
      --border: #e2e8f0;
      --radius: 16px;
    }

    * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      margin: 0;
      padding: 0 0 32px 0;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }

    /* Hero Carousel & Header */
    .hero-container {
      position: relative;
      width: 100%;
      height: 220px;
      overflow: hidden;
    }

    .hero-slider {
      display: flex;
      width: 100%;
      height: 100%;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;
    }
    .hero-slider::-webkit-scrollbar { display: none; }

    .hero-slide {
      flex: 0 0 100%;
      height: 100%;
      scroll-snap-align: start;
      position: relative;
    }

    .hero-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero-slide .caption {
      position: absolute;
      bottom: 12px;
      left: 16px;
      background: rgba(15, 23, 42, 0.65);
      backdrop-filter: blur(4px);
      color: white;
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .header-card {
      background: var(--card-bg);
      margin: -24px 16px 20px 16px;
      padding: 20px;
      border-radius: var(--radius);
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.08);
      position: relative;
      z-index: 10;
      border: 1px solid var(--border);
    }

    .header-card h1 {
      margin: 0;
      font-size: 1.4rem;
      font-weight: 800;
      color: var(--primary-dark);
      letter-spacing: -0.5px;
    }

    .header-card p {
      margin: 6px 0 0 0;
      color: var(--sub);
      font-size: 0.85rem;
      font-weight: 500;
      display: flex;
      gap: 12px;
    }

    /* Itinerary Cards */
    .day-container {
      padding: 0 16px;
    }

    .day-card {
      background: var(--card-bg);
      border-radius: var(--radius);
      padding: 18px;
      margin-bottom: 16px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.03);
      border: 1px solid var(--border);
    }

    .day-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid var(--primary-light);
      padding-bottom: 10px;
      margin-bottom: 14px;
    }

    .day-title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--primary);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .day-badge {
      background: var(--primary-light);
      color: var(--primary-dark);
      font-size: 0.7rem;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 12px;
      text-transform: uppercase;
    }

    /* Event Timeline */
    .event {
      display: flex;
      gap: 14px;
      margin-bottom: 14px;
      position: relative;
    }

    .event:last-child {
      margin-bottom: 0;
    }

    .time {
      font-weight: 700;
      color: var(--accent);
      font-size: 0.8rem;
      min-width: 52px;
      text-align: right;
      padding-top: 2px;
    }

    .details {
      flex-grow: 1;
      font-size: 0.9rem;
      line-height: 1.4;
      color: var(--text);
    }

    .details strong {
      color: var(--primary-dark);
    }

    .btn-map {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      margin-top: 6px;
      padding: 4px 10px;
      background: var(--primary-light);
      color: var(--primary-dark);
      text-decoration: none;
      border-radius: 8px;
      font-size: 0.75rem;
      font-weight: 600;
      transition: background 0.2s;
    }

    .btn-map:active {
      background: #fde68a;
    }
  </style>
</head>
<body>

  <!-- Hero Slider con foto attrazioni -->
  <div class="hero-container">
    <div class="hero-slider">
      <div class="hero-slide">
        <img src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80" alt="Plaza de España, Siviglia">
        <span class="caption">Siviglia – Plaza de España</span>
      </div>
      <div class="hero-slide">
        <img src="https://images.unsplash.com/photo-1568285517178-e50b863a34a8?auto=format&fit=crop&w=800&q=80" alt="Real Alcázar, Siviglia">
        <span class="caption">Siviglia – Real Alcázar</span>
      </div>
      <div class="hero-slide">
        <img src="https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&w=800&q=80" alt="Mezquita, Córdoba">
        <span class="caption">Córdoba – Mezquita</span>
      </div>
      <div class="hero-slide">
        <img src="https://images.unsplash.com/photo-1562670652-e5947ebd2322?auto=format&fit=crop&w=800&q=80" alt="Cattedrale di Cadice">
        <span class="caption">Cádiz – Cattedrale</span>
      </div>
    </div>
  </div>

  <!-- Header Info Card -->
  <div class="header-card">
    <h1>🇪🇸 Tour Andalusia 2027</h1>
    <p>
      <span>🗓 1–6 Gennaio</span>
      <span>👥 4 Persone</span>
      <span>🏨 Base: Siviglia</span>
    </p>
  </div>

  <div class="day-container">

    <!-- VENERDÌ 1 -->
    <div class="day-card">
      <div class="day-header">
        <div class="day-title">✈️ Venerdì 1 Gennaio</div>
        <span class="day-badge">Arrivo</span>
      </div>
      <div class="event">
        <div class="time">14:00</div>
        <div class="details">Volo <strong>FR4348</strong> da Bologna per Siviglia. Spostamento in hotel (Bus EA o taxi).</div>
      </div>
      <div class="event">
        <div class="time">Check-in</div>
        <div class="details">
          <strong>Hotel Las Casas de la Judería</strong><br>
          <a class="btn-map" href="https://maps.google.com/?q=Hotel+Las+Casas+de+la+Juderia+Sevilla" target="_blank">📍 Mappa Hotel</a>
        </div>
      </div>
      <div class="event">
        <div class="time">Pomeriggio</div>
        <div class="details">Passeggiata nel <strong>Barrio Santa Cruz</strong> e cena tapas in centro (prenotare per Capodanno).</div>
      </div>
    </div>

    <!-- SABATO 2 -->
    <div class="day-card">
      <div class="day-header">
        <div class="day-title">🍊 Sabato 2 Gennaio</div>
        <span class="day-badge">Siviglia</span>
      </div>
      <div class="event">
        <div class="time">09:30</div>
        <div class="details"><strong>Real Alcázar</strong>: palazzi e giardini (prenotare ingresso).</div>
      </div>
      <div class="event">
        <div class="time">12:00</div>
        <div class="details"><strong>Cattedrale e Giralda</strong>. Pranzo in centro.</div>
      </div>
      <div class="event">
        <div class="time">Pomeriggio</div>
        <div class="details"><strong>Archivo de Indias</strong> e passeggiata nel centro storico.</div>
      </div>
    </div>

    <!-- DOMENICA 3 -->
    <div class="day-card">
      <div class="day-header">
        <div class="day-title">🚗 Domenica 3 Gennaio</div>
        <span class="day-badge">Córdoba</span>
      </div>
      <div class="event">
        <div class="time">08:00</div>
        <div class="details">Partenza in auto da Siviglia (circa 1h40m).</div>
      </div>
      <div class="event">
        <div class="time">10:00</div>
        <div class="details"><strong>Mezquita-Catedral</strong> e <strong>Calleja de las Flores</strong>.</div>
      </div>
      <div class="event">
        <div class="time">14:30</div>
        <div class="details"><strong>Ponte Romano</strong> e <strong>Torre de la Calahorra</strong>. Rientro a Siviglia a fine pomeriggio.</div>
      </div>
    </div>

    <!-- LUNEDÌ 4 -->
    <div class="day-card">
      <div class="day-header">
        <div class="day-title">🚗 Lunedì 4 Gennaio</div>
        <span class="day-badge">Cádiz</span>
      </div>
      <div class="event">
        <div class="time">08:00</div>
        <div class="details">Partenza in auto da Siviglia (circa 1h30m).</div>
      </div>
      <div class="event">
        <div class="time">10:00</div>
        <div class="details">Centro storico, <strong>Cattedrale di Cadice</strong> e <strong>Mercado Central</strong>.</div>
      </div>
      <div class="event">
        <div class="time">14:30</div>
        <div class="details">Quartiere <strong>La Viña</strong>, spiaggia <strong>La Caleta</strong> e <strong>Castillo de Santa Catalina</strong>.</div>
      </div>
    </div>

    <!-- MARTEDÌ 5 -->
    <div class="day-card">
      <div class="day-header">
        <div class="day-title">🌞 Martedì 5 Gennaio</div>
        <span class="day-badge">Panorami</span>
      </div>
      <div class="event">
        <div class="time">09:30</div>
        <div class="details"><strong>Plaza de España</strong> e passeggiata nel <strong>Parque de María Luisa</strong>.</div>
      </div>
      <div class="event">
        <div class="time">13:00</div>
        <div class="details">Pranzo a <em>La Bastarda Porvenir</em> (opzione senza glutine).</div>
      </div>
      <div class="event">
        <div class="time">15:00</div>
        <div class="details"><strong>Metropol Parasol (Las Setas)</strong> per vista panoramica.</div>
      </div>
    </div>

    <!-- MERCOLEDÌ 6 -->
    <div class="day-card">
      <div class="day-header">
        <div class="day-title">✈️ Mercoledì 6 Gennaio</div>
        <span class="day-badge">Rientro</span>
      </div>
      <div class="event">
        <div class="time">12:30</div>
        <div class="details">Recupero bagagli in hotel e trasferimento in aeroporto.</div>
      </div>
      <div class="event">
        <div class="time">16:00</div>
        <div class="details">Volo <strong>FR4349</strong> Siviglia → Bologna.</div>
      </div>
    </div>

  </div>

</body>
</html>
