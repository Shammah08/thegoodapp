import people from "./images/people.jpg";
import micsAreOpen from "./images/mics-thumbnail.jpg";
import micsAreOpenSquad from "./images/mics-squad.jpg";
import queShley from "./images/queshley.jpg";
import daDing from "./images/dading-different.jpg";
import lockdownSession from "./images/lockdown-session.jpg";
import lockdown_1 from "./images/lockdownX-3.jpg";
import lockdown_2 from "./images/lockdownX-2.jpg";
import wakeUpCall from "./images/wake-up-call.jpg";

export const shows = [
  {
    id: "micsareopen",
    category: "podcast",
    title: "The Mics Are Open",
    host: ["G Money", "Andy", "Calvin"],
    date: "Friday @ 10am",
    cover: micsAreOpenSquad,
    logo: micsAreOpen,
    tagline: "The Mics Are Bloodclat Open",
  },
  {
    id: "lockdown",
    category: "mixes",
    title: "Lockdown Session",
    host: ["Dj Grauchi"],
    date: "Friday @ 10pm",
    cover: lockdownSession,
    tagline: "Must Be Nice",
  },
  {
    id: "wakeupcall",
    category: "mixes",
    title: "Wake Up Call",
    host: ["Dj Grauchi"],
    date: "Saturday @ 9am",
    cover: wakeUpCall,
    tagline: "Plug Someone",
  },
  {
    id: "queshley",
    category: "podcast",
    title: "QueShley",
    host: ["Ashley", "Quellie"],
    date: "Monday @ 10am",
    cover: queShley,
    tagline: "Premium Laughter",
  },
  {
    id: "dading",
    category: "podcast",
    title: "DaDing Different",
    host: ["Some Dads"],
    date: "Wednesday @ 12pm",
    cover: people,
    logo: daDing,
    tagline: "A Space For Young Dads ",
  },
];

export const episodes = [
  {
    id: "micsareopen",
    type: 'podcast',
    cover: micsAreOpenSquad,
    episodes: [
      {
        title: "Dont't Leave Me Out Of The Wash Wash",
        postedOn: "3d",
        cover: micsAreOpen,
      },
      {
        title: "If I Cheat Will You Snitch",
        postedOn: "1w",
        cover: micsAreOpenSquad,
      },
      {
        title: "Fight Your Own Battles",
        postedOn: "2w",
        cover: micsAreOpen,
      },
    ],
  },
  {
    id: "lockdown",
    type: 'music',
    cover: lockdownSession,
    episodes: [
      {
        title: "Friday Finesse",
        postedOn: "5d",
        cover: lockdownSession,
      },
      {
        title: "Lovers Rock",
        postedOn: "3w",
        cover: lockdown_1,
      },
      {
        title: "Amapiano",
        postedOn: "1m",
        cover: lockdown_2,
      },
    ],
  },
  {
    id: "wakeupcall",
    type: 'music',
    cover: wakeUpCall,
    episodes: [
      {
        title: "Dancehall",
        postedOn: "3d",
        cover: wakeUpCall,
      },
      {
        title: "Throwback",
        postedOn: "1w",
        cover: wakeUpCall,
      },
      {
        title: "Slow Jams",
        postedOn: "2w",
        cover: wakeUpCall,
      },
    ],
  },
  {
    id: "queshley",
    type: 'podcast',
    cover: queShley,
    episodes: [
      {
        title: "Why I am single",
        postedOn: "1d",
        cover: queShley,
      },
      {
        title: "Girl Stuff",
        postedOn: "1w",
        cover: queShley,
      },
      {
        title: "More Girl Stuff",
        postedOn: "2w",
        cover: queShley,
      },
    ],
  },
  {
    id: "dading",
    type: 'podcast',
    episodes: [
      {
        title: "Dad Stuff 101",
        postedOn: "3d",
        cover: daDing,
      },
      {
        title: "Some More Dad Stuff",
        postedOn: "1w",
        cover: daDing,
      },
      {
        title: "You Guessed It...",
        postedOn: "2w",
        cover: daDing,
      },
    ],
  },
];
