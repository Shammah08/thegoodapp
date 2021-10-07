// Show Covers
import people from "./images/people.jpg";
import micsAreOpen from "./images/mics-thumbnail.jpg";
import micsAreOpenSquad from "./images/mics-squad.jpg";
import theCookBook from "./images/the-cook-book.jpg";
import daDing from "./images/dading-different.jpg";
import lockdownSession from "./images/lockdown-session.jpg";
import wakeUpCall from "./images/wake-up-call.jpg";

// Landing Sides
import nairobi from "./images/Nairobi.jpg";
// import skyline from "./images/Nairobi-Night-Skyline.jpg";
import silverArrow from "./images/silver-arrow.jpg";
import laptop from "./images/laptop.jpg";
import party from "./images/party.jpg";

// Team
import GMoney from "./images/GMoney.jpg";
import Andy from "./images/Andy.jpg";
import Kevin from "./images/Kevin.jpg";
import Michael from "./images/Michael.png";
import Ramadhani from "./images/Ramadhani.png";
import Calvin from "./images/Calvin.jpg";
import Neville from "./images/Neville.jpg";
import Grauchi from "./images/Grauchi.jpg";
import Ashley from "./images/ashley.jpg";
import Quellie from "./images/quellie.jpg";

// Shop Products
import coffeeMug from "./images/Coffee-Mug-1.jpg";
import coffeeMugWhite from "./images/Coffee-Mug-White.jpg";
import coffeeMugBlack from "./images/Coffee-Mug-Magic.jpg";
import maoBlack from "./images/mics-shirt-black.jpg";
import maoWhite from "./images/mics-shirt-white.jpg";
import coasters from "./images/Round-Coasters-White.jpg";
import coastersRound from "./images/Round-Coasters.jpg";
import bottleNewBlack from "./images/New-Bottles-Black.jpg";
import bottleNewBlue from "./images/New-Bottles-Blue.jpg";
import bottleBlue from "./images/Water-Bottle-Blue.jpg";
import bottleCharcoal from "./images/Water-Bottle-Charcoal.jpg";
import bottleLime from "./images/Water-Bottle-Lime.jpg";
import bottleRed from "./images/Water-Bottle-Red.jpg";
import bottleWhite from "./images/Water-Bottle-White.jpg";

export const landingTemplates = [
  {
    index: 1,
    image: nairobi,
    title: "WE ARE THE GOOD COMPANY",
    desc: "a creative agency located in Nairobi, Kenya.",
    button: "About Us",
    startAnimation: true,
    url: "#about",
  },
  {
    index: 2,
    image: silverArrow,
    title: "WE BUILD BRANDS",
    desc: "We specialize in enhancing and building brand equity through tailored strategies & campaigns",
    button: "Learn More",
    startAnimation: "",
    url: "#quote",
  },
  {
    index: 3,
    image: party,
    title: "WE CREATE EXPERIENCES",
    desc: "We have over 20 years of event management experience. From concept to delivery, we have got you covered.",
    button: "Learn More",
    startAnimation: "",
    url: "podcast",
  },
  {
    index: 4,
    image: laptop,
    title: "WE CREATE FOR THE WEB",
    desc: "We design and develop websites and mobile apps to achieve the specific declared goals set by our clients.",
    button: "Learn More",
    startAnimation: "",
    url: "#services",
  },
  {
    index: 5,
    image: people,
    title: "WE ARE GOOD COMPANY",
    desc: "After all you are the company you keep",
    button: "About Us",
    startAnimation: "",
    url: "team",
  },
];

export const shows = [
  {
    id: "micsareopen",
    category: "podcast",
    title: "The Mics Are Open",
    host: ["G Money", "Andy", "Calvin", "Neville"],
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
    title: "The Wake Up Call",
    host: ["Dj Grauchi"],
    date: "Saturday @ 9am",
    cover: wakeUpCall,
    tagline: "Plug Someone",
  },
  {
    id: "queshley",
    category: "podcast",
    title: "The Cookbook",
    host: ["Ashley", "Quellie"],
    date: "Monday @ 10am",
    cover: theCookBook,
    tagline: "Premium Laughter",
  },
  {
    id: "dading",
    category: "podcast",
    title: "DADing Different ",
    host: ["Some Dads"],
    date: "Wednesday @ 12pm",
    cover: people,
    logo: daDing,
    tagline: "A Space For Young Dads ",
  },
];

