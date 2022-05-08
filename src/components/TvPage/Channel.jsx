import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { shows } from "../database";
import useYoutube from "../hooks/useYoutube";
import About from "./About";
import ChannelHome from "./ChannelHome";
import Episodes from "./Episodes";
import MoreChannels from "./MoreChannels";
import Footer from "../Footer/Footer";

import "./tv.scss";

const Channel = () => {
  const { channelId, videoId } = useParams();
  const [displayVideos, setDisplayVideos] = useState([]);
  const [activeTab, setActiveTab] = useState("Home");
  const [activeVideo, setActiveVideo] = useState({});
  const channel = shows.filter((show) => show.id === channelId)[0];
  const channelName = channel.title;
  const [channelVideos] = useYoutube(channelName);
  const navigate = useNavigate();

  const tabs = ["Home", "Episodes", "About"];

  const data = useCallback(() => {
    setDisplayVideos(channelVideos);
  }, [channelVideos]);

  useEffect(() => {
    data();
    if (videoId) {
      setActiveVideo({ ...activeVideo, id: { videoId } });
    }
  }, [activeVideo, data, videoId]);

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
        <MoreChannels shows={shows} channelId={channelId} />
      </section>
      <Footer />
    </>
  );
};

export default Channel;
