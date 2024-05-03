import data from "../../assets/dev-data/InternshipCard";
import { useNavigate } from "react-router-dom";
import "./index.scss";
const InternComponent = () => {
  const navigate = useNavigate();

  const Redirect = (heading, price) => {
    navigate("/apply", { state: { heading, price } });
  };
  return (
    <>
      <div className="internship">
        <h1>Internship</h1>
        <div className="internship--flex">
          {data.card?.map((item, i) => (
            <div key={i} className="column">
              <h2>{item.heading}</h2>
              <p>{item.description}</p>
              {item.duration ? <p>{item.duration}</p> : null}
              {item.timing ? <p>{item.timing}</p> : null}
              <p>
                {item.price}
                <br />
                {item.batch1}
                <br />
                {item.batch2}
              </p>
              {item.include ? <p>{item.include}</p> : null}
              <div className="internship--button">
                <button
                  onClick={() => {
                    Redirect(item.heading, item.amount);
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InternComponent;
