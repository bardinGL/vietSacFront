import React, { useState } from "react";
import { Provider } from "./MultiStepFormContext";
import Name from "./Name";
import Info from "./Info";
import Email from "./Email";
import Password from "./Password";

import './index.module.css'
import { postSignUpUser } from "../../api/site";
import { useNavigate } from "react-router-dom";

const userInfoIntitialState = {
  'username': '',
  'password': '',
  'email': '',
  'role_id': '1',
  'phone': '',
  'address': ''
}

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
    const [userInfo, setUserInfo] = useState(userInfoIntitialState);
    const [currentStep, setCurrentStep] = useState(0);

    const navigate = useNavigate();

    async function createNewUser() {
      const sendUserInfo = {
        'username': userInfo.email,
        'password': userInfo.password,
        'email': userInfo.email,
        'role_id': '1',
        'phone': userInfo.yearDOB,
        'address': userInfo.gender
      }
      await postSignUpUser(sendUserInfo)
        .then(res => {
          if(res.statusCode !== 200) {
            alert(res.messageError);
          }else {
            alert("Create new account successfully!!!");
            navigate('/login');
          }
        })
        .catch(res => {
          navigate('/error');
        })
    }

    const next = (endOfForm = false) => {
      // if (currentStep === 3) {
        if (endOfForm) {
          createNewUser()
          
          return;
        }
        setCurrentStep(currentStep + 1);
    };

    const prev = () => setCurrentStep(currentStep - 1);
    return (
      <Provider value={{ userInfo, setUserInfo, next, prev}}>
        <main>{renderStep(currentStep)}</main>
      </Provider>
    )
}

export default Signup;