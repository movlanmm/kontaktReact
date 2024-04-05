import products from "../../data/products";
import VideoCard from "../VideoCard";


export default function Videos() {
  return (
    <section className="video-section">
    <div className="video-head">
      <span>Kontakt TV</span>
      <a href="#">Youtube kanalina keçid</a>
    </div>
    <div className="video-container" id="video-container">
      {products[3].video.map((video,index)=>{
        return <VideoCard key ={index} video ={video} />
      })}
    </div>
  </section>
  )
}
