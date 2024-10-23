import { Form, Input, Button, Tabs } from "antd";
import { useState } from "react";
import signupimage from "../../../assets/images/signupimg.png";
import { Link } from "react-router-dom";
import '../../../index.css'
const Registation = () => {
  const [signuptype, setsignuptype] = useState("user");

  const onFinish = (values) => {
    console.log("Success:", { ...values, signuptype }); // Include the login type in the console log
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleTabChange = (key) => {
    setsignuptype(key); // Update state based on selected tab
  };

  return (
    <div className="bg-[#F4F4F4] font-nunito">
      <div className="text-center lg:flex md:flex flex-row justify-center items-center gap-6 w-fit container mx-auto h-full min-h-screen">
        <div className="h-full w-full relative">
          <img
            className="w-full h-full mt-10"
            src={signupimage}
            alt="sideimage"
          />
          <div className="absolute text-white text-start lg:p-[51px] p-4 bottom-0 left-0">
            <h1 className="lg:text-4xl text-2xl font-bold">
              Real Feedback, Real Results
            </h1>
          </div>
        </div>

        <div className="w-full">
          <div className="py-8">
            <h3 className="lg:text-[28px] text-xl font-bold text-[#424242]">
              Welcome to
            </h3>
            <h1 className="lg:text-4xl text-2xl font-extrabold text-[#424242]">
              OPINYOO
            </h1>
            <h1 className="lg:text-4xl text-2xl font-extrabold text-[#424242]">
              FEEDBACK DEFINED
            </h1>
          </div>
          <div className="bg-[#FFFFFF] p-4 rounded-lg">
            <div className="py-6">
              <h1 className="text-2xl font-bold mb-4 text-[#424242]">
                Sign Up
              </h1>
              <h3 className="text-[#424242] text-[12px]">
                Enter your email & password to access your account
              </h3>
            </div>

            {/* Tabs for User and Business Login */}
            <Tabs defaultActiveKey="user" onChange={handleTabChange}>
              <Tabs.TabPane tab="User" key="user"></Tabs.TabPane>
              <Tabs.TabPane tab="Business" key="business"></Tabs.TabPane>
            </Tabs>

            <div className="w-full ">
              <Form
                name="signin"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label={
                    <label
                      htmlFor="name"
                      className="text-sm text-[#424242] font-bold"
                    >
                      Name
                    </label>
                  }
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Enter your name!",
                      type: "text",
                    },
                  ]}
                  required={false}
                >
                  <Input
                    prefix={
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4.5C13.0609 4.5 14.0783 4.92143 14.8284 5.67157C15.5786 6.42172 16 7.43913 16 8.5C16 9.56087 15.5786 10.5783 14.8284 11.3284C14.0783 12.0786 13.0609 12.5 12 12.5C10.9391 12.5 9.92172 12.0786 9.17157 11.3284C8.42143 10.5783 8 9.56087 8 8.5C8 7.43913 8.42143 6.42172 9.17157 5.67157C9.92172 4.92143 10.9391 4.5 12 4.5ZM12 6.5C11.4696 6.5 10.9609 6.71071 10.5858 7.08579C10.2107 7.46086 10 7.96957 10 8.5C10 9.03043 10.2107 9.53914 10.5858 9.91421C10.9609 10.2893 11.4696 10.5 12 10.5C12.5304 10.5 13.0391 10.2893 13.4142 9.91421C13.7893 9.53914 14 9.03043 14 8.5C14 7.96957 13.7893 7.46086 13.4142 7.08579C13.0391 6.71071 12.5304 6.5 12 6.5ZM12 13.5C14.67 13.5 20 14.83 20 17.5V20.5H4V17.5C4 14.83 9.33 13.5 12 13.5ZM12 15.4C9.03 15.4 5.9 16.86 5.9 17.5V18.6H18.1V17.5C18.1 16.86 14.97 15.4 12 15.4Z"
                          fill="#424242"
                        />
                      </svg>
                    }
                    className="border bg-[#E9EBF0] p-2 text-[16px] text-[#424242] font-medium hover:bg-[#E9EBF0] focus:border-[#dde2eb]"
                    placeholder="Enter your name"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <label
                      htmlFor="email"
                      className="text-sm text-[#424242] font-bold"
                    >
                      Email
                    </label>
                  }
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                      type: "email",
                    },
                  ]}
                  required={false}
                >
                  <Input
                    prefix={
                      <svg
                        width="20"
                        height="17"
                        viewBox="0 0 20 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 16.5C1.45 16.5 0.979167 16.3042 0.5875 15.9125C0.195833 15.5208 0 15.05 0 14.5V2.5C0 1.95 0.195833 1.47917 0.5875 1.0875C0.979167 0.695833 1.45 0.5 2 0.5H18C18.55 0.5 19.0208 0.695833 19.4125 1.0875C19.8042 1.47917 20 1.95 20 2.5V14.5C20 15.05 19.8042 15.5208 19.4125 15.9125C19.0208 16.3042 18.55 16.5 18 16.5H2ZM10 9.5L2 4.5V14.5H18V4.5L10 9.5ZM10 7.5L18 2.5H2L10 7.5ZM2 4.5V2.5V14.5V4.5Z"
                          fill="#424242"
                        />
                      </svg>
                    }
                    className="border bg-[#E9EBF0] p-2 text-[16px] text-[#424242] font-medium hover:bg-[#E9EBF0] focus:border-[#dde2eb]"
                    placeholder="Enter your email"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <label
                      htmlFor="password"
                      className="text-sm text-[#424242] font-bold"
                    >
                      Password
                    </label>
                  }
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                  required={false}
                >
                  <Input.Password
                    prefix={
                      <svg
                        width="23"
                        height="13"
                        viewBox="0 0 23 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 8.5C5.45 8.5 4.97917 8.30417 4.5875 7.9125C4.19583 7.52083 4 7.05 4 6.5C4 5.95 4.19583 5.47917 4.5875 5.0875C4.97917 4.69583 5.45 4.5 6 4.5C6.55 4.5 7.02083 4.69583 7.4125 5.0875C7.80417 5.47917 8 5.95 8 6.5C8 7.05 7.80417 7.52083 7.4125 7.9125C7.02083 8.30417 6.55 8.5 6 8.5ZM6 12.5C4.33333 12.5 2.91667 11.9167 1.75 10.75C0.583333 9.58333 0 8.16667 0 6.5C0 4.83333 0.583333 3.41667 1.75 2.25C2.91667 1.08333 4.33333 0.5 6 0.5C7.11667 0.5 8.12917 0.775 9.0375 1.325C9.94583 1.875 10.6667 2.6 11.2 3.5H20L23 6.5L18.5 11L16.5 9.5L14.5 11L12.375 9.5H11.2C10.6667 10.4 9.94583 11.125 9.0375 11.675C8.12917 12.225 7.11667 12.5 6 12.5ZM6 10.5C6.93333 10.5 7.75417 10.2167 8.4625 9.65C9.17083 9.08333 9.64167 8.36667 9.875 7.5H13L14.45 8.525L16.5 7L18.275 8.375L20.15 6.5L19.15 5.5H9.875C9.64167 4.63333 9.17083 3.91667 8.4625 3.35C7.75417 2.78333 6.93333 2.5 6 2.5C4.9 2.5 3.95833 2.89167 3.175 3.675C2.39167 4.45833 2 5.4 2 6.5C2 7.6 2.39167 8.54167 3.175 9.325C3.95833 10.1083 4.9 10.5 6 10.5Z"
                          fill="#424242"
                        />
                      </svg>
                    }
                    className="border bg-[#E9EBF0] p-2 text-[16px] text-[#424242] font-medium hover:bg-[#E9EBF0] focus:border-[#dde2eb]"
                    placeholder="Enter your password"
                  />
                </Form.Item>
                <Form.Item
                  label={
                    <label
                      htmlFor="location"
                      className="text-sm text-[#424242] font-bold"
                    >
                      location
                    </label>
                  }
                  name="location"
                  rules={[
                    {
                      required: true,
                      message: "Please input your location!",
                      type: "text",
                    },
                  ]}
                  required={false}
                >
                  <Input
                    prefix={
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.5C7.6 2.5 4 6.1 4 10.5C4 15.9 11 22 11.3 22.3C11.5 22.4 11.8 22.5 12 22.5C12.2 22.5 12.5 22.4 12.7 22.3C13 22 20 15.9 20 10.5C20 6.1 16.4 2.5 12 2.5ZM12 20.2C9.9 18.2 6 13.9 6 10.5C6 7.2 8.7 4.5 12 4.5C15.3 4.5 18 7.2 18 10.5C18 13.8 14.1 18.2 12 20.2ZM12 6.5C9.8 6.5 8 8.3 8 10.5C8 12.7 9.8 14.5 12 14.5C14.2 14.5 16 12.7 16 10.5C16 8.3 14.2 6.5 12 6.5ZM12 12.5C10.9 12.5 10 11.6 10 10.5C10 9.4 10.9 8.5 12 8.5C13.1 8.5 14 9.4 14 10.5C14 11.6 13.1 12.5 12 12.5Z" fill="#424242"/>
                        </svg>
                        
                    }
                    className="border bg-[#E9EBF0] p-2 text-[16px] text-[#424242] font-medium hover:bg-[#E9EBF0] focus:border-[#dde2eb]"
                    placeholder="Enter your location"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    style={{ backgroundColor: "#1F3B6B" }}
                    className="text-[#FFFFFF] text-[16px] font-semibold p-6"
                    size="large"
                    type="primary"
                    htmlType="submit"
                    block
                  >
                    Sign up
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="lg:flex md:flex flex-row justify-between items-center">
              <p className="text-[14px] text-[#195671] font-semibold   pb-4">
                {" "}
                Already in Opinyoo? <Link className="text-[#1F3B6B]" to={"/auth/login"}>Sign In</Link>
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registation;
