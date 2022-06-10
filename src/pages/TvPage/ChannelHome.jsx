
import { useContext, Fragment } from "react";
import { youtubeContext } from "../../contexts/YoutubeState";
import Player from "./Player";

const ChannelHome = ({ tab,  episodes, handleVideoChange }) => {
  const { activeVideo } = useContext(youtubeContext)

  return (
      <div
          className="channel-home"
          style={{
              display: tab === 'Home' ? 'flex' : 'none',
          }}
      >
          <Player video={activeVideo} />

          <div className="now-playing-container">
              {activeVideo.snippet && (
                  <div className="now-playing">
                      <h2>Now Playing</h2>
                      <img
                          src={activeVideo?.snippet?.thumbnails?.high?.url}
                          alt=""
                      />
                      <div className="now-playing-text">
                          <h4>{activeVideo?.snippet?.title}</h4>
                          <i>
                              {new Date(activeVideo?.snippet?.publishTime)
                                  .toUTCString()
                                  .slice(0, 16)}
                          </i>
                      </div>
                  </div>
              )}

              <div className="coming-up">
                  <h2>Suggested Videos</h2>
                  {episodes
                      .filter((episode) => episode.id !== activeVideo.id)
                      .map((episode, index) => {
                          if (index < (activeVideo.id ? 2 : 4)) {
                              return (
                                  <div
                                      className="channel-tag"
                                      onClick={() => handleVideoChange(episode)}
                                      key={episode + Math.random() * 1000}
                                  >
                                      <img
                                          src={
                                              episode.snippet.thumbnails.high
                                                  .url
                                          }
                                          alt="Channel Badge"
                                      />

                                      <h4>{episode.snippet.title}</h4>
                                  </div>
                              )
                          }
                          return <Fragment key={Math.random() * 1000}></Fragment>
                      })}
              </div>
          </div>
      </div>
  )
};

export default ChannelHome;
