/* eslint-disable */
import Rocket from "../../assets/rocket2.jpg";
import { useNavigate } from "react-router-dom";
import "./index.scss";
const MasterClass = () => {
  const navigate = useNavigate();

  const Redirect = (heading, price) => {
    navigate("/apply", { state: { heading, price } });
  };
  return (
    <div className="masterclass">
      <div>
        <img src={Rocket} alt="rocket" />
      </div>
      <div className="masterclass-content">
        <h1>Master Class on Propulsion system</h1>
        <p>
          Master Class on Propulsion system This masterclass on Propulsion
          System (Basic Level) is your gateway to the fascinating world of
          propulsion systems the very engines that drive our vehicles, vessels,
          and spacecraft. Join us on a journey of discovery as we delve into the
          science, engineering, and applications of these marvels of innovation.
        </p>
        <button
          onClick={() => {
            Redirect("Master Class on Propulsion system", "2000");
          }}
        >
          Register
        </button>
      </div>
      <div className="masterclass-info">
        <h1>Perks & Value</h1>
        <div className="masterclass-info-flex">
          <div className="masterclass-column">
            <h4>Fundamentals</h4>
            <p>
              Uncover the core principles that govern how propulsion systems
              generate thrust and propel objects forward (or upward!). We'll
              explore concepts like Newtons Third Law of Motion, energy
              conversion, and specific impulse.
            </p>
          </div>
          <div className="masterclass-column">
            <h4>Who should Attend?</h4>
            <p>
              This masterclass is perfect for anyone curious about how things
              move!.It's ideal for students with an interest in science,
              engineering, physics, or technology.Anyone passionate about ,
              Rocket science airplanes, space exploration,
            </p>
          </div>
          <div className="masterclass-column">
            <h4>Interactive Learning</h4>
            <p>
              Engage with our expert instructors through live Q&A sessions,
              discussions, and interactive exercises. Ask your burning questions
              and gain a deeper understanding of these incredible technologies.
            </p>
          </div>
          <div className="masterclass-column">
            <h4>Advanced Propulsion</h4>
            <p>
              Get a glimpse into the exciting advancements shaping the future of
              transportation. We'll discuss electric vehicles, hybrid engines,
              and cutting-edge space propulsion systems that are revolutionizing
              how we move.
            </p>
          </div>
        </div>
      </div>
      <div className="session">
        <h1>Session Timings</h1>
        <div className="session-grid">
          <div className="session-column1">
            <p>5 DAYS</p>
            <br />
            <p>Duration : 15th April - 19th April, 2024</p>
            <br />
            <p>Timings : 6.30pm - 8.00pm</p>
            <br />

            <button
              onClick={() => {
                Redirect("Master Class on Propulsion system", "2000");
              }}
            >
              Register
            </button>
          </div>
          <div className="session-colum2">
            <li>Day 1 : April 15, 2024 - Introduction</li>
            <li>
              Day 2 : April 16, 2024 - Space Propulsion Systems classifications
            </li>
            <li>
              Day 3 : April 17, 2024 - Nuclear and Alternative Propulsion
              Systems
            </li>
            <li>
              Day 4 : April 18, 2024 - Advanced Airbreathing Propulsion Systems
            </li>
            <li>Day 5 : April 19, 2024 - The Future of Propulsion Systems</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterClass;
