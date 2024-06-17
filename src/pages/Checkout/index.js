import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import { Provider } from "./CheckoutContext";
import Checkout from "./Checkout";
import Overview from "./Overview"

import './index.module.css'
import { getUserInfoAPI } from "../../api/site";

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
    const [userInfo, setUserInfo] = useState({});

    const fetchData = async() => {
        setUserInfo(await getUserInfoAPI());
    }

    useEffect(() => {
        fetchData();
    }, [])

    checkoutInitialState.email = userInfo.email;
    checkoutInitialState.firstName = userInfo.firstName;
    checkoutInitialState.lastName = userInfo.lastName;
    checkoutInitialState.address = userInfo.address;
    checkoutInitialState.phone = userInfo.phone;

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