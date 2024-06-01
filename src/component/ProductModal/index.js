import React, { useState } from "react";
import { Steps } from "antd";
import { Provider } from "./MultiStepModalContext";
import Content from "./Content";
import EmbroideryOption from "./EmbroideryOption";

import './index.module.css'


const { Step } = Steps;

const contentInitialState = {
  content: ""
};

const embOptionInitialState = {
  side: ""
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <Content/>;
    case 1:
      return <EmbroideryOption/>;
    default:
      return null;
  }
};

const ProductModal = () => {
    const [content, setContent] = useState(contentInitialState);
    const [embOption, setEmbOption] = useState(embOptionInitialState);
    const [currentStep, setCurrentStep] = useState(0);

    const next = () => {
        if (currentStep === 1) {
          setCurrentStep(0);

          setContent(contentInitialState);
          setEmbOption(embOptionInitialState);
          return;
        }
        setCurrentStep(currentStep + 1);
    };

    const prev = () => setCurrentStep(currentStep - 1);
    return (
      // <Provider value={{ content, setContent, next, prev, embOption, setEmbOption}}>
      //   <Steps current={currentStep}>
      //     <Step title={"Nhập nội dung"} />
      //     <Step title={"Chọn vị trí"} />
      //     {/* <Step title={"Overview"} /> */}
      //   </Steps>
      //   <main>{renderStep(currentStep)}</main>
      // </Provider>
      <div>
        <h1>ádasdas</h1>
      </div>
    )
}

export default ProductModal;