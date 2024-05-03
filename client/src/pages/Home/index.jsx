import HomeFile from "../../assets/HomeFile.mp4";
import { Link } from "react-router-dom";
import "./index.scss";
import InternComponent from "../../components/InternComponent";
import Mapbox from "../../components/Mapbox";
const Home = () => {
  return (
    <>
      <div className="home--video--background">
        <video autoPlay muted loop className="video">
          <source src={HomeFile} type="video/mp4" />
        </video>
        <div className="home--video-content">
          <h1>Aeroin EduTech</h1>
          <p>Learn Aerospace With Aeroin!</p>
          {/* <button>Enroll Now</button> */}
        </div>
      </div>
      <div>
        <InternComponent />
        <div className="internship--link">
          <Link className="link" to="internship">
            Learn more
          </Link>
        </div>
      </div>
      <div>
        <Mapbox />
      </div>
    </>
  );
};

export default Home;
