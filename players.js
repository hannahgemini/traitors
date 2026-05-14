// ============================================================
//  PLAYERS.JS  –  Edit this file before each game
// ============================================================
//
//  Add all 50 colleagues below.
//  Each entry needs a `name` and an optional `photo` filename.
//  Drop photo files into the images/ folder.
//
//  The system will automatically split players into two teams
//  of 25 when the host clicks "Randomise Teams".
//
//  EXAMPLE ENTRY:
//    { name: "Alice Smith",  photo: "alice.jpg"  },
//    { name: "Bob Johnson",  photo: null         },  ← no photo = initials shown
//
// ============================================================

const PLAYERS = [
  { name: "Alice Smith",     photo: "alice.jpg"     },
  { name: "Bob Johnson",     photo: "bob.jpg"       },
  { name: "Carol White",     photo: "carol.jpg"     },
  { name: "David Brown",     photo: "david.jpg"     },
  { name: "Emma Davis",      photo: "emma.jpg"      },
  { name: "Frank Wilson",    photo: "frank.jpg"     },
  { name: "Grace Lee",       photo: "grace.jpg"     },
  { name: "Harry Taylor",    photo: "harry.jpg"     },
  { name: "Isla Martinez",   photo: null            },
  { name: "Jack O'Brien",    photo: null            },
  { name: "Karen Clark",     photo: null            },
  { name: "Liam Roberts",    photo: null            },
  { name: "Mia Thompson",    photo: null            },
  { name: "Noah Harris",     photo: null            },
  { name: "Olivia Walker",   photo: null            },
  { name: "Peter Hall",      photo: null            },
  { name: "Quinn Allen",     photo: null            },
  { name: "Rachel Young",    photo: null            },
  { name: "Sam King",        photo: null            },
  { name: "Tara Wright",     photo: null            },
  { name: "Uma Scott",       photo: null            },
  { name: "Victor Green",    photo: null            },
  { name: "Wendy Baker",     photo: null            },
  { name: "Xander Adams",    photo: null            },
  { name: "Yasmin Nelson",   photo: null            },
  { name: "Zoe Carter",      photo: null            },
  { name: "Aiden Mitchell",  photo: null            },
  { name: "Bella Perez",     photo: null            },
  { name: "Caleb Turner",    photo: null            },
  { name: "Diana Phillips",  photo: null            },
  { name: "Ethan Campbell",  photo: null            },
  { name: "Fiona Parker",    photo: null            },
  { name: "George Evans",    photo: null            },
  { name: "Hannah Edwards",  photo: null            },
  { name: "Ivan Collins",    photo: null            },
  { name: "Julia Stewart",   photo: null            },
  { name: "Kyle Sanchez",    photo: null            },
  { name: "Laura Morris",    photo: null            },
  { name: "Marcus Rogers",   photo: null            },
  { name: "Nina Reed",       photo: null            },
  { name: "Oscar Cook",      photo: null            },
  { name: "Priya Morgan",    photo: null            },
  { name: "Quentin Bell",    photo: null            },
  { name: "Rosa Murphy",     photo: null            },
  { name: "Steve Bailey",    photo: null            },
  { name: "Tammy Rivera",    photo: null            },
  { name: "Ulysses Cooper",  photo: null            },
  { name: "Violet Richardson",photo: null           },
  { name: "Wayne Cox",       photo: null            },
  { name: "Xena Howard",     photo: null            },
];

// ── Quick check ──────────────────────────────────────────
// The game expects exactly 50 players (25 per team).
// You can use fewer, but teams may be unequal.
// Remove the placeholder entries below and replace with real names.
