import { Button, Col, Row } from "antd";
import React, { useContext } from "react";
import CheckoutContext from "./CheckoutContext";

const Overview = () => {
  const { checkout, next, prev } = useContext(CheckoutContext);
  console.log(checkout)
  return (
    <div className={"details__wrapper"}>
      <Row>
        <Col span={24}>
          <h1>Details</h1>
          <p>Họ: {checkout.lastName}</p>
          <p>Tên: {checkout.firstName}</p>
        </Col>
        <Col span={24}>
          <h1>Info</h1>
          <p>Email {checkout.email}</p>
          <p>Phone number {checkout.phone}</p>
          <p>Voucher {checkout.voucher}</p>
        </Col>
        <Col span={24}>
          <h1>Address</h1>
          <p>Address {checkout.address}</p>
          <p>City {checkout.city}</p>
          <p>District {checkout.district}</p>
          <p>Ward {checkout.ward}</p>
        </Col>
        <Col span={24}>
          <h1>Ship and pay</h1>
          <p>Shipping option {checkout.shippingOption}</p>
          <p>Payment method {checkout.paymentMethod}</p>
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
export default Overview;
