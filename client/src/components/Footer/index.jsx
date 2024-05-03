import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, Toaster } from "react-hot-toast";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import "./index.scss";
const Footer = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const { name, email, subject, message } = data;
    try {
      const { data } = await axios.post(
        "https://edutech-pgdf.onrender.com/message",
        {
          name,
          email,
          subject,
          message,
        }
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Message sent successful!");
        setData({ name: "", email: "", message: "", subject: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <footer className="footer">
      <div className="contact">
        <h1>Contact Us</h1>
      </div>
      <div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <ul>
              <li className="half">
                <input
                  placeholder="Name"
                  type="text"
                  value={data.name}
                  required
                  onChange={(e) => {
                    setData({ ...data, name: e.target.value });
                  }}
                />
              </li>
              <li className="half">
                <input
                  placeholder="Email"
                  type="email"
                  value={data.email}
                  required
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                  }}
                />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  value={data.subject}
                  required
                  onChange={(e) => {
                    setData({ ...data, subject: e.target.value });
                  }}
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  value={data.message}
                  required
                  onChange={(e) => {
                    setData({ ...data, message: e.target.value });
                  }}
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="footer--links">
        <div className="footer--icon">
          <Link
            className="Link"
            target="_blank"
            to="https://instagram.com/aero_in_?igshid=YmMyMTA2M2Y="
          >
            <FontAwesomeIcon icon={faInstagram} color="#fff" />
          </Link>
          <Link
            className="Link"
            target="_blank"
            to="https://www.linkedin.com/company/aero-in/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#fff" />
          </Link>
          <Link
            className="Link"
            target="_blank"
            to="https://www.facebook.com/profile.php?id=100086113013118"
          >
            <FontAwesomeIcon icon={faFacebook} color="#fff" />
          </Link>
          <Link
            className="Link"
            target="_blank"
            to="https://twitter.com/aerodotin?t=9eojpvxRqRApy9oFxj0qyw&s=09"
          >
            <FontAwesomeIcon icon={faXTwitter} color="#fff" />
          </Link>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </footer>
  );
};

export default Footer;
