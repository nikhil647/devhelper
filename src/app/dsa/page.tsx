"use client";

import "./DSA.scss";
import React from "react";
import { useState } from "react";
import { Button, Layout, Menu, theme, Form, Input, Modal, Radio } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import DSAComponent from "@/Component/DSAComponent/Page";
import CollectionCreateForm from "@/Component/Form/AddNewProgram";
const { Header, Sider, Content } = Layout;

const DSA = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedKey, setSelectedKey] = useState("1");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [open, setOpen] = useState(false);

  const onCreate = (values: any) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <DSAComponent />;
      case "2":
        return <div> Notes </div>;
      case "3":
        return <div> Resume Builder </div>;
      case "4":
        return <div> Course Tracker </div>;
    }
  };

  return (
    <div className="dsa-container">
      <Layout
        style={{
          overflow: "auto",
          height: "100%",
          position: "sticky",
          top: 0,
        }}
      >
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            onClick={(val: { key: string }) => setSelectedKey(val?.key)}
            defaultSelectedKeys={[selectedKey]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "DSA",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "Notes",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "Resume Builder",
              },
              {
                key: "4",
                icon: <UploadOutlined />,
                label: "Course Tracker",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: "15px",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />

            <Button
              defaultBg="#000"
              defaultColor="#d5b263"
              type="primary"
              size={"large"}
              onClick={() => {
                setOpen(true);
              }}
            >
              Add Program
            </Button>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {renderContent()}
            {<div style={{ height: "400vh" }}></div>}
          </Content>
        </Layout>
        <CollectionCreateForm
          open={open}
          onCreate={onCreate}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </Layout>
    </div>
  );
};

export default DSA;
