<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The Traitors – Host</title>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --gold: #c9a84c;
    --gold-light: #e8c97a;
    --gold-dim: rgba(201,168,76,0.18);
    --dark: #0c0907;
    --dark2: #161009;
    --parchment: #f5ecd7;
    --blood: #8b1a1a;
    --blood-red: #c0392b;
    --fog: rgba(201,168,76,0.06);
  }

  body {
    background: var(--dark);
    font-family: 'Crimson Text', serif;
    color: var(--parchment);
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* ── SETUP SCREEN ── */
  #setupScreen {
    max-width: 520px;
    margin: 0 auto;
    padding: 3rem 2rem;
  }

  .logo {
    text-align: center;
    margin-bottom: 2.5rem;
  }
  .logo-eyebrow {
    font-size: 11px;
    letter-spacing: 5px;
    color: var(--gold);
    opacity: 0.6;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  .logo h1 {
    font-family: 'Cinzel', serif;
    font-size: 42px;
    font-weight: 700;
    color: var(--gold);
    letter-spacing: 3px;
    text-shadow: 0 0 40px rgba(201,168,76,0.35);
  }
  .logo-sub {
    font-style: italic;
    color: rgba(245,236,215,0.4);
    font-size: 15px;
    margin-top: 0.4rem;
  }

  .setup-card {
    background: rgba(245,236,215,0.03);
    border: 1px solid rgba(201,168,76,0.2);
    border-radius: 14px;
    padding: 1.75rem;
    margin-bottom: 1.25rem;
  }

  .setup-label {
    font-family: 'Cinzel', serif;
    font-size: 11px;
    letter-spacing: 2.5px;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .firebase-fields { display: grid; gap: 10px; }

  input[type=text], input[type=password] {
    width: 100%;
    background: rgba(0,0,0,0.35);
    border: 1px solid rgba(201,168,76,0.25);
    border-radius: 8px;
    padding: 10px 14px;
    font-family: 'Crimson Text', serif;
    font-size: 15px;
    color: var(--parchment);
    outline: none;
    transition: border-color 0.2s;
  }
  input[type=text]:focus, input[type=password]:focus {
    border-color: rgba(201,168,76,0.55);
  }
  input::placeholder { color: rgba(245,236,215,0.2); }

  .helper-text {
    font-size: 12px;
    color: rgba(245,236,215,0.4);
    margin-top: 0.5rem;
    font-style: italic;
    line-height: 1.5;
  }

  .btn-primary {
    width: 100%;
    background: rgba(201,168,76,0.12);
    border: 1px solid var(--gold);
    border-radius: 10px;
    padding: 13px;
    font-family: 'Cinzel', serif;
    font-size: 14px;
    letter-spacing: 2px;
    color: var(--gold);
    cursor: pointer;
    transition: background 0.2s;
    margin-top: 0.25rem;
  }
  .btn-primary:hover { background: rgba(201,168,76,0.24); }
  .btn-primary:disabled { opacity: 0.35; cursor: not-allowed; }

  .error-msg {
    background: rgba(139,26,26,0.2);
    border: 1px solid rgba(192,57,43,0.4);
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 13px;
    color: #e88080;
    margin-top: 0.75rem;
    display: none;
  }

  /* ── HOST GAME SCREEN ── */
  #gameScreen { display: none; min-height: 100vh; }

  .host-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 2rem;
    border-bottom: 1px solid rgba(201,168,76,0.15);
    flex-wrap: wrap;
    gap: 12px;
  }

  .host-title {
    font-family: 'Cinzel', serif;
    font-size: 22px;
    color: var(--gold);
    letter-spacing: 2px;
  }

  .round-pill {
    font-family: 'Cinzel', serif;
    font-size: 12px;
    letter-spacing: 2px;
    color: var(--gold);
    background: var(--gold-dim);
    border: 1px solid rgba(201,168,76,0.35);
    padding: 5px 16px;
    border-radius: 20px;
  }

  .host-stats {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
  }

  .stat-chip {
    font-family: 'Cinzel', serif;
    font-size: 12px;
    color: rgba(245,236,215,0.55);
    letter-spacing: 1px;
  }

  .stat-chip span {
    color: var(--gold-light);
    font-weight: 600;
  }

  .host-actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .btn-sm {
    background: rgba(201,168,76,0.1);
    border: 1px solid rgba(201,168,76,0.4);
    border-radius: 8px;
    padding: 7px 16px;
    font-family: 'Cinzel', serif;
    font-size: 11px;
    letter-spacing: 1.5px;
    color: var(--gold);
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .btn-sm:hover { background: rgba(201,168,76,0.22); }
  .btn-sm:disabled { opacity: 0.3; cursor: not-allowed; }

  .btn-danger {
    background: rgba(139,26,26,0.15);
    border: 1px solid rgba(192,57,43,0.45);
    border-radius: 8px;
    padding: 7px 16px;
    font-family: 'Cinzel', serif;
    font-size: 11px;
    letter-spacing: 1.5px;
    color: #e88080;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .btn-danger:hover { background: rgba(139,26,26,0.3); }

  /* join info bar */
  .join-bar {
    background: rgba(201,168,76,0.05);
    border-bottom: 1px solid rgba(201,168,76,0.12);
    padding: 0.6rem 2rem;
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  .join-bar-label {
    font-family: 'Cinzel', serif;
    font-size: 10px;
    letter-spacing: 2px;
    color: rgba(201,168,76,0.5);
  }
  .join-bar-url {
    font-family: monospace;
    font-size: 13px;
    color: var(--gold-light);
  }
  .room-code-display {
    font-family: 'Cinzel', serif;
    font-size: 14px;
    color: var(--gold);
    background: var(--gold-dim);
    border: 1px solid rgba(201,168,76,0.35);
    padding: 3px 12px;
    border-radius: 6px;
    letter-spacing: 3px;
  }

  /* players grid */
  .players-section { padding: 1.5rem 2rem; }

  .players-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
    margin-bottom: 2rem;
  }

  .player-card {
    background: rgba(245,236,215,0.04);
    border: 1px solid rgba(201,168,76,0.18);
    border-radius: 14px;
    padding: 1.25rem 1rem;
    text-align: center;
    transition: border-color 0.4s, background 0.4s;
    position: relative;
    overflow: hidden;
  }

  .player-card.has-voted {
    border-color: rgba(201,168,76,0.38);
  }

  .player-card.eliminated {
    border-color: rgba(139,26,26,0.5);
    background: rgba(139,26,26,0.07);
  }

  .photo-wrap {
    position: relative;
    width: 72px;
    height: 72px;
    margin: 0 auto 12px;
  }

  .player-photo {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(201,168,76,0.4);
    display: block;
  }

  .player-initials {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: rgba(201,168,76,0.14);
    border: 2px solid rgba(201,168,76,0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cinzel', serif;
    font-size: 20px;
    font-weight: 600;
    color: var(--gold);
  }

  .elim-overlay {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgba(139,26,26,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.6s;
  }
  .elim-overlay svg { width: 36px; height: 36px; }
  .player-card.eliminated .elim-overlay { opacity: 1; }

  .voted-tick {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: rgba(201,168,76,0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .player-card.has-voted .voted-tick { opacity: 1; }
  .voted-tick svg { width: 12px; height: 12px; }

  .player-name {
    font-family: 'Cinzel', serif;
    font-size: 13px;
    color: var(--parchment);
    margin-bottom: 4px;
    font-weight: 600;
  }
  .player-card.eliminated .player-name {
    color: rgba(245,236,215,0.3);
    text-decoration: line-through;
    text-decoration-color: var(--blood-red);
  }

  .player-vote-count {
    font-family: 'Cinzel', serif;
    font-size: 20px;
    color: var(--gold);
    font-weight: 600;
    height: 28px;
  }

  .mini-bar {
    margin-top: 8px;
    height: 3px;
    background: rgba(255,255,255,0.06);
    border-radius: 2px;
    overflow: hidden;
  }
  .mini-bar-fill {
    height: 100%;
    border-radius: 2px;
    background: var(--gold);
    transition: width 0.9s cubic-bezier(0.4,0,0.2,1);
  }
  .player-card.eliminated .mini-bar-fill { background: var(--blood-red); }

  /* results panel */
  #resultsPanel {
    display: none;
    padding: 0 2rem 2rem;
  }

  .results-title {
    font-family: 'Cinzel', serif;
    font-size: 14px;
    letter-spacing: 3px;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid rgba(201,168,76,0.18);
  }

  .results-list { display: grid; gap: 8px; margin-bottom: 1.5rem; }

  .result-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    background: rgba(245,236,215,0.02);
    border: 1px solid rgba(201,168,76,0.12);
    border-radius: 10px;
    transition: border-color 0.5s, background 0.5s;
  }

  .result-row.top { border-color: rgba(192,57,43,0.5); background: rgba(139,26,26,0.09); }

  .result-photo-sm {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid rgba(201,168,76,0.3);
    flex-shrink: 0;
  }

  .result-initials-sm {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--gold-dim);
    border: 1px solid rgba(201,168,76,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cinzel', serif;
    font-size: 12px;
    color: var(--gold);
    flex-shrink: 0;
  }

  .result-name {
    font-family: 'Cinzel', serif;
    font-size: 13px;
    color: var(--parchment);
    min-width: 100px;
  }

  .result-bar-wrap {
    flex: 1;
    height: 8px;
    background: rgba(255,255,255,0.05);
    border-radius: 4px;
    overflow: hidden;
  }

  .result-bar-fill {
    height: 100%;
    border-radius: 4px;
    background: var(--gold);
    transition: width 1.1s cubic-bezier(0.4,0,0.2,1);
  }

  .result-row.top .result-bar-fill { background: var(--blood-red); }

  .result-pct {
    font-family: 'Cinzel', serif;
    font-size: 13px;
    color: var(--gold);
    min-width: 40px;
    text-align: right;
  }

  .result-vcount {
    font-size: 12px;
    color: rgba(245,236,215,0.35);
    min-width: 30px;
    text-align: right;
  }

  .elim-banner {
    background: rgba(139,26,26,0.12);
    border: 1px solid rgba(192,57,43,0.38);
    border-radius: 14px;
    padding: 1.5rem;
    text-align: center;
    animation: fadeUp 0.7s ease both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .elim-name {
    font-family: 'Cinzel', serif;
    font-size: 26px;
    color: #e88080;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }

  .elim-caption {
    font-style: italic;
    color: rgba(245,236,215,0.45);
    font-size: 15px;
  }

  .results-actions {
    display: flex;
    gap: 10px;
    margin-top: 1.25rem;
    flex-wrap: wrap;
  }

  .results-actions .btn-sm { flex: 1; text-align: center; }

  /* status bar */
  .status-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(12,9,7,0.95);
    border-top: 1px solid rgba(201,168,76,0.15);
    padding: 0.6rem 2rem;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 12px;
    color: rgba(245,236,215,0.35);
    font-family: 'Cinzel', serif;
    letter-spacing: 1px;
    z-index: 100;
  }
  .status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #2ecc71;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%,100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  /* Eliminated players section */
  .eliminated-list {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin: 0 2rem 1rem;
  }

  .elim-chip {
    font-family: 'Cinzel', serif;
    font-size: 11px;
    color: rgba(192,57,43,0.7);
    background: rgba(139,26,26,0.1);
    border: 1px solid rgba(192,57,43,0.25);
    padding: 3px 12px;
    border-radius: 20px;
    letter-spacing: 1px;
  }

  .section-label {
    font-family: 'Cinzel', serif;
    font-size: 10px;
    letter-spacing: 3px;
    color: rgba(245,236,215,0.25);
    text-transform: uppercase;
    padding: 0 2rem;
    margin-bottom: 0.5rem;
  }
</style>
</head>
<body>

<!-- ── SETUP ── -->
<div id="setupScreen">
  <div class="logo">
    <div class="logo-eyebrow">✦ Workplace Edition ✦</div>
    <h1>THE TRAITORS</h1>
    <div class="logo-sub">Connect your Firebase to begin</div>
  </div>

  <div class="setup-card">
    <div class="setup-label">Firebase Config</div>
    <div class="firebase-fields">
      <input type="text" id="fb_apiKey" placeholder="apiKey" />
      <input type="text" id="fb_projectId" placeholder="projectId" />
      <input type="text" id="fb_appId" placeholder="appId" />
    </div>
    <div class="helper-text">
      Get these from Firebase Console → Project Settings → Your apps → Web app config.<br>
      Values are saved in your browser for next time.
    </div>
    <div id="fbError" class="error-msg"></div>
    <button class="btn-primary" id="connectBtn" onclick="connectFirebase()">Connect &amp; Open Host Room</button>
  </div>

  <div class="setup-card">
    <div class="setup-label">Players (edit players.js)</div>
    <div class="helper-text">
      Add colleagues to <code style="color:var(--gold-light)">players.js</code> in this folder. Each player has a name and optional photo filename inside <code style="color:var(--gold-light)">images/</code>.<br><br>
      <strong style="color:var(--gold);font-family:'Cinzel',serif;font-size:11px;letter-spacing:1px;">Example:</strong><br>
      <code style="color:var(--gold-light);font-size:12px;">{ name: "Alice Smith", photo: "alice.jpg" }</code>
    </div>
  </div>
</div>

<!-- ── HOST GAME SCREEN ── -->
<div id="gameScreen">
  <div class="host-header">
    <div style="display:flex;align-items:center;gap:16px;">
      <div class="host-title">THE TRAITORS</div>
      <div class="round-pill" id="roundPill">Round 1</div>
    </div>
    <div class="host-stats">
      <div class="stat-chip">Players online: <span id="onlineStat">0</span></div>
      <div class="stat-chip">Votes cast: <span id="voteStat">0</span></div>
    </div>
    <div class="host-actions">
      <button class="btn-sm" id="revealBtn" onclick="revealResults()" disabled>Reveal Results</button>
      <button class="btn-sm" id="nextRoundBtn" onclick="nextRound()" style="display:none">Next Round</button>
      <button class="btn-danger" onclick="resetGame()">Reset</button>
    </div>
  </div>

  <div class="join-bar">
    <div class="join-bar-label">Players join at</div>
    <div class="join-bar-url" id="joinUrl">—</div>
    <div class="join-bar-label" style="margin-left:12px;">Room code</div>
    <div class="room-code-display" id="roomCodeDisplay">—</div>
  </div>

  <div class="players-section">
    <div class="players-grid" id="hostGrid"></div>
  </div>

  <div id="eliminatedSection" style="display:none;">
    <div class="section-label">Eliminated</div>
    <div class="eliminated-list" id="eliminatedList"></div>
  </div>

  <div id="resultsPanel">
    <div class="results-title">The Verdict</div>
    <div class="results-list" id="resultsList"></div>
    <div id="elimBanner"></div>
    <div class="results-actions">
      <button class="btn-sm" id="nextRoundBtn2" onclick="nextRound()">Next Round</button>
      <button class="btn-danger" onclick="resetGame()">Reset Game</button>
    </div>
  </div>

  <div style="height:48px;"></div>
  <div class="status-bar">
    <div class="status-dot"></div>
    <span id="statusText">Connected — waiting for votes</span>
  </div>
</div>

<script src="players.js"></script>
<script>
// ── Firebase ──
let db, roomId, unsubscribe;
const LS_KEY = 'traitors_fb_config';

function loadSavedConfig() {
  try {
    const c = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
    if (c.apiKey) document.getElementById('fb_apiKey').value = c.apiKey;
    if (c.projectId) document.getElementById('fb_projectId').value = c.projectId;
    if (c.appId) document.getElementById('fb_appId').value = c.appId;
  } catch(e) {}
}

function connectFirebase() {
  const apiKey = document.getElementById('fb_apiKey').value.trim();
  const projectId = document.getElementById('fb_projectId').value.trim();
  const appId = document.getElementById('fb_appId').value.trim();
  const errEl = document.getElementById('fbError');
  errEl.style.display = 'none';

  if (!apiKey || !projectId || !appId) {
    errEl.textContent = 'Please fill in all three Firebase fields.';
    errEl.style.display = 'block';
    return;
  }

  try {
    if (firebase.apps.length) firebase.apps.forEach(a => a.delete());
    firebase.initializeApp({ apiKey, authDomain: `${projectId}.firebaseapp.com`, projectId, appId });
    db = firebase.firestore();
    localStorage.setItem(LS_KEY, JSON.stringify({ apiKey, projectId, appId }));
    openHostRoom();
  } catch(e) {
    errEl.textContent = 'Firebase error: ' + e.message;
    errEl.style.display = 'block';
  }
}

// ── Room ──
function genRoomCode() {
  return Math.random().toString(36).substring(2,7).toUpperCase();
}

async function openHostRoom() {
  roomId = genRoomCode();
  const initialState = {
    round: 1,
    phase: 'voting',
    votes: {},
    hasVoted: {},
    eliminated: [],
    revealed: false,
    players: PLAYERS.map(p => ({ name: p.name, photo: p.photo || null })),
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  };
  PLAYERS.forEach(p => { initialState.votes[p.name] = 0; });

  await db.collection('rooms').doc(roomId).set(initialState);

  document.getElementById('setupScreen').style.display = 'none';
  document.getElementById('gameScreen').style.display = 'block';
  document.getElementById('roomCodeDisplay').textContent = roomId;

  const playerUrl = `${location.origin}${location.pathname.replace('index.html','').replace(/\/$/, '')}/vote.html?room=${roomId}`;
  document.getElementById('joinUrl').textContent = playerUrl;

  listenToRoom();
}

// ── Real-time listener ──
let lastState = null;

function listenToRoom() {
  if (unsubscribe) unsubscribe();
  unsubscribe = db.collection('rooms').doc(roomId).onSnapshot(snap => {
    if (!snap.exists) return;
    lastState = snap.data();
    renderHostView(lastState);
  });
}

// ── Render host ──
function initials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2);
}

function photoEl(p, cls, sizeClass) {
  if (p.photo) {
    return `<img src="images/${p.photo}" class="${cls}" alt="${p.name}" onerror="this.outerHTML='<div class=\\'${sizeClass || cls}\\' style=\\'display:flex;align-items:center;justify-content:center;font-family:Cinzel,serif;color:#c9a84c;\\'>${initials(p.name)}</div>'">`
  }
  return `<div class="${sizeClass || cls}">${initials(p.name)}</div>`;
}

function renderHostView(state) {
  document.getElementById('roundPill').textContent = 'Round ' + (state.round || 1);

  const active = state.players.filter(p => !(state.eliminated || []).includes(p.name));
  const votedCount = Object.keys(state.hasVoted || {}).filter(k => (state.hasVoted || {})[k]).length;
  const totalVotes = active.reduce((s, p) => s + (state.votes[p.name] || 0), 0);

  document.getElementById('onlineStat').textContent = state.players.length;
  document.getElementById('voteStat').textContent = votedCount + ' / ' + active.length;

  document.getElementById('revealBtn').disabled = votedCount === 0 || state.revealed;
  document.getElementById('statusText').textContent = state.revealed
    ? 'Results revealed — round ' + state.round
    : `Waiting for votes — ${active.length - votedCount} remaining`;

  // Players grid
  const grid = document.getElementById('hostGrid');
  grid.innerHTML = active.map(p => {
    const v = state.votes[p.name] || 0;
    const pct = state.revealed && totalVotes > 0 ? Math.round(v / totalVotes * 100) : 0;
    const voted = (state.hasVoted || {})[p.name];
    const isElim = (state.eliminated || []).includes(p.name);

    return `<div class="player-card ${voted ? 'has-voted' : ''} ${isElim ? 'eliminated' : ''}">
      <div class="photo-wrap">
        ${p.photo
          ? `<img src="images/${p.photo}" class="player-photo" alt="${p.name}" onerror="this.outerHTML='<div class=\\'player-initials\\'>${initials(p.name)}</div>'">`
          : `<div class="player-initials">${initials(p.name)}</div>`}
        <div class="elim-overlay">
          <svg viewBox="0 0 24 24" fill="none" stroke="#e88080" stroke-width="2.5" stroke-linecap="round">
            <line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/>
          </svg>
        </div>
        <div class="voted-tick">
          <svg viewBox="0 0 12 12" fill="none" stroke="#1a1410" stroke-width="2" stroke-linecap="round">
            <polyline points="2,6 5,9 10,3"/>
          </svg>
        </div>
      </div>
      <div class="player-name">${p.name}</div>
      <div class="player-vote-count">${state.revealed ? v : ''}</div>
      <div class="mini-bar"><div class="mini-bar-fill" style="width:${pct}%"></div></div>
    </div>`;
  }).join('');

  // Eliminated sidebar
  const elims = state.eliminated || [];
  if (elims.length > 0) {
    document.getElementById('eliminatedSection').style.display = 'block';
    document.getElementById('eliminatedList').innerHTML = elims.map(e =>
      `<div class="elim-chip">✕ ${e}</div>`
    ).join('');
  }

  // Results panel
  if (state.revealed) {
    document.getElementById('resultsPanel').style.display = 'block';
    document.getElementById('nextRoundBtn').style.display = 'inline-block';
    renderResults(state, active, totalVotes);
  } else {
    document.getElementById('resultsPanel').style.display = 'none';
    document.getElementById('nextRoundBtn').style.display = 'none';
  }
}

function renderResults(state, active, totalVotes) {
  const sorted = [...active].sort((a,b) => (state.votes[b.name]||0) - (state.votes[a.name]||0));
  const maxV = state.votes[sorted[0]?.name] || 0;
  const eliminated = sorted.filter(p => (state.votes[p.name]||0) === maxV)[0];

  document.getElementById('resultsList').innerHTML = sorted.map(p => {
    const v = state.votes[p.name] || 0;
    const pct = totalVotes > 0 ? Math.round(v / totalVotes * 100) : 0;
    const isTop = p.name === eliminated?.name;
    const photoHtml = p.photo
      ? `<img src="images/${p.photo}" class="result-photo-sm" alt="${p.name}" onerror="this.outerHTML='<div class=\\'result-initials-sm\\'>${initials(p.name)}</div>'">`
      : `<div class="result-initials-sm">${initials(p.name)}</div>`;
    return `<div class="result-row ${isTop ? 'top' : ''}">
      ${photoHtml}
      <div class="result-name">${p.name}</div>
      <div class="result-bar-wrap"><div class="result-bar-fill" style="width:${pct}%"></div></div>
      <div class="result-pct">${pct}%</div>
      <div class="result-vcount">${v}v</div>
    </div>`;
  }).join('');

  document.getElementById('elimBanner').innerHTML = eliminated ? `
    <div class="elim-banner">
      <div class="elim-name">✕ ${eliminated.name} ✕</div>
      <div class="elim-caption">has been banished from the castle</div>
    </div>` : '';
}

async function revealResults() {
  if (!lastState || !roomId) return;
  const active = lastState.players.filter(p => !(lastState.eliminated||[]).includes(p.name));
  const totalVotes = active.reduce((s,p) => s + (lastState.votes[p.name]||0), 0);
  const sorted = [...active].sort((a,b) => (lastState.votes[b.name]||0) - (lastState.votes[a.name]||0));
  const maxV = lastState.votes[sorted[0]?.name] || 0;
  const newElim = sorted.filter(p => (lastState.votes[p.name]||0) === maxV)[0];
  const newEliminated = [...(lastState.eliminated||[])];
  if (newElim && !newEliminated.includes(newElim.name)) newEliminated.push(newElim.name);

  await db.collection('rooms').doc(roomId).update({
    revealed: true,
    eliminated: newEliminated
  });
}

async function nextRound() {
  if (!lastState || !roomId) return;
  const newVotes = {};
  const stillActive = lastState.players.filter(p => !(lastState.eliminated||[]).includes(p.name));
  stillActive.forEach(p => { newVotes[p.name] = 0; });
  await db.collection('rooms').doc(roomId).update({
    round: (lastState.round || 1) + 1,
    votes: newVotes,
    hasVoted: {},
    revealed: false,
    phase: 'voting'
  });
}

async function resetGame() {
  if (!confirm('Reset the whole game? This will clear all votes and start over.')) return;
  if (!roomId) { location.reload(); return; }
  const newVotes = {};
  lastState.players.forEach(p => { newVotes[p.name] = 0; });
  await db.collection('rooms').doc(roomId).update({
    round: 1,
    votes: newVotes,
    hasVoted: {},
    eliminated: [],
    revealed: false
  });
}

loadSavedConfig();
</script>
</body>
</html>
