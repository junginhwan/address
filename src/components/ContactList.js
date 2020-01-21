import React from "react";
import { List, Typography } from "antd";

const ContactList = ({ listContact, handleDoubleClick }) => {
  return (
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
  );
};

export default ContactList;
