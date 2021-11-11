import Container from "./Container";

const Youtube = ({ videos }) => {
  return (
    <>
      {videos.map((episode) => {
        return <Container episode={episode} key={episode.id.videoId} />;
      })}
    </>
  );
};

export default Youtube;
