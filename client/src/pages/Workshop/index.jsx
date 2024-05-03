import "./index.scss";
import Cube from "../../assets/cube1.jpg";
import data from "../../assets/dev-data/WorkshopData";
import { useNavigate } from "react-router-dom";
const Workshop = () => {
  const navigate = useNavigate();
  const Redirect = (heading, price) => {
    navigate("/apply", { state: { heading, price } });
  };
  return (
    <>
      <div className="workshop">
        <div>
          <img src={Cube} alt="rocket" />
        </div>
        <div className="workshop-content">
          <h1>One Day Hands on Workshop on Cubesat</h1>
          <p>One Day Hands on Workshop on Cubesat</p>
          <p>Date : 28 April, 2024, Sunday</p>
          <p>
            Timing : 9.30am - 1pm (Theoretical & Practical session - Build,
            analyse & Testing)
          </p>
          <p>Venue : Aeroin SpaceTech, Pallikaranai , Chennai</p>
          <button
            onClick={() => {
              Redirect("One Day Hands on Workshop on Cubesat", 2000);
            }}
          >
            Register
          </button>
        </div>
      </div>
      <div className="workshop-grid-div">
        <h1>{data.heading}</h1>
        <p>{data.description}</p>
        <div className="workshop-grid">
          {data.blocks?.map((blocks, i) => (
            <div key={i} className="column">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Workshop;
