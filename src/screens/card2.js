import React from "react";
import { useState } from "react"
import { toast } from 'react-toastify';
import { updateOrderDetailOfUser } from "../services/firebase"
import style from "./main.module.css";

function PricingCard({ card }) {
  const list = [];
  const buyNow = async (price, subscription_name) => {
    var options = {
      key: "rzp_test_podAzJtN0eJ90B",
      key_secret: "dmRbskqqXkIOntD0g6LEoEGD",
      amount: parseInt(price * 100),
      currency: "USD",
      order_receipt: 'order_rcptid_' + localStorage.getItem("id"),
      name: "GPT-Sahab",
      description: "for testing purpose",
      handler: async function (response) {
        console.log(response)
        toast.success('Payment Successful');
        const paymentId = response.razorpay_payment_id
        try {
          await updateOrderDetailOfUser(localStorage.getItem('id'), paymentId, subscription_name)
        }
        catch (error) {
          console.log(error)
        }
      },
      theme: {
        color: "#3399cc"
      }
    };
    var pay = new window.Razorpay(options);
    pay.open();
  }


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
      <button className={style.priceBtn} onClick={() => buyNow(parseInt(card.price[0]), card.head)}>Select</button>
    </div>
  );
}

export default PricingCard;
