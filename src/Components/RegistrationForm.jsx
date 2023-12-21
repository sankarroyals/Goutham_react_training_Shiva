import React, { useState, useEffect, useRef } from 'react';
import './RegistrationForm.css'; 

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);

  const [otpMessage, setOtpMessage] = useState('');
  const [formSubmitMessage, setFormSubmitMessage] = useState('');

  const emailInputRef = useRef(null);

//   Validation Part
  const isEmailValid = /[a-z]+@gmail.com/.test(email);
  const isAgeValid = isNaN(age) === false && age !== '';
  const isNameValid = name!=='';
  const isOtpValid = isNaN(otp) === false && otp.length === 4;

  useEffect(() => {
    if (isOtpSent) {
      setOtpMessage('OTP sent successfully.');
      setTimeout(() => setOtpMessage(''), 2000); 
    }
  }, [isOtpSent]);

  useEffect(() => {
    if (isFormSubmitted) {
      setFormSubmitMessage('Form submitted successfully.');
      setTimeout(() => setFormSubmitMessage(''), 2000); 
    }
  }, [isFormSubmitted]);

  useEffect(() => {
    setIsFormSubmitted(false);
  }, [email, otp, name, age]);

  useEffect(() => {
    emailInputRef.current.focus(); 
  }, []);

  const sendOtp =  () => {
    setTimeout(() => {
        setIsOtpSent(true);
      }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setFormData({
        email,
        otp,
        name,
        age,
      });
      setIsFormSubmitted(true);
    }
  };

  const isFormValid = (isEmailValid && isOtpValid && isAgeValid && isNameValid);

  return (
    <div className="registration-form-container">
      {!isFormSubmitted && (
        <form onSubmit={handleSubmit}>
          <h1 style={{background:"black", color:'white', padding:'20px', borderRadius: '5px'}}>Registration Form</h1>
          <label>Email:</label>
          <div className={`input-container ${isEmailValid ? 'valid' : 'invalid'}`}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isOtpSent}
              placeholder="example@gmail.com"
              ref={emailInputRef}
              autoFocus
            />
            {isEmailValid && <div className="validation-icon">&#10004;</div>}
          </div>
          
          {otpMessage && <div className="success-message">{otpMessage}</div>}
          {!isOtpSent && (
            <button onClick={sendOtp} disabled={!isEmailValid}>
              Send OTP
            </button>
          )}

          {isOtpSent && (
            <>
              <label>OTP:</label>
              <div className={`input-container ${isOtpValid ? 'valid' : 'invalid'}`}>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  disabled={!isOtpSent}
                  placeholder="Enter OTP"
                />
                {isOtpValid && <div className="validation-icon">&#10004;</div>}
              </div>
            </>
          )}
         

          <label>Name:</label>
          <div className={`input-container ${isNameValid ? 'valid' : 'invalid'}`}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            //   disabled={!isOtpValid}
              placeholder="Enter your name"
            />
            {isNameValid && <div className="validation-icon">&#10004;</div>}
          </div>

          <label>Age:</label>
          <div className={`input-container ${isAgeValid ? 'valid' : 'invalid'}`}>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            //   disabled={!isOtpValid}
              placeholder="Enter your age"
            />
            {isAgeValid && <div className="validation-icon">&#10004;</div>}
          </div>

          <button type="submit" disabled={!isFormValid}>
            Submit
          </button>
        </form>
      )}

      {formSubmitMessage && <div className="success-message">{formSubmitMessage}</div>}

      {isFormSubmitted && formData && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <div className="data-item">{`Name: ${formData.name}`}</div>
          <div className="data-item">{`Age: ${formData.age}`}</div>
          <div className="data-item">{`Email: ${formData.email}`}</div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
