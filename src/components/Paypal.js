import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPal({ total, clearFromCart, history }) {
  const initialOptions = {
    "client-id": process.env.REACT_APP_API_KEY,
    currency: "USD",
    intent: "capture",
  };
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total, // update with your amount
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            clearFromCart();
            history.push("/product");
            alert(`Transaction completed by ${details.payer.name.given_name}`);
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
