import EpisodeCard from "./EpisodeCard";

const Episodes = ({ tab, episodes, handleVideoChange }) => {
  return (
    <div
      style={{ display: tab === "Episodes" ? "flex" : "none" }}
      className="episodes-wrapper"
    >
      {episodes?.map((episode, index) => {
        return (
          <EpisodeCard
            episode={episode}
            key={tab + index}
            handleVideoChange={handleVideoChange}
          />
        );
      })}
    </div>
  );
};

export default Episodes;
