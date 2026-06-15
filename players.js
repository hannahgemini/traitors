// ============================================================
//  PLAYERS.JS  –  Edit this file before each game
// ============================================================
//
//  51 players assigned to 6 teams (A–F).
//  Team sizes: A=8, B=8, C=8, D=8, E=9, F=10
//
//  To reassign teams, change the `team` property on any player.
//  Drop photo files into the images/ folder.
//
//  EXAMPLE ENTRY:
//    { name: "Alice Smith",  photo: "alice.jpg",  team: "A" },
//    { name: "Bob Johnson",  photo: null,         team: "B" },
//
// ============================================================

const PLAYERS = [
  // ─── TEAM A — 8 players ──────────────────────────────────
  { name: "Sara Woodroffe",     photo: null,  team: "A" },
  { name: "Farida Ali",      photo: null,  team: "A" },
  { name: "Simon Thomas",      photo: null,    team: "A" },
  { name: "Lyn Simpson",      photo: null,  team: "A" },
  { name: "Steve Cowin",      photo: null,  team: "A" },
  { name: "Lisa Kerr",       photo: null,   team: "A" },
  { name: "Tom Deighton",     photo: null,  team: "A" },
  { name: "Rebecca Graham",        photo: null,  team: "A" },


  // ─── TEAM B — 8 players ──────────────────────────────────
  { name: "Sana Patel",    photo: null,         team: "B" },
  { name: "Greg MacDonald",       photo: null,         team: "B" },
  { name: "Anne-Marie Dempsey",     photo: null,         team: "B" },
  { name: "Carla Brown",      photo: null,         team: "B" },
  { name: "Ryan King",     photo: null,         team: "B" },
  { name: "Rachel Stewart",     photo: null,         team: "B" },
  { name: "Ben Aldersley",      photo: null,         team: "B" },
  { name: "James Macaulay",    photo: null,         team: "B" },


  // ─── TEAM C — 8 players ──────────────────────────────────
  { name: "Sarah Brewis",      photo: null,         team: "C" },
  { name: "Kim Woodburn",     photo: null,         team: "C" },
  { name: "Kevin Oh",         photo: null,         team: "C" },
  { name: "Irene Leung",      photo: null,         team: "C" },
  { name: "Andrew Cochran",        photo: null,         team: "C" },
  { name: "Hassan Kamara",     photo: null,         team: "C" },
  { name: "Mac Marlowe",      photo: null,         team: "C" },
  { name: "Ben Harper",     photo: null,         team: "C" },

  // ─── TEAM D — 8 players ──────────────────────────────────
  { name: "Stella Nabukeera",    photo: null,         team: "D" },
  { name: "Correne Alexis",       photo: null,         team: "D" },
  { name: "Juliet Griffiths",   photo: null,         team: "D" },
  { name: "Patrick Cassidy",      photo: null,         team: "D" },
  { name: "Joanna Hill",     photo: null,         team: "D" },
  { name: "Joanna Lipscombe",   photo: null,         team: "D" },
  { name: "Kostantinos Oikonomakos",   photo: null,         team: "D" },
  { name: "David Chong",     photo: null,         team: "D" },

  // ─── TEAM E — 9 players ──────────────────────────────────
  { name: "James Harvey",     photo: null,         team: "E" },
  { name: "Soraya Amadi",   photo: null,         team: "E" },
  { name: "Susan Lynch",     photo: null,         team: "E" },
  { name: "Sal Vassan",    photo: null,         team: "E" },
  { name: "Naomi Lawrence",     photo: null,         team: "E" },
  { name: "Rob Shaw",     photo: null,         team: "E" },
  { name: "Louise Brennan",    photo: null,         team: "E" },
  { name: "Fatima Khanom",        photo: null,         team: "E" },
  { name: "Matthew Jackson",       photo: null,         team: "E" },

  // ─── TEAM F — 10 players ─────────────────────────────────
  { name: "Shaun Donnelly",     photo: null,         team: "F" },
  { name: "Mrinal Sen",     photo: null,         team: "F" },
  { name: "Mark Hollinworth",      photo: null,         team: "F" },
  { name: "Sum Sze Tam",     photo: null,         team: "F" },
  { name: "Ateed Butt",     photo: null,         team: "F" },
  { name: "Lewis Gregory",   photo: null,         team: "F" },
  { name: "Sinead Turner",  photo: null,         team: "F" },
  { name: "Richard Briggs",        photo: null,         team: "F" },
  { name: "Joe Hawes",      photo: null,         team: "F" },
  { name: "Mark Mulford",    photo: null,         team: "F" },
];

// ── Quick reference ──────────────────────────────────────────
// Team A: 8  ·  Team B: 8  ·  Team C: 8  ·  Team D: 8
// Team E: 9  ·  Team F: 10  ·  TOTAL: 51 players
//
// Round 1: 2 eliminated per team = 12 total  →  39 remain
// Round 2: 2 eliminated per team = 12 total  →  27 remain
// Round 3: 3 eliminated per team = 18 total  →   9 remain
// Final:   all 51 vote · top 6 eliminated    →   3 winners
