import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingCart,
  faSignOutAlt,
  faBox,
  faUser, 
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const navigate = useNavigate();
  const count = useSelector((state) => state.cartS.cart); // get redux variables
  const { email, picture, name } = useSelector(
    (state) => state.Auth.userDetails
  );

  return (
    <div className="navbar">
      <Link to="/">
        <div>
          <FontAwesomeIcon icon={faHome} /> Home
        </div>
      </Link>
      <Link to="/products">
        <div>
          <FontAwesomeIcon icon={faBox} /> Products
        </div>
      </Link>
      <Link to="/cart">
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <img src= 'cart.gif' style={{height: '35px'}}/>{" "}
          <div>Cart</div>
          <div
            style={{
              position: "absolute",
              top: "8px",
              left: "10px",
              color: "black",
              borderRadius: "50%",
              padding: "0px 6px",
              fontSize: "12px",
              fontWeight: "800",
            }}
          >
            {count}
          </div>
        </div>
      </Link>

      <div
        onClick={(e) => {
          document
            .getElementsByClassName("userDetails")[0]
            .classList.toggle("showUserDetails");
        }}
      >
        <img
          src={picture}
          height={40}
          width={40}
          style={{ borderRadius: "50%", cursor: "pointer" }}
        />
      </div>
      <div className="userDetails">
      <div className="closeIcon" onClick={() => {
            document
              .getElementsByClassName("userDetails")[0]
              .classList.remove("showUserDetails");
          }}>
            <i className="fas fa-times cross" ></i>
          </div>
        <div>
        <div style={{fontWeight: '600', fontSize: '15px'}}>{email}</div>
          <img
            src={picture}
            height={100}
            width={100}
            style={{ borderRadius: "50%", cursor: "pointer" }}
          />
        </div>
        <div style={{fontWeight: '600', fontSize: '20px'}}>Hi, {name}!</div>
        <div className='manage'>Manage your Google Account</div>
        <div>
          <div>
            <div
             
            >
             <div className="Account">
             <FontAwesomeIcon icon={faUser} /> Add Account
              </div>
              <div className="logout"  onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/";
              }}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
              </div>
              <div className="Privacy">
                  Privacy Policy
                </div>
                <div className='dot'>•</div>
                <div className="Terms">
                  Terms of Service
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
