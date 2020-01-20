import React from "react";
import { Input, Row, Col, Button } from "antd";

const ContactForm = ({ name, phone, handleChange, handleClick }) => {
  return (
    <Row>
      <Col span={10}>
        <Input
          name="name"
          placeholder="이름"
          onChange={handleChange}
          value={name}
        ></Input>
      </Col>
      <Col span={10}>
        <Input
          name="phone"
          placeholder="전화번호"
          onChange={handleChange}
          value={phone}
        ></Input>
      </Col>
      <Col span={4}>
        <Button type="primary" onClick={handleClick}>
          등록
        </Button>
      </Col>
    </Row>
  );
};

export default ContactForm;
