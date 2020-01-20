import React, { useState } from "react";
import PropTypes from "prop-types";
import { List, Typography, Input, Row, Col, Button } from "antd";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: ""
  });
  const [contacts, setContacts] = useState([
    {
      name: "딸",
      phone: "01011112222"
    },
    {
      name: "아내",
      phone: "01022223333"
    },
    {
      name: "나",
      phone: "01033334444"
    },
    {
      name: "형",
      phone: "01044445555"
    },
    {
      name: "엄마",
      phone: "01055556666"
    }
  ]);

  const handleClick = e => {
    const { name, phone } = form;
    if (name.length === 0) {
      alert("이름을 입력하세요.");
      return;
    }
    if (phone.length === 0) {
      alert("전화번호를 입력하세요.");
      return;
    }
    const datas = contacts.concat({
      name,
      phone
    });
    setContacts(datas);
    setForm({
      ...form,
      name: "",
      phone: ""
    });
  };

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleDoubleClick = phone => {
    const datas = contacts.filter(current => {
      return current.phone !== phone;
    });
    setContacts(datas);
  };

  return (
    <>
      <div>
        <Row>
          <Col span={10}>
            <Input
              name="name"
              placeholder="이름"
              onChange={handleChange}
              value={form.name}
            ></Input>
          </Col>
          <Col span={10}>
            <Input
              name="phone"
              placeholder="전화번호"
              onChange={handleChange}
              value={form.phone}
            ></Input>
          </Col>
          <Col span={4}>
            <Button type="primary" onClick={handleClick}>
              등록
            </Button>
          </Col>
        </Row>
      </div>
      <List
        header={<div>주소록</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={contacts}
        renderItem={contact => (
          <List.Item
            style={{ cursor: "pointer" }}
            onDoubleClick={() => {
              handleDoubleClick(contact.phone);
            }}
          >
            <Typography.Text mark>{contact.name}</Typography.Text>{" "}
            {contact.phone}
          </List.Item>
        )}
      />
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.number
};

export default Contact;
