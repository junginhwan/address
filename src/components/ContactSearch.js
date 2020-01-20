import React from "react";
import { Input, Row, Col } from "antd";

const ContactSearch = ({ handleSearch }) => {
  return (
    <Row>
      <Col span={24}>
        <Input
          name="search"
          placeholder="전화번호 검색"
          onChange={handleSearch}
        ></Input>
      </Col>
    </Row>
  );
};

export default ContactSearch;
