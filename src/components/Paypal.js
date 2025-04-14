import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default class MyApp extends React.Component {
  render() {
    // const onSuccess = (payment) => {
    //   // Congratulation, it came here means everything's fine!
    //   console.log("The payment was succeeded!", payment);
    //   this.props.clearFromCart();
    //   this.props.history.push("/product");
    //   // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    // };

    // const onCancel = (data) => {
    //   // User pressed "cancel" or close Paypal's popup!
    //   console.log("The payment was cancelled!", data);
    //   // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    // };

    // const onError = (err) => {
    //   // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    //   console.log("Error!", err);
    //   // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    //   // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    // };

    // let env = "sandbox"; // you can set here to 'production' for production
    // let currency = "USD"; // or you can set this value from your props or state
    // // let total = 20; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    // const client = {
    //   sandbox: process.env.REACT_APP_API_KEY,
    //   production: "YOUR-PRODUCTION-APP-ID",
    // };

    return (
      <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID" }}>
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
