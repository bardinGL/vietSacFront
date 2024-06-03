import React, { useState } from "react";
import { Steps } from "antd";
import { Provider } from "./MultiStepModalContext";
import Content from "./Content";
import EmbroideryOption from "./EmbroideryOption";
import Overview from "./Overview";

import './index.module.css'
import Progressbar from "./ProgressBar";


const { Step } = Steps;

const contentInitialState = {
  content: ""
};

const embOptionInitialState = {
  embOption: ""
};

const progressbarStepTitle = [
  "Nhập nội dung",
  "Chọn vị trí",
  "Overview"
]

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <Content/>;
    case 1:
      return <EmbroideryOption/>;
    case 2:
      return <Overview/>;
    default:
      return null;
  }
};

const ProductModal = () => {
    const [content, setContent] = useState(contentInitialState);
    const [embOption, setEmbOption] = useState(embOptionInitialState);
    const [currentStep, setCurrentStep] = useState(0);

    const next = () => {
        if (currentStep === 2) {
          setCurrentStep(0);

          setContent(contentInitialState);
          setEmbOption(embOptionInitialState);
          return;
        }
        setCurrentStep(currentStep + 1);
    };

    const prev = () => setCurrentStep(currentStep - 1);
    return (
      <Provider value={{ content, setContent, next, prev, embOption, setEmbOption}}>
        <Progressbar currentStep={currentStep} progressbarStepTitle={progressbarStepTitle}/>
        <main>{renderStep(currentStep)}</main>
      </Provider>
    )
}

export default ProductModal;