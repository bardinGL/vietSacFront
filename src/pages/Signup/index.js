import React, { useState } from "react";
import { Provider } from "./MultiStepFormContext";
import Name from "./Name";
import Info from "./Info";
import Email from "./Email";
import Password from "./Password";

import './index.module.css'
import { postSignUpUser } from "../../api/site";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();

    async function createNewUser() {
      const userInfo = {
        'username': email.email,
        'password': password.password,
        'email': email.email,
        'role_id': '1',
        'phone': info.yearDOB,
        'address': info.gender
      }
      await postSignUpUser(userInfo)
        .then(res => {
          if(res.statusCode !== 200) {
            alert(res.messageError);
          }else {
            alert("Create new account successfully!!!");
            navigate('/login');
          }
        })
    }

    const next = () => {
        if (currentStep === 3) {
          
          createNewUser();
          // setCurrentStep(0);
          // setName(nameInitialState);
          // setInfo(infoInitialState);
          // setEmail(emailInitialState);
          // setPassword(passwordInitialState);
          return;
        }
        setCurrentStep(currentStep + 1);
    };

    const prev = () => setCurrentStep(currentStep - 1);
    return (
      <Provider value={{ name, setName, next, prev, info, setInfo, email, setEmail, password, setPassword }}>
        <main>{renderStep(currentStep)}</main>
      </Provider>
    )
}

export default Signup;