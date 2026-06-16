// ============================================================
//  PLAYERS.JS  –  Edit this file before each game
// ============================================================
//
//  51 players assigned to 6 teams (A–F).
//  Team sizes: A=8, B=8, C=8, D=8, E=9, F=10
//
//  TRAITORS: Set `traitor: true` on exactly ONE player per team
//  (6 traitors total). All others stay `traitor: false`.
//  The traitor's first vote each round is a guaranteed elimination
//  regardless of how many votes that player received.
//
//  EXAMPLE ENTRY:
//    { name: "Alice Smith",  photo: "alice.jpg",  team: "A", traitor: true  },
//    { name: "Bob Johnson",  photo: null,         team: "A", traitor: false },
//
// ============================================================

const PLAYERS = [
  // ─── TEAM A — 8 players ──────────────────────────────────
  { name: "Sara Woodroffe",     photo: null,  team: "A", traitor: true },
  { name: "Sum Sze Tam",         photo: null,  team: "A", traitor: false },
  { name: "Rebecca Graham",       photo: null,  team: "A", traitor: false },
  { name: "Steve Cowin",        photo: null,  team: "A", traitor: false },
  { name: "Joe Hawes",        photo: null,  team: "A", traitor: false },
  { name: "Richard Briggs",          photo: null,  team: "A", traitor: false },
  { name: "Ben Aldersley",       photo: null,  team: "A", traitor: false },
  { name: "Matthew Jackson",     photo: null,  team: "A", traitor: false },


  // ─── TEAM B — 8 players ──────────────────────────────────
  { name: "Sana Patel",         photo: null,  team: "B", traitor: true },
  { name: "Lyn Simpson",     photo: null,  team: "B", traitor: false },
  { name: "Soraya Amadi", photo: null,  team: "B", traitor: false },
  { name: "Sinead Turner",        photo: null,  team: "B", traitor: false },
  { name: "Ateed Butt",          photo: null,  team: "B", traitor: false },
  { name: "Tom Deighton",     photo: null,  team: "B", traitor: false },
  { name: "Andrew Cochran",      photo: null,  team: "B", traitor: false },
  { name: "Kim Woodburn",     photo: null,  team: "B", traitor: false },


  // ─── TEAM C — 8 players ──────────────────────────────────
  { name: "Shaun Donnelly",       photo: null,  team: "C", traitor: true },
  { name: "Correne Alexis",       photo: null,  team: "C", traitor: false },
  { name: "Joanna Hill",           photo: null,  team: "C", traitor: false },
  { name: "Sal Vassan",        photo: null,  team: "C", traitor: false },
  { name: "Naomi Lawrence",     photo: null,  team: "C", traitor: false },
  { name: "Ben Harper",      photo: null,  team: "C", traitor: false },
  { name: "Kostantinos Oikonomakos",        photo: null,  team: "C", traitor: false },
  { name: "Alex Buxton",         photo: null,  team: "C", traitor: false },

  // ─── TEAM D — 8 players ──────────────────────────────────
  { name: "Stella Nabukeera",         photo: null,  team: "D", traitor: true },
  { name: "Kevin Oh",           photo: null,  team: "D", traitor: false },
  { name: "Mrinal Sen",         photo: null,  team: "D", traitor: false },
  { name: "Juliet Griffiths",          photo: null,  team: "D", traitor: false },
  { name: "Mac Marlowe",              photo: null,  team: "D", traitor: false },
  { name: "Lewis Gregory",         photo: null,  team: "D", traitor: false },
  { name: "Patrick Cassidy",  photo: null,  team: "D", traitor: false },
  { name: "Carla Brown",              photo: null,  team: "D", traitor: false },

  // ─── TEAM E — 9 players ──────────────────────────────────
  { name: "James Harvey",       photo: null,  team: "E", traitor: true },
  { name: "Rachel Stewart",       photo: null,  team: "E", traitor: false },
  { name: "Louise Brennan",        photo: null,  team: "E", traitor: false },
  { name: "Lisa Kerr",         photo: null,  team: "E", traitor: false },
  { name: "Irene Leung",     photo: null,  team: "E", traitor: false },
  { name: "Hassan Kamara",           photo: null,  team: "E", traitor: false },
  { name: "Greg MacDonald",     photo: null,  team: "E", traitor: false },
  { name: "Simon Thomas",      photo: null,  team: "E", traitor: false },
  { name: "Farida Ali",    photo: null,  team: "E", traitor: false },

  // ─── TEAM F — 10 players ─────────────────────────────────
  { name: "Sarah Brewis",     photo: null,  team: "F", traitor: true },
  { name: "Rob Shaw",         photo: null,  team: "F", traitor: false },
  { name: "Joanna Lipscombe",   photo: null,  team: "F", traitor: false },
  { name: "Anne-Marie Dempsey",        photo: null,  team: "F", traitor: false },
  { name: "Fatima Khanom",         photo: null,  team: "F", traitor: false },
  { name: "James Macaulay",      photo: null,  team: "F", traitor: false },
  { name: "Mark Mulford",      photo: null,  team: "F", traitor: false },
  { name: "David Chong",     photo: null,  team: "F", traitor: false },
  { name: "Ryan King",          photo: null,  team: "F", traitor: false },
  { name: "Mark Hollinworth",       photo: null,  team: "F", traitor: false },
];

// ── Quick reference ──────────────────────────────────────────
// Team A: 8  ·  Team B: 8  ·  Team C: 8  ·  Team D: 8
// Team E: 9  ·  Team F: 10  ·  TOTAL: 51 players
//
// Round 1: 2 eliminated per team = 12 total  →  39 remain
// Round 2: 2 eliminated per team = 12 total  →  27 remain
// Round 3: 3 eliminated per team = 18 total  →   9 remain
// Final:   all 51 vote · top 6 eliminated    →   3 winners
//
// Traitor mechanic (rounds 1–3 only):
//   · First vote selection  = guaranteed kill (not tallied)
//   · Second vote selection = normal tally vote
//   · Kill counts as 1 of the N eliminations for that team
