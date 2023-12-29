import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  function handleCallback(response) {
    console.log("Encoded", jwtDecode(response.credential));
    localStorage.setItem("user", response.credential);
    window.location.href = "/";
  }

  useEffect(() => {
    window.google?.accounts.id.initialize({
      client_id:
        "883912602233-q4h2fm2a0lk9s8v2c6optve7c0h26bgh.apps.googleusercontent.com",
      callback: handleCallback,
    });

    window.google?.accounts.id.renderButton(document.getElementById("signIn"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div>
      <main class="main">
        <div class="container">
          <img
            style={{
              height: "100vh",
              width: "50%",
              marginLeft: "-180px",
            }}
            src="clothes.png"
            alt="Clothes"
          />
          <section class="wrapper">
            <div
              style={{
                textAlign: "center",
                marginBottom: "20px",
                fontSize: "28px",
                marginTop: "80px",
                marginLeft: "80px",
                fontWeight: "600",
              }}
            >
              Google Sign In
            </div>
            <p style={{ marginLeft: "80px" }}>
              Welcome, Please login for shopping
            </p>
            <div id="signIn" style={{ marginLeft: "100px" }}></div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;
