import React, { useState } from "react";
import { Steps } from "antd";
import { Provider } from "./MultiStepFormContext";
import Name from "./Name";
import Info from "./Info";
import Email from "./Email";
import Password from "./Password";
import Review from "./Review";

import './index.module.css'


const { Step } = Steps;

const nameInitialState = {
  firstName: "",
  lastName: ""
};

const emailInitialState = {
  email: ""
};

const infoInitialState = {
  dayDOB: "",
  monthDOB: "",
  yearDOB: "",
  gender: ""
};

const passwordInitialState = {
  password: ""
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <Name />;
    case 1:
      return <Info/>;
    case 2:
      return <Email />;
    case 3:
      return <Password />;
    case 4:
      return <Review />;
    default:
      return null;
  }
};

const Signup = () => {
    const [name, setName] = useState(nameInitialState);
    const [info, setInfo] = useState(infoInitialState);
    const [email, setEmail] = useState(emailInitialState);
    const [password, setPassword] = useState(passwordInitialState);
    const [currentStep, setCurrentStep] = useState(0);

    const next = () => {
        if (currentStep === 4) {
          setCurrentStep(0);
          setName(nameInitialState);
          setInfo(infoInitialState);
          setEmail(emailInitialState);
          setPassword(passwordInitialState);
          return;
        }
        setCurrentStep(currentStep + 1);
    };

    const prev = () => setCurrentStep(currentStep - 1);
    return (
      <Provider value={{ name, setName, next, prev, info, setInfo, email, setEmail, password, setPassword }}>
        {/* <Steps current={currentStep}>
          <Step title={"Fill in your details"} />
          <Step title={"Address details"} />
          <Step title={"Review and Save"} />
        </Steps> */}
        <main>{renderStep(currentStep)}</main>
      </Provider>
    )
}

export default Signup;