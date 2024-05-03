import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send email to backend
    console.log("Email submitted:", email);
    setEmail("");
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
    </>
  );
};

export default NewsletterSignup;
