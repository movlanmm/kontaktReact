import { FaPlayCircle } from "react-icons/fa";

export default function VideoCard({ video }) {
  return (
    <div className="video-view">
      <div className="video">
        <img src={video.videoImage} alt="" />
        <button className="play-button">
          <FaPlayCircle style={{ fontSize: 25 }} />
        </button>
      </div>
      <p>{video.videoTitle}</p>
    </div>
  );
}
