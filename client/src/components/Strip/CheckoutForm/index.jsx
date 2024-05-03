/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import "./index.scss";

const stripePromise = loadStripe(
  "pk_test_51P8dcYSISXYVPIJTZi2cqFlWnRhm3rxfNtmXuFPXSWg0z8QJJSlfiD7RdPJaVCgEZJZXU45aHhzstAnOZVXXbnXk00OizHq4aa"
);

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  // const [post, setPost] = useState(data);
  const location = useLocation();
  const { heading, price, name, email, phoneNumber } = location.state || {};

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        purchase: heading,
        price: price,
        email: email,
        name: name,
        phoneNumber: phoneNumber,
      };
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/book/create-checkout-session/",
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseData = await response.json();
        setClientSecret(responseData.clientSecret);
        console.log(clientSecret); // This will likely log an empty string
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };

    if (heading && price) {
      fetchData();
    }
  }, [heading, price]); // Fetch client secret whenever product or amount changes

  return (
    <div id="checkout" className="checkout">
      {clientSecret ? (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CheckoutForm;
