import React, { useState } from "react";
import { Steps } from "antd";
import { Provider } from "./CheckoutContext";
import Checkout from "./Checkout";
import Overview from "./Overview"

import './index.module.css'

const checkoutInitialState = {
  email: "",
  firstName: "",
  lastName: "",
  address: "",
  phone: "",
  city: "",
  district: "",
  ward: "",
  voucher: "",
  shippingOption: "",
  paymentMethod: ""
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <Checkout/>;
    case 1:
      return <Overview/>;
    default:
      return null;
  }
};

const CheckoutPage = () => {
    const [checkout, setCheckout] = useState(checkoutInitialState);
    const [currentStep, setCurrentStep] = useState(0);

    const next = () => {
        if (currentStep === 1) {
          setCurrentStep(0);

          setCheckout(checkoutInitialState);
          return;
        }
        setCurrentStep(currentStep + 1);
    };

    const prev = () => setCurrentStep(currentStep - 1);
    return (
      <Provider value={{ checkout, setCheckout, next, prev}}>
        <main>{renderStep(currentStep)}</main>
      </Provider>
    )
}

export default CheckoutPage;