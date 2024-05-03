import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./index.scss";
const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    console.log("hi");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    fetch(`http://127.0.0.1:8000/book/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, [status]);

  if (status === "open") {
    return <Navigate to="/checkout" />;
  }

  if (status === "complete") {
    return (
      <section id="success" className="success">
        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          {customerEmail}. If you have any questions, please email{" "}
          <a href="mailto:orders@example.com">info@aeroin.space</a>.
        </p>
      </section>
    );
  } else {
    <section id="failure" className="failure">
      <p>Oops somethings Went wrong Please</p>
    </section>;
  }

  return null;
};

export default Return;
