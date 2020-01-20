import React from "react";
import { Layout } from "antd";
import Contact from "./pages/Contact";
import "antd/dist/antd.css";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ color: "#FFF" }}>주소록</Header>
      <Layout>
        <Content>
          <Contact></Contact>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
