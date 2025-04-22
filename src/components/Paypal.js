import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default class MyApp extends React.Component {
  render() {
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
                    value: "9.99", // update with your amount
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert(
                `Transaction completed by ${details.payer.name.given_name}`
              );
            });
          }}
        />
      </PayPalScriptProvider>
    );
  }
}
