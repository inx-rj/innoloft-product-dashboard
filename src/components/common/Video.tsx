interface VideoPropsType {
  videoUrl: string;
}
const Video = ({ videoUrl }: VideoPropsType) => {
  return (
    <video controls width="100%">
      <source src={videoUrl} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};

export default Video;
