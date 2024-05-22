import { Button, Col, Row } from "antd";
import React, { useContext } from "react";
import MultiStepFormContext from "./MultiStepFormContext";

const Review = () => {
  const { name, info, email, password, next, prev } = useContext(MultiStepFormContext);
  return (
    <div className={"details__wrapper"}>
      <Row>
        <Col span={24}>
          <h1>Details</h1>
          <p>Họ: {name.lastName}</p>
          <p>Tên: {name.firstName}</p>
        </Col>
        <Col span={24}>
          <h1>Info</h1>
          <p>dayDOB {info.dayDOB}</p>
          <p>monthDOB {info.monthDOB}</p>
          <p>yearDOB {info.yearDOB}</p>
          <p>gender: {info.gender}</p>
        </Col>
        <Col span={24}>
          <h1>Email</h1>
          <p>Mail {email.email}</p>
        </Col>
        <Col span={24}>
          <h1>Password</h1>
          <p>Password {password.password}</p>
        </Col>
        <Col span={24}>
          <div
            className={
              "form__item button__items d-flex justify-content-between"
            }
          >
            <Button type={"default"} onClick={prev}>
              Back
            </Button>
            <Button type={"primary"} onClick={next}>
              Confirm
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Review;
