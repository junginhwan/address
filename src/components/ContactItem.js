import React from "react";
import { List, Typography } from "antd";

const ContactItem = ({ name, phone }) => {
  return (
    <div>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default ContactItem;
