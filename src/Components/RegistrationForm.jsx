import React, { useState, useEffect, useRef } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailOtpSent, setIsEmailOtpSent] = useState(false);
  const [isMobileOtpSent, setIsMobileOtpSent] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);

  const [emailOtpMessage, setEmailOtpMessage] = useState("");
  const [mobileOtpMessage, setMobileOtpMessage] = useState("");
  const [formSubmitMessage, setFormSubmitMessage] = useState("");

  const emailInputRef = useRef(null);

  // Validation Part
  const isEmailValid = /[a-z]+@gmail.com/.test(email);
  const isMobileValid = /^[0-9]{10}$/.test(mobile);
  const isNameValid = name !== "";
  const isEmailOtpValid = isNaN(emailOtp) === false && emailOtp.length === 4;
  const isMobileOtpValid = isNaN(mobileOtp) === false && mobileOtp.length === 4;
  const isPasswordValid = password.length >= 6;

  useEffect(() => {
    if (isEmailOtpSent) {
      setEmailOtpMessage("Email OTP sent successfully.");
      setTimeout(() => setEmailOtpMessage(""), 5000);
    }
  }, [isEmailOtpSent]);

  useEffect(() => {
    if (isMobileOtpSent) {
      setMobileOtpMessage("Mobile OTP sent successfully.");
      setTimeout(() => setMobileOtpMessage(""), 5000);
    }
  }, [isMobileOtpSent]);

  useEffect(() => {
    if (isFormSubmitted) {
      setFormSubmitMessage("Form submitted successfully.");
      setTimeout(() => setFormSubmitMessage(""), 1000);
    }
  }, [isFormSubmitted]);

  useEffect(() => {
    setIsFormSubmitted(false);
  }, [email, emailOtp, mobile, mobileOtp, name, password]);

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  const sendEmailOtp = () => {
    // Simulate OTP sending logic for email
    setTimeout(() => {
      setIsEmailOtpSent(true);
    }, 1000);
  };

  const sendMobileOtp = () => {
    // Simulate OTP sending logic for mobile
    setTimeout(() => {
      setIsMobileOtpSent(true);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setFormData({
        email,
        emailOtp,
        mobile,
        mobileOtp,
        name,
        password,
      });
      setIsFormSubmitted(true);
    }
  };

  const isFormValid =
    isEmailValid &&
    isMobileValid &&
    isEmailOtpValid &&
    isMobileOtpValid &&
    isNameValid &&
    isPasswordValid;

  return (
    <div className="registration-form-container">
      {!isFormSubmitted && (
        <form onSubmit={handleSubmit} autoComplete="off">
          <h1
            style={{
              background: "black",
              color: "white",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            Registration Form
          </h1>

          <label>Name:</label>
          <div
            className={`input-container ${isNameValid ? "valid" : "invalid"}`}
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            {isNameValid && <div className="validation-icon">&#10004;</div>}
          </div>

          <label>Email</label>
          <div
            className={`input-container ${isEmailValid ? "valid" : "invalid"}`}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isEmailOtpSent}
              placeholder="example@gmail.com"
              ref={emailInputRef}
            />
            {isEmailValid && <div className="validation-icon">&#10004;</div>}
          </div>

          {emailOtpMessage && (
            <div className="success-message">{emailOtpMessage}</div>
          )}
          {!isEmailOtpSent && (
            <button onClick={sendEmailOtp} disabled={!isEmailValid}>
              Send Email OTP
            </button>
          )}

          {isEmailOtpSent && (
            <>
              <label>Email OTP:</label>
              <div
                className={`input-container ${
                  isEmailOtpValid ? "valid" : "invalid"
                }`}
              >
                <input
                  type="text"
                  value={emailOtp}
                  onChange={(e) => setEmailOtp(e.target.value)}
                  placeholder="Enter Email OTP"
                />
                {isEmailOtpValid && (
                  <div className="validation-icon">&#10004;</div>
                )}
              </div>
            </>
          )}

          <label>Mobile Number:</label>
          <div
            className={`input-container ${
              isMobileValid ? "valid" : "invalid"
            }`}
          >
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
            />
            {isMobileValid && <div className="validation-icon">&#10004;</div>}
          </div>

          {mobileOtpMessage && (
            <div className="success-message">{mobileOtpMessage}</div>
          )}
          {!isMobileOtpSent && (
            <button onClick={sendMobileOtp} disabled={!isMobileValid}>
              Send Mobile OTP
            </button>
          )}

          {isMobileOtpSent && (
            <>
              <label>Mobile OTP:</label>
              <div
                className={`input-container ${
                  isMobileOtpValid ? "valid" : "invalid"
                }`}
              >
                <input
                  type="text"
                  value={mobileOtp}
                  onChange={(e) => setMobileOtp(e.target.value)}
                  placeholder="Enter Mobile OTP"
                />
                {isMobileOtpValid && (
                  <div className="validation-icon">&#10004;</div>
                )}
              </div>
            </>
          )}

          <label>Password:</label>
          <div
            className={`input-container ${
              isPasswordValid ? "valid" : "invalid"
            }`}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            {isPasswordValid && <div className="validation-icon">&#10004;</div>}
          </div>

          <button type="submit" disabled={!isFormValid}>
            Submit
          </button>
        </form>
      )}

      {formSubmitMessage && (
        <div className="success-message">{formSubmitMessage}</div>
      )}

      {isFormSubmitted && formData && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <div className="data-item">{`Name: ${formData.name}`}</div>
          <div className="data-item">{`Email: ${formData.email}`}</div>
          <div className="data-item">{`Mobile: ${formData.mobile}`}</div>
          {/* You might not want to display the password in the submitted data */}
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
