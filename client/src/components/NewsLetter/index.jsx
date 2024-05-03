import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import "./index.scss";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://127.0.0.1:8000/register", {
        email,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("email sent successful!");
        setEmail("");
      }
    } catch (error) {
      console.log(error);
    }
    // Handle form submission, e.g., send email to backend https://edutech-pgdf.onrender.com/
  };

  return (
    <>
      <div className="newsletter-signup">
        <div className="newsletter-links">
          <Link className="Link" to="/">
            Home
          </Link>
          <Link className="Link" to="/internship">
            Internship
          </Link>
          <Link className="Link" to="/masterclass">
            Masterclass
          </Link>
          <Link className="Link" to="/workshop">
            Workshop
          </Link>
        </div>
        <div className="newsletter-form">
          <form onSubmit={handleSubmit}>
            <p>SignIn To Our NewsLetter</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <p className="copyright">©2021 by Aeroin SpaceTech || Aeroin Edutech</p>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default NewsletterSignup;
