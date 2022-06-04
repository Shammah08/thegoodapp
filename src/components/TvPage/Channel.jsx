import {
  useEffect,
  useState,
  useCallback,
  useLayoutEffect,
  useContext,
} from "react";
import { useNavigate, useParams } from "react-router-dom";

import { shows } from "../database";
import useYoutube from "../hooks/useYoutube";
import About from "./About";
import ChannelHome from "./ChannelHome";
import Episodes from "./Episodes";
import MoreChannels from "./MoreChannels";
import Footer from "../Footer/Footer";

import "./tv.scss";
import { youtubeContext } from "../../contexts/YoutubeState";


const Channel = () => {
  const { channelId } = useParams();
  const { activeVideo,setActiveVideo } = useContext(youtubeContext);
  const [displayVideos, setDisplayVideos] = useState([]);
  const [activeTab, setActiveTab] = useState("Home");

  const channel = shows.filter((show) => show.id === channelId)[0];
  const channelName = channel.title;
  const [channelVideos] = useYoutube(channelName);
  const navigate = useNavigate();

  const tabs = ["Home", "Episodes", "About"];

  const data = useCallback(() => {
    setDisplayVideos(channelVideos);
  }, [channelVideos]);

  useLayoutEffect(() => {
    if ( !activeVideo) {
      setActiveTab("Episodes");
    }
  }, [activeVideo, ])
  useEffect(() => {
    data();
    // if (videoId) {
    //   setActiveVideo({ ...activeVideo, id: { videoId } });
    // }
    window.scrollTo(0, 0);
  }, [activeVideo, data, displayVideos, setActiveVideo]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handleVideoChange = (video) => {
    setActiveTab("Home");
    setActiveVideo(video);
    navigate(`/tv/channel/${channel.id}`);
  };

  return (
    <>
      <section className="channel-container">
        <div className="channel-main">
          <h3>{channelName}</h3>
          <ul className="channel-nav">
            {tabs.map((tab) => (
              <li
                onClick={() => handleTabChange(tab)}
                style={{ color: tab === activeTab ? "lightblue" : "" }}
                key={activeTab + Math.random() * 100}
              >
                {tab}
              </li>
            ))}
          </ul>
          <div className="channel-tabs">
            <ChannelHome
              tab={activeTab}
              video={activeVideo}
              episodes={displayVideos}
              handleVideoChange={handleVideoChange}
            />
            <Episodes
              tab={activeTab}
              episodes={displayVideos}
              video={activeVideo}
              handleVideoChange={handleVideoChange}
            />
            <About tab={activeTab} channel={channel} video={activeVideo} />
          </div>
        </div>
        <MoreChannels
          shows={shows}
          channelId={channelId}
          setActiveTab={setActiveTab}
        />
      </section>
      <Footer />
    </>
  );
};

export default Channel;
