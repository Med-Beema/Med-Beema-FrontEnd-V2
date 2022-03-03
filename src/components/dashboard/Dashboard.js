import React from "react";
import { Layout } from "antd";
const { Content, Sider } = Layout;

export default function Dashboard() {
  return (
    <div>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
    </div>
  );
}
