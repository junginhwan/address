import React, { useState } from "react";
import PropTypes from "prop-types";
import ContactForm from "../components/ContactForm";
import ContactSearch from "../components/ContactSearch";
import { List, Typography } from "antd";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: ""
  });
  const [contacts, setContacts] = useState([
    {
      name: "아이린",
      phone: "01011112222"
    },
    {
      name: "웬디",
      phone: "01022223333"
    },
    {
      name: "예리",
      phone: "01033334444"
    },
    {
      name: "슬기",
      phone: "01044445555"
    },
    {
      name: "조이",
      phone: "01055556666"
    }
  ]);
  const [listContact, setListContact] = useState(contacts);

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
    setListContact(datas);
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
    setListContact(datas);
  };

  const handleSearch = e => {
    const datas = contacts.filter(currect => {
      return e.target.value.length > 0
        ? currect.phone.indexOf(e.target.value) > -1
        : currect;
    });
    setListContact(datas);
  };

  return (
    <>
      <div>
        <ContactSearch handleSearch={handleSearch}></ContactSearch>
        <ContactForm
          name={form.name}
          phone={form.phone}
          handleChange={handleChange}
          handleClick={handleClick}
        ></ContactForm>
      </div>
      <List
        footer={
          <div>
            <ul>
              <li>간단히 만든 주소록</li>
              <li>리액트로 구현</li>
              <li>expo로 Ios / And에서도 사용가능</li>
              <li>디자인은 antd 라이브러리</li>
              <li>gh-pages 로 빌드 후 github.io 등록</li>
              <li>localStorage 로 저장해도 되는데 귀찮</li>
              <li>더블클릭시 삭제됨</li>
            </ul>
          </div>
        }
        bordered
        dataSource={listContact}
        renderItem={contact => {
          return (
            <List.Item
              style={{ cursor: "pointer" }}
              onDoubleClick={() => {
                handleDoubleClick(contact.phone);
              }}
            >
              <Typography.Text mark>{contact.name}</Typography.Text>{" "}
              {contact.phone}
            </List.Item>
          );
        }}
      />
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.number
};

export default Contact;
