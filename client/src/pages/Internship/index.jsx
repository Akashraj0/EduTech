/* eslint-disable */
import "./index.scss";
import File from "../../assets/file.mp4";

import Data from "../../assets/dev-data/InternshipData";
import InternComponent from "../../components/InternComponent";

const Intership = () => {
  return (
    <div>
      <InternComponent />
      <div className="intership--video--background">
        <video autoPlay muted loop className="intership--video">
          <source src={File} type="video/mp4" />
        </video>
        <div className="intership--video--content">
          <h1>Build your dreams into reality!</h1>
          <p>
            If you have a passion for Space Exploration, Aviation, Rocket
            science, or cosmology. Want to learn more about it?
          </p>
          <button>Start Now</button>
        </div>
      </div>
      <div className="internship--info">
        <h1>{Data.heading}</h1>
        <p className="internship--info--paragraph">{Data.description}</p>
        <div className="internship--info--grid">
          {Data.blocks?.map((blocks) => (
            <div className="column">
              <h2>{blocks.heading}</h2>
              <div className="column--list">
                {blocks.para ? (
                  <p>{blocks.subject}</p>
                ) : (
                  <li>{blocks.subject1}</li>
                )}
                {blocks.subject2 ? <li>{blocks.subject2}</li> : null}
                {blocks.subject3 ? <li>{blocks.subject3}</li> : null}
                {blocks.subject4 ? <li>{blocks.subject4}</li> : null}
                {blocks.subject5 ? <li>{blocks.subject5}</li> : null}
                {blocks.subject6 ? <li>{blocks.subject6}</li> : null}
                {blocks.subject7 ? <li>{blocks.subject6}</li> : null}
                {blocks.subject8 ? <li>{blocks.subject8}</li> : null}
                {blocks.subject9 ? <li>{blocks.subject9}</li> : null}
                {blocks.subject10 ? <li>{blocks.subject2}</li> : null}
              </div>
            </div>
          ))}
          <div className="internship--fee">
            <p>{Data.location}</p>
            <p>{Data.fee}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intership;