export const videosData = [
  {
    kind: "youtube#searchResult",
    etag: "AgV3EbucOVl6SRdJ1JhR_nZ14mY",
    id: {
      kind: "youtube#video",
      videoId: "WTFdN3TVfFM",
    },
    snippet: {
      publishedAt: "2021-09-15T19:00:11Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The CookBook Episode 2",
      description:
        "Two girls, who like to have fun, bring the fun to your screen. They have it all - relationships, escapades, friendships and bants. Ashley & Quellie, better known as ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WTFdN3TVfFM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/WTFdN3TVfFM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/WTFdN3TVfFM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-09-15T19:00:11Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "h918sN-FFO6aEiRS0Y69Vk0KbiM",
    id: {
      kind: "youtube#video",
      videoId: "uBjylF7VCUA",
    },
    snippet: {
      publishedAt: "2021-09-11T06:00:12Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Wake Up Call with Grauchi #39 Replay",
      description:
        "Share di Ting!!! Plug someone right ABOUT now... As Usual, The sound is nice, every Saturday at 9am.. Tshirt plug : https://www.instagram.com/venantsgear/ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/uBjylF7VCUA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/uBjylF7VCUA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/uBjylF7VCUA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-09-11T06:00:12Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "lF-YOkeW6fmyfzDHo6geyuTq9-I",
    id: {
      kind: "youtube#video",
      videoId: "IyJ2dSST0SE",
    },
    snippet: {
      publishedAt: "2021-09-10T19:00:14Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Lockdown Sessions ft Zj Heno",
      description:
        "Share the link!! to just one more person. In these Curfew and Lockdown times, we can still manage fun times.. Be part of Premiere Gang and get to enjoy what ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/IyJ2dSST0SE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/IyJ2dSST0SE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/IyJ2dSST0SE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-09-10T19:00:14Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "dULjhQnV-sBmwqDtgEIDiA2TmHU",
    id: {
      kind: "youtube#video",
      videoId: "3Jcv83fenDg",
    },
    snippet: {
      publishedAt: "2021-09-10T07:00:09Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Mics Are Open -  #124 - Certified Lover Boys!",
      description:
        "This week we are joined by Hafare from the Surviving Nairobi podcast as Calvin has gone to pay dowry. The lads chop it up about music, well, about mostly ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/3Jcv83fenDg/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/3Jcv83fenDg/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/3Jcv83fenDg/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-09-10T07:00:09Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "Lpw1keAZr_1C3fJrXXDQQIuabTs",
    id: {
      kind: "youtube#video",
      videoId: "2xG3Pzx2Qlk",
    },
    snippet: {
      publishedAt: "2021-09-07T19:00:31Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title:
        "MOM I GOT TWO GIRLS PREGNANT!! - NEVILLE PRANKS HIS REAL AFRICAN MOM!!",
      description:
        "Neville has always been the mischievous member of the the Good Co Crew so he decided to tell his Mom that he had gotten two girls pregnant at the same ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/2xG3Pzx2Qlk/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/2xG3Pzx2Qlk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/2xG3Pzx2Qlk/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-09-07T19:00:31Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "lSJ7g6YKeH_N45MgEd63-eQ-7ls",
    id: {
      kind: "youtube#video",
      videoId: "UvHMj9Z4w0U",
    },
    snippet: {
      publishedAt: "2021-09-04T06:00:29Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Wake Up Call with Grauchi #38 Magnetic",
      description:
        "Share di Ting!!! Plug someone right ABOUT now... As Usual, The sound is nice, every Saturday at 9am.. Tshirt plug : https://www.instagram.com/venantsgear/ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/UvHMj9Z4w0U/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/UvHMj9Z4w0U/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/UvHMj9Z4w0U/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-09-04T06:00:29Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "i4frbKCZ5bXoNQO2DXv8S8x4OK0",
    id: {
      kind: "youtube#video",
      videoId: "ikMUwmbXmhQ",
    },
    snippet: {
      publishedAt: "2021-09-03T19:00:12Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "Lockdown Sessions ft Dj Redbone &amp; Dj IV",
      description:
        "Share the link!! to just one more person. In these Curfew and Lockdown times, we can still manage fun times.. Be part of Premiere Gang and get to enjoy what ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ikMUwmbXmhQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/ikMUwmbXmhQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/ikMUwmbXmhQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-09-03T19:00:12Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "9SfEhYIxiEaWApxh9UKT-V5uFmQ",
    id: {
      kind: "youtube#video",
      videoId: "0ctlygui6tQ",
    },
    snippet: {
      publishedAt: "2021-09-03T07:00:11Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title:
        "The Mics Are Open - #123 - Don&#39;t Leave Me Out Of The Wash Wash!!",
      description:
        "This week the lads are ungovernable, from where is the best place to take a number 2 to why they don't want to be left out of the Wash Wash saga - it's a ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/0ctlygui6tQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/0ctlygui6tQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/0ctlygui6tQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-09-03T07:00:11Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "ijVcjM2YpfrQqT46frXNubYOtE8",
    id: {
      kind: "youtube#video",
      videoId: "apeY1CpfFzs",
    },
    snippet: {
      publishedAt: "2021-08-28T06:00:13Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Wake Up Call with Grauchi #37 Stories",
      description:
        "Share di Ting!!! Plug someone right ABOUT now... As Usual, The sound is nice, every Saturday at 9am.. Tshirt plug : https://www.instagram.com/venantsgear/ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/apeY1CpfFzs/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/apeY1CpfFzs/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/apeY1CpfFzs/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-08-28T06:00:13Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "NR7v0wIEPpaG41lq2klYLTcEKEU",
    id: {
      kind: "youtube#video",
      videoId: "8sWbjQuSUYo",
    },
    snippet: {
      publishedAt: "2021-08-27T19:00:12Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "Lockdown Sessions ft Gmoney &amp; Grauchi",
      description:
        "Share the link!! to just one more person. In these Curfew and Lockdown times, we can still manage fun times.. Be part of Premiere Gang and get to enjoy what ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/8sWbjQuSUYo/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/8sWbjQuSUYo/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/8sWbjQuSUYo/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-08-27T19:00:12Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "YsB0ugjhy65KscBzGvayhIHVGbw",
    id: {
      kind: "youtube#video",
      videoId: "I6Lo6BhT4PY",
    },
    snippet: {
      publishedAt: "2021-08-27T07:00:16Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Mics Are Open #122 If I Cheat Will You Snitch",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/I6Lo6BhT4PY/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/I6Lo6BhT4PY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/I6Lo6BhT4PY/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-08-27T07:00:16Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "nPPwOM9FF3w_J2Sa_QorpAYhSTg",
    id: {
      kind: "youtube#video",
      videoId: "f94JyqmDxJQ",
    },
    snippet: {
      publishedAt: "2021-08-26T14:00:12Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "Kanairo Volume 1 - feat Lyrical Jumper",
      description:
        "Lyrical Jumper make their debut on the channel with a conversation at life in the city. Everyone in Nairobi has their story and these guys will have you in stitches.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/f94JyqmDxJQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/f94JyqmDxJQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/f94JyqmDxJQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-08-26T14:00:12Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "rMxIaRO4E2Ntj5vIDYcBlUTCSHw",
    id: {
      kind: "youtube#video",
      videoId: "2tZje0PZqok",
    },
    snippet: {
      publishedAt: "2021-08-25T07:00:24Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "DADing Different - Uncomfortable Moments - What Are They",
      description:
        "In Association with DaDing Different and Johnnie Walker, we sat down with 7 new fathers and allowed the cameras to just roll. These candid conversations are ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/2tZje0PZqok/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/2tZje0PZqok/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/2tZje0PZqok/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-08-25T07:00:24Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "v1s0TuhQB5auutkGzCjl8NZMaXI",
    id: {
      kind: "youtube#video",
      videoId: "J6nYKKGWmIk",
    },
    snippet: {
      publishedAt: "2021-08-22T12:00:13Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title:
        "DADing Different - The 1st and 2nd Pregnancy - How does it differ?",
      description:
        "In Association with DaDing Different and Johnnie Walker, we sat down with 7 new fathers and allowed the cameras to just roll. These candid conversations are ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/J6nYKKGWmIk/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/J6nYKKGWmIk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/J6nYKKGWmIk/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-08-22T12:00:13Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "P7cuShNdBjMEKfASSnMa1h3tS48",
    id: {
      kind: "youtube#video",
      videoId: "8gDDwIQc838",
    },
    snippet: {
      publishedAt: "2021-08-21T06:00:10Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Wake Up Call with Grauchi #36 Stronger",
      description:
        "Share di Ting!!! Plug someone right ABOUT now... As Usual, The sound is nice, every Saturday at 9am.. Tshirt plug : https://www.instagram.com/venantsgear/ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/8gDDwIQc838/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/8gDDwIQc838/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/8gDDwIQc838/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-08-21T06:00:10Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "bVVMM_zUmrM7iRTCgWlvJbKonu8",
    id: {
      kind: "youtube#video",
      videoId: "l2kuRZmxPzc",
    },
    snippet: {
      publishedAt: "2021-08-20T19:00:10Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "Lockdown Sessions ft G Money &amp; Andy Young",
      description:
        "Share the link!! to just one more person. In these Curfew and Lockdown times, we can still manage fun times.. Be part of Premiere Gang and get to enjoy what ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/l2kuRZmxPzc/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/l2kuRZmxPzc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/l2kuRZmxPzc/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-08-20T19:00:10Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "cyy2QtWmq0lEr5FxzXHqee_X4uE",
    id: {
      kind: "youtube#video",
      videoId: "GGP_VNponvc",
    },
    snippet: {
      publishedAt: "2021-08-20T07:00:09Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Mics Are Open #121 Men Love Men!",
      description:
        "This weeks episode is bananas! The lads take on the issue of male and female friendships .. AGAIN, but with a whole new take! We also discuss policing in ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/GGP_VNponvc/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/GGP_VNponvc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/GGP_VNponvc/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-08-20T07:00:09Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "psSoYjF4niXjiZLVMWbHnkJ_n7A",
    id: {
      kind: "youtube#video",
      videoId: "g5zLDt6o8EY",
    },
    snippet: {
      publishedAt: "2021-08-18T07:00:16Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Cookbook - Episode 1 - Why Am I Single?",
      description:
        "The first episode of a new series of conversations with the channel's 1st Ladies, Ashley and Quellie. Two girls, who like to have fun, bring the fun to your screen.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/g5zLDt6o8EY/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/g5zLDt6o8EY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/g5zLDt6o8EY/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-08-18T07:00:16Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "DISo3XE3cNbLLCUOmPYbTd01a2A",
    id: {
      kind: "youtube#video",
      videoId: "TChEFimytnA",
    },
    snippet: {
      publishedAt: "2021-08-17T17:00:11Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "DADing Different  - &quot;Justice Has To Be Fair&quot;",
      description:
        "In Association with DaDing Different and Johnnie Walker, we sat down with 7 new fathers and allowed the cameras to just roll. These candid conversations are ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/TChEFimytnA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/TChEFimytnA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/TChEFimytnA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-08-17T17:00:11Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "v6zuJVBZNS9MiE-lnSRcgXa2V0E",
    id: {
      kind: "youtube#video",
      videoId: "7NxaOtwXixc",
    },
    snippet: {
      publishedAt: "2021-08-14T06:00:12Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Wake Up Call with Grauchi #35 Sugar",
      description:
        "Share di Ting!!! Plug someone right ABOUT now... As Usual, The sound is nice, every Saturday at 9am.. Tshirt plug : https://www.instagram.com/venantsgear/ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/7NxaOtwXixc/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/7NxaOtwXixc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/7NxaOtwXixc/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-08-14T06:00:12Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "H60UB8ZmhJ4mk_tPz95m90ikKc0",
    id: {
      kind: "youtube#video",
      videoId: "N4rmYK6eSR8",
    },
    snippet: {
      publishedAt: "2021-08-13T19:00:11Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "Lockdown Sessions II #ManLikeGrauchi",
      description:
        "Share the link!! to just one more person. In these Curfew and Lockdown times, we can still manage fun times.. Be part of Premiere Gang and get to enjoy what ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/N4rmYK6eSR8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/N4rmYK6eSR8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/N4rmYK6eSR8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-08-13T19:00:11Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "J2kaRwJHv-q459ZZ1W7u0wxcje8",
    id: {
      kind: "youtube#video",
      videoId: "akhIVcyL4nE",
    },
    snippet: {
      publishedAt: "2021-08-13T07:00:10Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Mics Are Open #120 - Fight Your Own Battles",
      description:
        "When your boy gets into a fight, are you backing him or is it every man for himself. Also, is it right for the government to force people to take the Covid 19 vaccine ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/akhIVcyL4nE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/akhIVcyL4nE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/akhIVcyL4nE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-08-13T07:00:10Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "gDsNIGrJQun0G2wQRZ5MjuYmEkU",
    id: {
      kind: "youtube#video",
      videoId: "K1b2ZqKRl0k",
    },
    snippet: {
      publishedAt: "2021-08-07T06:00:10Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Wake Up Call with Grauchi #34 Coco",
      description:
        "Share di Ting!!! Plug someone right ABOUT now... As Usual, The sound is nice, every Saturday at 9am.. Tshirt plug : https://www.instagram.com/venantsgear/ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/K1b2ZqKRl0k/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/K1b2ZqKRl0k/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/K1b2ZqKRl0k/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-08-07T06:00:10Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "YNYD02Owgp8rwvdbR4bsqH4REhc",
    id: {
      kind: "youtube#video",
      videoId: "8yMJualQs6Q",
    },
    snippet: {
      publishedAt: "2021-08-06T19:00:12Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "Lockdown Sessions ft Dj Andie &amp; Dj Mr Fabz",
      description:
        "Share the link!! to just one more person. In these Curfew and Lockdown times, we can still manage fun times.. Be part of Premiere Gang and get to enjoy what ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/8yMJualQs6Q/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/8yMJualQs6Q/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/8yMJualQs6Q/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-08-06T19:00:12Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "8-PVwxy8e6U5FMuxEyWredo6iQ4",
    id: {
      kind: "youtube#video",
      videoId: "K49DfQ6kljY",
    },
    snippet: {
      publishedAt: "2021-08-06T07:00:10Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "#119 - The Mics Are Open - The Battle For Clean Boxers!",
      description:
        "Mandem, who washes your boxers? The answer might shock you. The lads are on a roll this week with the conversation ranging from beards, to boxers, ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/K49DfQ6kljY/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/K49DfQ6kljY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/K49DfQ6kljY/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-08-06T07:00:10Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "YJaR7GMSFmRAygAcL_aJoSNqB60",
    id: {
      kind: "youtube#video",
      videoId: "ph2_ItdSwFs",
    },
    snippet: {
      publishedAt: "2021-07-31T06:00:12Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Wake Up Call with Grauchi #33 - Closer",
      description:
        "Share di Ting!!! Plug someone right ABOUT now... As Usual, The sound is nice, every Saturday at 9am.. Tshirt plug : https://www.instagram.com/venantsgear/ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ph2_ItdSwFs/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/ph2_ItdSwFs/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/ph2_ItdSwFs/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-07-31T06:00:12Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "Cy06KjyUAaGiTygMSDAxXQ19RN0",
    id: {
      kind: "youtube#video",
      videoId: "LZzn54n9vsc",
    },
    snippet: {
      publishedAt: "2021-07-30T19:00:13Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "Lockdown Sessions Max Radio x Zj Heno",
      description:
        "Share the link!! to just one more person. In these Curfew and Lockdown times, we can still manage fun times.. Be part of Premiere Gang and get to enjoy what ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/LZzn54n9vsc/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/LZzn54n9vsc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/LZzn54n9vsc/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-07-30T19:00:13Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "BABvQwPU81O-cdS9agsiPHLSxVk",
    id: {
      kind: "youtube#video",
      videoId: "8LU2cpXeljc",
    },
    snippet: {
      publishedAt: "2021-07-30T07:00:11Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Mics Are Open - #118 - Tuko Ndani Bana!",
      description:
        "The family is back together for the first time in month and the lads have refused to welcome G Money. The conversation ranges from paying for content to ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/8LU2cpXeljc/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/8LU2cpXeljc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/8LU2cpXeljc/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-07-30T07:00:11Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "EvPUbWvukA7Tt_mhEx3Pa85AyZA",
    id: {
      kind: "youtube#video",
      videoId: "NaveG_TMMhc",
    },
    snippet: {
      publishedAt: "2021-07-23T19:00:11Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "Lockdown Sessions #ManlikeGrauchi",
      description:
        "Share the link!! to just one more person. In these Curfew and Lockdown times, we can still manage fun times.. Be part of Premiere Gang and get to enjoy what ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/NaveG_TMMhc/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/NaveG_TMMhc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/NaveG_TMMhc/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-07-23T19:00:11Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "NNNFSCZOuwazzfoV2MTmjz-RolQ",
    id: {
      kind: "youtube#video",
      videoId: "0MCRZKDYl-8",
    },
    snippet: {
      publishedAt: "2021-07-23T07:00:28Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Mics Are Open #117 - My First Time",
      description:
        "New Week, New Vibes... Calvin shares the most weird place to go on a date. Nev Teaches his mum how to drive, how tiring can it get... The lads delve into the ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/0MCRZKDYl-8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/0MCRZKDYl-8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/0MCRZKDYl-8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-07-23T07:00:28Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "1XLSC9nthO9McgmE_A0zvB9fuQ0",
    id: {
      kind: "youtube#video",
      videoId: "jrT0wbe8ocU",
    },
    snippet: {
      publishedAt: "2021-07-17T06:00:12Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Wake Up Call With Grauchi #31 Flex",
      description:
        "Share di Ting!!! Plug someone right ABOUT now... As Usual, The sound is nice, every Saturday at 9am.. Tshirt plug : https://www.instagram.com/venantsgear/ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/jrT0wbe8ocU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/jrT0wbe8ocU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/jrT0wbe8ocU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-07-17T06:00:12Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "zbAeY40OIJO4xXLKMCSqzY-O-6E",
    id: {
      kind: "youtube#video",
      videoId: "p8kd0Y4JbMU",
    },
    snippet: {
      publishedAt: "2021-07-16T19:00:10Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "Lockdown Sessions Dj IV x DJ Redbone",
      description:
        "Share the link!! to just one more person. In these Curfew and Lockdown times, we can still manage fun times.. Be part of Premiere Gang and get to enjoy what ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/p8kd0Y4JbMU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/p8kd0Y4JbMU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/p8kd0Y4JbMU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-07-16T19:00:10Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "uIa9DNKEAyT-7qb9viCuN4emnhg",
    id: {
      kind: "youtube#video",
      videoId: "WbUG5fOOHgw",
    },
    snippet: {
      publishedAt: "2021-07-16T07:00:09Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Mics Are Open #116 - If You Like Me Shoot Your Shot",
      description:
        "New Week.. Neville is still ON.. Poor G.. The lads at it again as they delve into what they wish women knew about men without having to say it.. Andy is a freak ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WbUG5fOOHgw/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/WbUG5fOOHgw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/WbUG5fOOHgw/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-07-16T07:00:09Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "wMCEpYjiXwMu8or35bj_Po28tXg",
    id: {
      kind: "youtube#video",
      videoId: "oK-LWEqOzew",
    },
    snippet: {
      publishedAt: "2021-07-10T06:00:13Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Wake Up Call with Grauchi #30 Bounce",
      description:
        "Share di Ting!!! Plug someone right ABOUT now... As Usual, The sound is nice, every Saturday at 9am.. Tshirt plug : https://www.instagram.com/venantsgear/ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/oK-LWEqOzew/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/oK-LWEqOzew/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/oK-LWEqOzew/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-07-10T06:00:13Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "wQKI_sf7Zt-fj0ac4d6vyYuddnY",
    id: {
      kind: "youtube#video",
      videoId: "lTGWv2zk4-U",
    },
    snippet: {
      publishedAt: "2021-07-09T19:00:12Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "Lockdown Sessions Ft Ally Fresh",
      description:
        "Share the link!! to just one more person. In these Curfew and Lockdown times, we can still manage fun times.. Be part of Premiere Gang and get to enjoy what ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/lTGWv2zk4-U/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/lTGWv2zk4-U/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/lTGWv2zk4-U/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-07-09T19:00:12Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "mZiJEN81xDxxtOo3dxMvmgpC2-I",
    id: {
      kind: "youtube#video",
      videoId: "pmRdML9vDSE",
    },
    snippet: {
      publishedAt: "2021-07-09T07:00:10Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Mics Are Open #115 - You Bathe Twice A Week!!",
      description:
        "Its freezing in Nairobi and apparently Men are not bathing, they are moaning by the dressing table... You gotta listen to understand. Big C's shares his daughter's ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/pmRdML9vDSE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/pmRdML9vDSE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/pmRdML9vDSE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-07-09T07:00:10Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "VfuFjWoNB7FkQvVnOqYs10Id_Rg",
    id: {
      kind: "youtube#video",
      videoId: "UWmRfocZJQE",
    },
    snippet: {
      publishedAt: "2021-07-03T06:00:11Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Wake Up Call with Grauchi #29 Fuego",
      description:
        "Share di Ting!!! Plug someone right ABOUT now... As Usual, The sound is nice, every Saturday at 9am.. Tshirt plug : https://www.instagram.com/venantsgear/ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/UWmRfocZJQE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/UWmRfocZJQE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/UWmRfocZJQE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-07-03T06:00:11Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "rO9gXpvVnOVVdLxSdLg4k49JXek",
    id: {
      kind: "youtube#video",
      videoId: "h-cKAhCINVI",
    },
    snippet: {
      publishedAt: "2021-07-02T19:00:35Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "Lockdown Sessions Ft Gibbz ThaDaqchild",
      description:
        "Share the link!! to just one more person. In these Curfew and Lockdown times, we can still manage fun times.. Be part of Premiere Gang and get to enjoy what ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/h-cKAhCINVI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/h-cKAhCINVI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/h-cKAhCINVI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-07-02T19:00:35Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "OAf21P3eb1ACZ9f4HuvW_XdMjk0",
    id: {
      kind: "youtube#video",
      videoId: "pcF7VP8wiDE",
    },
    snippet: {
      publishedAt: "2021-07-02T07:00:12Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Mics Are Open #114 - This Is For Omosh",
      description:
        "Calvin, Neville and Andy chop it up on the pod today. #TheMicsAreOpen #AfricanPodcast #KenyanPodcast.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/pcF7VP8wiDE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/pcF7VP8wiDE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/pcF7VP8wiDE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-07-02T07:00:12Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "-Nh3cf8xiKEjNnXwKS4bmpIsE6Q",
    id: {
      kind: "youtube#video",
      videoId: "VjVuk2ARroY",
    },
    snippet: {
      publishedAt: "2021-06-30T13:00:10Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Smarts! feat Ashley and Quellie",
      description:
        "Women are smarter than Men right? Well what happens when two smart women go head to head? Premium laughs.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/VjVuk2ARroY/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/VjVuk2ARroY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/VjVuk2ARroY/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-06-30T13:00:10Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "i5fZ8BJSURGBklQVg2FpqFSTifc",
    id: {
      kind: "youtube#video",
      videoId: "fQGfIV6GeiI",
    },
    snippet: {
      publishedAt: "2021-06-26T09:00:13Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Wake Up Call with Grauchi #28 Streets",
      description:
        "Share di Ting!!! Plug someone right ABOUT now... As Usual, The sound is nice, every Saturday at 9am.. Tshirt plug : https://www.instagram.com/venantsgear/ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/fQGfIV6GeiI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/fQGfIV6GeiI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/fQGfIV6GeiI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-06-26T09:00:13Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "W2zcN-PAAfw3akgCbhwWKpX5L-g",
    id: {
      kind: "youtube#video",
      videoId: "MKxvW1kciHE",
    },
    snippet: {
      publishedAt: "2021-06-25T19:00:17Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "Lockdown Sessions #10 - The G&#39;s",
      description:
        "Share the link!! to just one more person. In these Curfew and Lockdown times, we can still manage fun times.. Be part of Premiere Gang and get to enjoy what ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/MKxvW1kciHE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/MKxvW1kciHE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/MKxvW1kciHE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-06-25T19:00:17Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "FLFmlsy1GTgSZK7tk3Mqvr_hmdQ",
    id: {
      kind: "youtube#video",
      videoId: "UcL7GHnk8g8",
    },
    snippet: {
      publishedAt: "2021-06-25T07:00:11Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Mics Are Open #113 - I Declare War",
      description:
        "This is one for the books, the lads are in fine form and declare war on numerous things, things were going well until, well, just listen and enjoy!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/UcL7GHnk8g8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/UcL7GHnk8g8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/UcL7GHnk8g8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-06-25T07:00:11Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "a5KN1B3DKAfRv4SivWYO7Z7iCAI",
    id: {
      kind: "youtube#video",
      videoId: "LWdzL31TUzE",
    },
    snippet: {
      publishedAt: "2021-06-20T12:00:25Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "Keep Walking: A Conversation With DADs",
      description:
        "Being a DAD is one of life's greatest honours, but it doesn't come with a manual, and our contexts are all unique. Many young DADs find themselves at a loss as ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/LWdzL31TUzE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/LWdzL31TUzE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/LWdzL31TUzE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-06-20T12:00:25Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "U_Wli2FHFm0vLMEU9sfqyWfmMnA",
    id: {
      kind: "youtube#video",
      videoId: "tfe9p-_Z9Ms",
    },
    snippet: {
      publishedAt: "2021-06-20T09:00:12Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "What Men Want #2 G Money",
      description:
        "G Money in conjunction with The Junction Mall have The Perfect Gift guide for father's day!! Let's help you celebrate this special man in your life. #AllAboutYou ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/tfe9p-_Z9Ms/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/tfe9p-_Z9Ms/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/tfe9p-_Z9Ms/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-06-20T09:00:12Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "aScz_fNX3yBlkcNBqTXtuZCZGJM",
    id: {
      kind: "youtube#video",
      videoId: "Yk_Nam5tEJc",
    },
    snippet: {
      publishedAt: "2021-06-19T06:00:58Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title:
        "The Wake Up Call with Grauchi #27 Kikambala - (Live From The New Good Company HQ)",
      description:
        "Share di Ting!!! Plug someone right ABOUT now... The Good Co have a brand new HQ with room for EVERYONE! :-) As Usual, The sound is nice, every ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Yk_Nam5tEJc/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Yk_Nam5tEJc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Yk_Nam5tEJc/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-06-19T06:00:58Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "WuFHI6NF8n_5JQLwK_5FRlnSZpE",
    id: {
      kind: "youtube#video",
      videoId: "UZcSLn0nTBM",
    },
    snippet: {
      publishedAt: "2021-06-18T19:00:29Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "Lockdown Sessions ft G Money",
      description:
        "Share the link!! to just one more person. In these Curfew and Lockdown times, we can still manage fun times.. Be part of Premiere Gang and get to enjoy what ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/UZcSLn0nTBM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/UZcSLn0nTBM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/UZcSLn0nTBM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-06-18T19:00:29Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "TWftdiJGF4RQ-j7Xxt6A6UNCO34",
    id: {
      kind: "youtube#video",
      videoId: "rG_9mQkXAqk",
    },
    snippet: {
      publishedAt: "2021-06-18T07:00:12Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "The Mics Are Open #112 - Your Dad Is Dead, Not Deadbeat!",
      description:
        "With Father's Day approaching it's only right that the lads dissect the issues concerning fatherhood, are kids really affected by absentee fathers? Or is it all crap, ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/rG_9mQkXAqk/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/rG_9mQkXAqk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/rG_9mQkXAqk/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-06-18T07:00:12Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "V2BegCWfQTy_hj7plXPj0PzXW6I",
    id: {
      kind: "youtube#video",
      videoId: "n6-snS9Gj2U",
    },
    snippet: {
      publishedAt: "2021-06-15T17:00:11Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title:
        "Guess The Drink Challenge #1 featuring VicMax, Sami, Bai and Kwami!",
      description:
        "The GANG - Vicmax, Kwami, Sami and Bai.Brizzy are always up for a challenge and on this one the lads get to guess different drinks! That's really simple right?",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/n6-snS9Gj2U/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/n6-snS9Gj2U/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/n6-snS9Gj2U/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-06-15T17:00:11Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "2-YvSY8OMro12mbBmE_egdFF5J4",
    id: {
      kind: "youtube#video",
      videoId: "yUPjSnk8BcE",
    },
    snippet: {
      publishedAt: "2021-06-13T12:00:11Z",
      channelId: "UC7h4tUtdH0L06sDZVmBMc4Q",
      title: "What Men Want with G Money",
      description:
        "G Money in conjunction with The Junction Mall have The Perfect Gift guide for father's day!! Let's help you celebrate this special man in your life. #AllAboutYou ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/yUPjSnk8BcE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/yUPjSnk8BcE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/yUPjSnk8BcE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Good Company KE",
      liveBroadcastContent: "none",
      publishTime: "2021-06-13T12:00:11Z",
    },
  },
];

export const team = [
  {
    userid: 1,
    username: "G Money",
    fullName: "Anthony Gray",
    title: "Chief Executive Officer",
    bio: "Bringing more than 25 years of international experience to the Good Company is something Anthony Gray aka G Money does with aplomb! Having been an integral part of the radio and music industry in the UK, his decade of working in Kenya has given him a unique perspective into what works for the local market. As a media brand himself, he has worked with major local and international brands from Safaricom to Ciroc he has brought his know how to the fore in all his endeavors. As the Head of Presenters of 103.5 Homeboyz Radio, he has used his knowledge to help shape the sound of Nairobi. Whether it’s dropping jams in the hottest clubs or training the next generation of presenters, G Money has always had his finger on the pulse of the next trend. G Money has also had a hand in some of the biggest events in Kenya, whether it’s concert management or club events, his knowledge of event management is highly sought after and he recently works on the hugely successful Chronixx event and most recently Jameson Live. The only question left for us to ask him is “when do you sleep”?",
    image: GMoney,
    social: [],
  },
  {
    userid: 2,
    username: "Mike",
    fullName: "Michael Atema",
    title: "Chief Operating Officer",
    bio: "Michael carries a degree in Music Business from The International College of Music. He has worked as a content curator for the past 8 years with Callback Dreams Studios in South Africa. In his time there, he handled the licensing of content for award-winning shows such as; The Hustle, Stripped Down & Creative Union that aired on the following Multichoice channels; M-Net, Vuzu & Mzansi Magic respectively. Michael also handled the Samsung “Kleek” project under Universal music group from 2015 – 2016. Channel O acquired his services as the artist liaison for the Channel O Music Awards in 2013 and 2014 and currently produces his own show on Channel O titled “The Mix Up”. Michael lives and breathes content and is extremely passionate about the industry.",
    image: Michael,
    social: [],
  },
  {
    userid: 3,
    username: "KO",
    fullName: "Kevin Okeyo",
    title: "Chief Technology Officer",
    bio: "Kevin is a BSc. in Information Technology graduate from the Jomo Kenyatta University of Agriculture and Technology. He worked at AMREF, which is a health- based INGO based in Nairobi before getting into entrepreneurship to co-found an up an coming digital marketing agency that also provided I.T based solutions for their clients. Kevin has also worked with various wildlife conservation organizations as a private consultant on ways of using emerging technologies and their digital assets to complement their efforts in wildlife conservation. Outside of technology, Kevin is also passionate about rugby and plays for a local rugby club, Impala Saracens.",
    image: Kevin,
    social: [],
  },
  {
    userid: 4,
    username: "Ramadahani",
    fullName: "Ramadahani Abubakar",
    title: "Legal Affairs",
    bio: "Ramadhani holds a Bachelor of Laws Degree LLB (Hons) from the Catholic University of Eastern Africa, Kenya, and also holds a Post Graduate Diploma in Law from the Kenya School of Law.He is a Commissioner for Oaths.",
    image: Ramadhani,
    social: [],
  },
  {
    userid: 5,
    username: "Dj Grauchi",
    fullName: "Grauchi",
    title: "Lockdown Session's Captain",
    bio: "",
    image: Grauchi,
    social: [],
  },
  {
    userid: 6,
    username: "Big C",
    fullName: "Calvin",
    title: "The Mics Are Open Cast",
    bio: "",
    image: Calvin,
    social: "",
  },
  {
    userid: 7,
    username: "Andy Young",
    fullName: "Andy Young",
    title: "The Mics Are Open Cast",
    bio: "",
    image: Andy,
    social: [],
  },
  {
    userid: 8,
    username: "Neville",
    fullName: "Neville",
    title: "The Mics Are Open Cast",
    bio: "",
    image: Neville,
    social: [],
  },
  {
    userid: 9,
    username: "ashley",
    fullName: "Ashley",
    title: "Queshley Cast",
    bio: "",
    image: Ashley,
    social: [],
  },
  {
    userid: 10,
    username: "Quellie",
    fullName: "Quellie",
    title: "Queshley Cast",
    bio: "",
    image: Quellie,
    social: [],
  },
];

export const services = [
  {
    title: "Brand Equity Development",
    content:
      "Your brand isn’t static, or at least it shouldn’t be. Without continual analysis and strategy, your brand can easily lose its shine and that means reduced profits. At the core of what we do is an open and honest brand analysis complete with best practice brand strategy. A brand is not a product or a promise or a feeling. It’s the sum of all the experiences you have with a company. We act before you need to.",
  },
  {
    title: "Marketing",
    content:
      "The consumer is ever changing, every day there is a new challenge and a new way of communicating with your customers and potential customers. At the Good Company, we believe that marketing never stops even when the campaign is over. We provide joined-up marketing concepts and solutions and analysis. In this digital age, you are the company you keep.",
  },
  {
    title: "Talent Management",
    content:
      "Hard work beats talent, especially when talent doesn’t work hard. At the Good Company, we want our talent to hone their “talent” while we manage. With some of Kenya’s top sports and media personalities on our book, we offer career development assistance and financial management advice, to make sure that your finances last longer than your career (Roster available on request)",
  },
  {
    title: "Event Planning and Execution",
    content:
      "A successful event doesn’t happen by accident but is the result of meticulous planning. At the Good Company we have over 20 years of event management experience. From concept to delivery, we have got you covered.",
  },
  {
    title: "Web Development",
    content:
      "One of the reasons we created the Good Company was because we had such negative experience with developers that when we found some great ones, we gave them jobs and put them on the board. We offer timely web solutions that work, after all that’s all you really need.",
  },
  {
    title: "App Development",
    content:
      "Does you business need an app? Do you need an app. This is a question we can help you answer. Apps aren’t for everyone, but if you need one , then talk to us.",
  },
  {
    title: "Radio Production",
    content:
      "With radio production experience spanning more than 20 years, the Good Company is in a unique position to provide broadcast strategy, analysis and execution in this digital era. Media is ever changing and the good company has been at the forefront go the changes in broadcasting both locally and internationally. Whether you need data driven output analysis, newsroom training, feature development or day part segmentation ideas, the Good company is your one stop shop for all things radio related.",
  },
];

export const products = [
  {
    id: 1,
    name: "Coffee Mug - Black Inside",
    img: coffeeMug,
    price: 750,
    details: "The Mics Are Open Coffee Mug - Black Inside",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 0,
  },
  {
    id: 2,
    name: "Coffee Mug - White Inside",
    img: coffeeMugWhite,
    price: 700,
    details: "The Mics Are Open Coffee Mug - White Inside",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 15,
  },
  {
    id: 4,
    name: "Coffee Mug - Black",
    img: coffeeMugBlack,
    price: 700,
    details: "The Mics Are Open Coffee Mug - Black",
    by: "The Mics Are Open",
    new: true,
    soldOut: false,
    discount: 0,
  },
  {
    id: 5,
    name: "Mics Are Open Tee - Black",
    img: maoBlack,
    price: 1200,
    details: "The Mics Are Open T/Shirt",
    by: "The Mics Are Open",
    new: false,
    soldOut: true,
  },
  {
    id: 6,
    name: "Mics Are Open Tee - White",
    img: maoWhite,
    price: 1100,
    details: "The Mics Are Open T/Shirt",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 0,
  },
  {
    id: 7,
    name: "Water Bottle - Black",
    img: bottleNewBlack,
    price: 1000,
    details: "The Mics Are Open Water Bottle - Black",
    by: "The Mics Are Open",
    new: true,
    soldOut: false,
    discount: 0,
  },
  {
    id: 8,
    name: "Water Bottle - Blue",
    img: bottleNewBlue,
    price: 1000,
    details: "The Mics Are Open Water Bottle - Blue",
    by: "The Mics Are Open",
    new: true,
    soldOut: false,
  },
  {
    id: 9,
    name: "Water Bottle - Charcoal",
    img: bottleCharcoal,
    price: 1000,
    details: "The Mics Are Open Water Bottle - Charcoal",
    by: "The Mics Are Open",
    new: false,
    soldOut: true,
    discount: 0,
  },
  {
    id: 10,
    name: "Water Bottle - Blue",
    img: bottleBlue,
    price: 950,
    details: "The Mics Are Open Water Bottle - Blue",
    by: "The Mics Are Open",
    new: false,
    soldOut: true,
    discount: 0,
  },

  {
    id: 11,
    name: "Water Bottle - Lime",
    img: bottleLime,
    price: 950,
    details: "The Mics Are Open Water Bottle - Lime",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 0,
  },
  {
    id: 12,
    name: "Water Bottle - Red",
    img: bottleRed,
    price: 950,
    details: "The Mics Are Open Water Bottle - Red",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 0,
  },
  {
    id: 13,
    name: "Water Bottle - White",
    img: bottleWhite,
    price: 950,
    details: "The Mics Are Open Water Bottle - White",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 0,
  },
  {
    id: 14,
    name: "Coaster - Round",
    img: coasters,
    price: 1000,
    details: "The Mics Are Open Caster - Round",
    new: false,
    soldOut: false,
    discount: 10,
  },
  {
    id: 15,
    name: "Coaster - Rounded Edges",
    img: coastersRound,
    price: 1100,
    details: "The Mics Are Open Caster - Rounded Edges",
    by: "The Mics Are Open",
    new: true,
    soldOut: false,
    discount: 0,
  },
];
