import people from "./images/people.jpg";
import micsAreOpen from "./images/mics-thumbnail.jpg";
import micsAreOpenSquad from "./images/mics-squad.jpg";
import queShley from "./images/queshley.jpg";
import daDing from "./images/dading-different.jpg";
import lockdownSession from "./images/lockdown-session.jpg";
import wakeUpCall from "./images/wake-up-call.jpg";
import nairobi from "./images/Nairobi.jpg";
import skyline from "./images/Nairobi-Night-Skyline.jpg";
import silverArrow from "./images/silver-arrow.jpg";
import laptop from "./images/laptop.jpg";
import party from "./images/party.jpg";
import GMoney from './images/GMoney.jpg'
import Andy from './images/Andy.jpg'
import Kevin from './images/Kevin.jpg'
import Michael from './images/Michael.png'
import Ramadhani from './images/Ramadhani.png'
import Calvin from './images/Calvin.jpg'
import Neville from './images/Neville.jpg'
import Grauchi from './images/Grauchi.jpg'

export const landingTemplates = [
  {
    index: 1,
    image: nairobi,
    title: "WE ARE THE GOOD COMPANY",
    text: "a creative agency located in Nairobi, Kenya.",
    button: "About Us",
    startAnimation: true,
    url: "#about",
  },
  {
    index: 2,
    image: silverArrow,
    title: "WE BUILD BRANDS",
    text: "We specialize in enhancing and building brand equity through tailored strategies & campaigns",
    button: "Learn More",
    startAnimation: "",
    url: "#quote",
  },
  {
    index: 3,
    image: party,
    title: "WE CREATE EXPERIENCES",
    text: "We have over 20 years of event management experience. From concept to delivery, we have got you covered.",
    button: "Learn More",
    startAnimation: "",
    url: "podcast",
  },
  {
    index: 4,
    image: laptop,
    title: "WE CREATE FOR THE WEB",
    text: "We design and develop websites and mobile apps to achieve the specific declared goals set by our clients.",
    button: "Learn More",
    startAnimation: "",
    url: "#services",
  },
  {
    index: 5,
    image: people,
    title: "WE ARE GOOD COMPANY",
    text: "After all you are the company you keep",
    button: "About Us",
    startAnimation: "",
    url: "team",
  },
  {
    index: 6,
    image: skyline,
    title: "WE ARE THE GOOD COMPANY",
    text: "a creative agency located in Nairobi, Kenya.",
    button: "About Us",
    startAnimation: "",
    url: "#about",
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
    title: "QueShley",
    host: ["Ashley", "Quellie"],
    date: "Monday @ 10am",
    cover: queShley,
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
    etag: "forCjwCvA4OMoxwZ8-uwjUTiGPs",
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
    username: "KO",
    fullName: "Kevin Okeyo",
    title: "Chief Technology Officer",
    bio: "Kevin is a BSc. in Information Technology graduate from the Jomo Kenyatta University of Agriculture and Technology. He worked at AMREF, which is a health- based INGO based in Nairobi before getting into entrepreneurship to co-found an up an coming digital marketing agency that also provided I.T based solutions for their clients. Kevin has also worked with various wildlife conservation organizations as a private consultant on ways of using emerging technologies and their digital assets to complement their efforts in wildlife conservation. Outside of technology, Kevin is also passionate about rugby and plays for a local rugby club, Impala Saracens.",
    image: Kevin,
    social: [],
  },
  {
    userid: 3,
    username: "Ramadahani",
    fullName: "Ramadahani Abubakar",
    title: "Legal Affairs",
    bio: "Ramadhani holds a Bachelor of Laws Degree LLB (Hons) from the Catholic University of Eastern Africa, Kenya, and also holds a Post Graduate Diploma in Law from the Kenya School of Law.He is a Commissioner for Oaths.",
    image: Ramadhani,
    social: [],
  },
  {
    userid: 4,
    username: "Mike",
    fullName: "Michael Atema",
    title: "Chief Operating Officer",
    bio: "Michael carries a degree in Music Business from The International College of Music. He has worked as a content curator for the past 8 years with Callback Dreams Studios in South Africa. In his time there, he handled the licensing of content for award-winning shows such as; The Hustle, Stripped Down & Creative Union that aired on the following Multichoice channels; M-Net, Vuzu & Mzansi Magic respectively. Michael also handled the Samsung “Kleek” project under Universal music group from 2015 – 2016. Channel O acquired his services as the artist liaison for the Channel O Music Awards in 2013 and 2014 and currently produces his own show on Channel O titled “The Mix Up”. Michael lives and breathes content and is extremely passionate about the industry.",
    image: Michael,
    social: [],
  },
  {
    userid: 5,
    username: "Dj Grauchi",
    fullName: "Grauchi",
    title: "",
    bio: "",
    image: Grauchi,
    social: [],
  },
  {
    userid: 6,
    username: "Big C",
    fullName: "Calvin",
    title: "Mics Are Open Cast",
    bio: "",
    image: Calvin,
    social: "",
  },
  {
    userid: 7,
    username: "Andy Young",
    fullName: "Andy Young",
    title: "Mics Are Open Cast",
    bio: "",
    image: Andy,
    social: [],
  },
  {
    userid: 8,
    username: "Neville",
    fullName: "Neville",
    title: "Mics Are Open Cast",
    bio: "",
    image: Neville,
    social: [],
  },
];
