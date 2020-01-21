import React, { useState } from "react";
import PropTypes from "prop-types";
import ContactForm from "../components/ContactForm";
import ContactSearch from "../components/ContactSearch";
import ContactList from "../components/ContactList";

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
      <ContactList
        listContact={listContact}
        handleDoubleClick={handleDoubleClick}
      ></ContactList>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.number
};

export default Contact;
