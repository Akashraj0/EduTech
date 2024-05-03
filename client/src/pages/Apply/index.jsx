// import React, { useState } from "react";
import "./index.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Apply = () => {
  // const [data, setdata] = useState({ name: "", email: "", phoneNumber: "" });
  const location = useLocation();
  const navigate = useNavigate();
  const { heading, price } = location.state || {};
  console.log(heading, price);

  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
  });

  // Use useFormik hook to handle form state and validation
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate("/embedded", {
        state: { heading, price, ...values },
      });
    },
  });

  return (
    <div className="apply">
      <div className="paybox">
        <h1>Payment Details</h1>
        <div className="paybox-content">
          <h3>
            {heading} - {price} Rupess
          </h3>
        </div>
      </div>
      <form className="applyForm" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && formik.touched.name && (
          <div className="error">{formik.errors.name}</div>
        )}
        <input
          type="email"
          placeholder="Enter your Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && formik.touched.email && (
          <div className="error">{formik.errors.email}</div>
        )}
        <input
          type="text"
          placeholder="Enter your Phone Number"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
        />
        {formik.errors.phoneNumber && formik.touched.phoneNumber && (
          <div className="error">{formik.errors.phoneNumber}</div>
        )}
        <button className="flat-button" type="submit">
          Pay
        </button>
      </form>
    </div>
  );
};

export default Apply;
