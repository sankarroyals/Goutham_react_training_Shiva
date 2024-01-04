import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { changeCartCount, updatedCart } from "../../redux/Cart/CartReducer";
import { useDispatch } from "react-redux";

const SinglecartItem = ({ d, setData, data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const deleteFromcart = async () => {
   await axios.delete(`http://localhost:4000/cart/${d.id}`).then((res) => {
      alert("Item deleted successFully");
      console.log(data);
      setData(data.filter((db) => d.id !== db.id));
    });

    dispatch(updatedCart())

  };
  return (
    <div style={{ border: "1px solid gray", padding: "5px" }}>
      <div>
        <img src={d.image} alt="" height={150} />
      </div>
      <div>{d.type}</div>
      <div>
        <b>{d.count}</b> items in the cart
      </div>
      <div>&#8377;{d.cost}</div>
      <button
        onClick={() => navigate(`/product/${d.id}`)}
        style={{
          cursor: "pointer",
          padding: "5px",
          width: "100%",
          cursor: "pointer",
          background: "orange",
          border: "none",
          borderRadius: "15px",
          marginBottom: "10px",
          marginTop: "5px",
        }}
      >
        Go to Product
      </button>
      <button
        onClick={deleteFromcart}
        style={{
          cursor: "pointer",
          padding: "5px",
          width: "100%",
          cursor: "pointer",
          background: "orange",
          border: "none",
          borderRadius: "15px",
          marginBottom: "10px",
          marginTop: "5px",
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default SinglecartItem;
