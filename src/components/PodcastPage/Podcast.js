// import Loader from "../Loader";
import { shows, episodes } from "./database";
import "./Podcast.css";
import RecentVideo from "./RecentVideo";
import ChannelContainer from "./ChannelContainer";

function Podcast() {
  return (
    <main id="#">
      <ChannelContainer shows={shows} />
      <RecentVideo episodes={episodes} />
      <TopButton />
    </main>
  );
}


// Navigate to top button
function TopButton() {
  return (
    <a href="/podcast/#top" className="btn-top">
      back to top
    </a>
  );
}

export default Podcast;
