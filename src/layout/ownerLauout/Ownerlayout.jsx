import React, { useState } from "react";
import Sidebar from "../../components/ownerDashboard/Sidebar";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import MainHeader from "../../components/ownerDashboard/MainHeader";
import '../../index.css'

const Ownerlayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Layout
        className=" !bg-black font-popins"
        style={{ backgroundColor: "black" }}
      >
        <Sidebar collapsed={collapsed}></Sidebar>
        <Layout
          style={{
            marginLeft: collapsed ? 80 : 250,
            transition: "margin-left 0.2s ease",
          }}
          className={``}
        >
          {/* my header */}
          <MainHeader
            setCollapsed={setCollapsed}
            collapsed={collapsed}
          ></MainHeader>
          <Content className="p-5 font-popins bg-[#F4F4F4] min-h-screen rounded-lg" style={{}}>
            {/* my content */}
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Ownerlayout;
