import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { updateOrderDetailOfUser } from "../services/firebase";
import style from "./main.module.css";

function PricingCard({ card }) {
  const list = [];

  const buyNow = async (price, subscription_name) => {
    if (localStorage.getItem("login") && localStorage.getItem("id")) {
      console.log(price);
      try {
        await axios
          .post(`http://localhost:8000/api/payment/indirect-payment`, {
            amount: price,
            MUID: "MUID" + Date.now(),
            transactionId: "T" + Date.now(),
            userId: `${localStorage.getItem("id")}`,
          })
          .then((res) => {
            window.location.href = res.data.data;
          });
      } catch (error) {
        if (error.response) {
          if (error.response.status === 400) {
            toast.error(error.response.data.message, {
              position: toast.POSITION_TOP_RIGHT,
            });
          } else if (error.response.status === 404) {
            toast.error(error.response.data.message, {
              position: toast.POSITION_TOP_RIGHT,
            });
          } else if (error.response.status === 401) {
            toast.error(error.response.data.message, {
              position: toast.POSITION_TOP_RIGHT,
            });
          } else {
            toast.error(error.response.data.message, {
              position: toast.POSITION_TOP_RIGHT,
            });
          }
        } else if (error.request) {
          toast.error(
            "No response received. Please check your network connection.",
            { position: toast.POSITION_TOP_RIGHT }
          );
        } else {
          toast.error("An error occurred. Please try again later.", {
            position: toast.POSITION_TOP_RIGHT,
          });
        }
      }
    } else {
      toast.success("Kindly Login First !");
    }
  };

  // try {
  //   await updateOrderDetailOfUser(localStorage.getItem('id'), paymentId, subscription_name)
  // }
  // catch (error) {
  //   console.log(error)
  // }

  return (
    <div className={style.pcard}>
      <div className={style.cardHead} style={{ background: card.color }}>
        {card.head}
      </div>
      <div className={style.points}>
        {card.points.map((val) => {
          return (
            <div className={style.cardel}>
              <img src={card.path}></img>
              <div> {val} </div>
            </div>
          );
        })}
      </div>
      <div className={style.cardPrice}>
        <span>{card.price[0]}</span>
        <br></br>
        {card.price[1]}
      </div>
      <button
        className={style.priceBtn}
        onClick={() => buyNow(parseInt(card.price[0].slice(1)), card.head)}
      >
        Select
      </button>
    </div>
  );
}

export default PricingCard;
