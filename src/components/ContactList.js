import React from "react";
import { List, Typography } from "antd";

const ContactList = ({ listContact, handleDoubleClick }) => {
  return (
    <List
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
