
import { Form, Input, Button, Tabs } from "antd";
import { useState } from "react";
import logoimage from "../../../assets/images/loginimage.png"; // Adjust the path as needed
import { Link } from "react-router-dom";
import '../../../index.css'
const Login = () => {
  const [loginType, setLoginType] = useState("user"); // Default to "user" login

  const onFinish = (values) => {
    console.log("Success:", { ...values, loginType }); // Include the login type in the console log
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleTabChange = (key) => {
    setLoginType(key); // Update state based on selected tab
  };

  return (
    <div className="bg-[#F4F4F4] font-nunito">
      <div className="text-center lg:flex md:flex flex-row justify-center items-center gap-6 w-fit container mx-auto h-full min-h-screen">
        <div className="h-full w-full relative">
          <img className="w-full h-full mt-10" src={logoimage} alt="sideimage" />
          <div className="absolute text-white text-start lg:p-[51px] p-4 bottom-0 left-0">
            <h1 className="lg:text-4xl text-2xl font-bold">
              Listening to your customers is the first step toward innovation
            </h1>
          </div>
        </div>

        <div className="w-full">
          <div className="py-8">
            <h3 className="lg:text-[28px] text-xl font-bold text-[#424242]">Welcome to</h3>
            <h1 className="lg:text-4xl text-2xl font-extrabold text-[#424242]">OPINYOO</h1>
            <h1 className="lg:text-4xl text-2xl font-extrabold text-[#424242]">FEEDBACK DEFINED</h1>
          </div>
          <div className="bg-[#FFFFFF] p-4 rounded-lg">
            <div className="py-6">
              <h1 className="text-2xl font-bold mb-4 text-[#424242]">Sign In</h1>
              <h3 className="text-[#424242] text-[12px]">Enter your email & password to access your account</h3>
            </div>

            {/* Tabs for User and Business Login */}
            <Tabs defaultActiveKey="user" onChange={handleTabChange}>
              <Tabs.TabPane  tab="User" key="user"></Tabs.TabPane>
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
                  label={<label htmlFor="password" className="text-sm text-[#424242] font-bold">Password</label>}
                  name="password"
                  rules={[{ required: true, message: "Please input your password!" }]}
                  required={false}
                >
                  <Input.Password
                     prefix={
                      <svg width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 8.5C5.45 8.5 4.97917 8.30417 4.5875 7.9125C4.19583 7.52083 4 7.05 4 6.5C4 5.95 4.19583 5.47917 4.5875 5.0875C4.97917 4.69583 5.45 4.5 6 4.5C6.55 4.5 7.02083 4.69583 7.4125 5.0875C7.80417 5.47917 8 5.95 8 6.5C8 7.05 7.80417 7.52083 7.4125 7.9125C7.02083 8.30417 6.55 8.5 6 8.5ZM6 12.5C4.33333 12.5 2.91667 11.9167 1.75 10.75C0.583333 9.58333 0 8.16667 0 6.5C0 4.83333 0.583333 3.41667 1.75 2.25C2.91667 1.08333 4.33333 0.5 6 0.5C7.11667 0.5 8.12917 0.775 9.0375 1.325C9.94583 1.875 10.6667 2.6 11.2 3.5H20L23 6.5L18.5 11L16.5 9.5L14.5 11L12.375 9.5H11.2C10.6667 10.4 9.94583 11.125 9.0375 11.675C8.12917 12.225 7.11667 12.5 6 12.5ZM6 10.5C6.93333 10.5 7.75417 10.2167 8.4625 9.65C9.17083 9.08333 9.64167 8.36667 9.875 7.5H13L14.45 8.525L16.5 7L18.275 8.375L20.15 6.5L19.15 5.5H9.875C9.64167 4.63333 9.17083 3.91667 8.4625 3.35C7.75417 2.78333 6.93333 2.5 6 2.5C4.9 2.5 3.95833 2.89167 3.175 3.675C2.39167 4.45833 2 5.4 2 6.5C2 7.6 2.39167 8.54167 3.175 9.325C3.95833 10.1083 4.9 10.5 6 10.5Z" fill="#424242"/>
  </svg>
  
                    }
                    className="border bg-[#E9EBF0] p-2 text-[16px] text-[#424242] font-medium hover:bg-[#E9EBF0] focus:border-[#dde2eb]"
                    placeholder="Enter your password"
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
                    Log In
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="lg:flex md:flex flex-row justify-between items-center">
              <p className="text-[14px] text-[#195671] font-semibold  underline pb-4">
                {" "}
                New in Opinyoo? <Link to={"/auth/signup"}>Sign Up</Link>
              </p>
              <Link to={"/auth/forgotpassword"} className="text-[14px] text-[#195671] font-semibold  underline pb-4">
                Forgot password?
              </Link>
            </div>

            <Form.Item>
              <Button
               type="primary"
                  block
                  className="btn-google bg-[#1877F2]   text-[#FFFFFF] text-bold font-semibold p-6 hover:bg-[#1877F2]  border-none shadow-md"
                  style={{ marginBottom: "5px" }}
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_62_749)">
                      <path
                        d="M24.5 12.5C24.5 5.87258 19.1274 0.5 12.5 0.5C5.87258 0.5 0.5 5.87258 0.5 12.5C0.5 18.4895 4.8882 23.454 10.625 24.3542V15.9688H7.57812V12.5H10.625V9.85625C10.625 6.84875 12.4166 5.1875 15.1576 5.1875C16.4701 5.1875 17.8438 5.42188 17.8438 5.42188V8.375H16.3306C14.84 8.375 14.375 9.30008 14.375 10.25V12.5H17.7031L17.1711 15.9688H14.375V24.3542C20.1118 23.454 24.5 18.4895 24.5 12.5Z"
                        fill="#1877F2"
                      />
                      <path
                        d="M17.1711 15.9688L17.7031 12.5H14.375V10.25C14.375 9.30102 14.84 8.375 16.3306 8.375H17.8438V5.42188C17.8438 5.42188 16.4705 5.1875 15.1576 5.1875C12.4166 5.1875 10.625 6.84875 10.625 9.85625V12.5H7.57812V15.9688H10.625V24.3542C11.8674 24.5486 13.1326 24.5486 14.375 24.3542V15.9688H17.1711Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_62_749">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Continue with Facebook
                </Button>
              </Form.Item>
              <Form.Item>
          
                <Button
                  block
                  className="btn-google text-[#424242] text-bold font-semibold p-6 hover:bg-[#E9EBF0]border-[#424242] border-none shadow-md"
                  style={{ marginBottom: "5px" }}
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_62_755)">
                      <path
                        d="M24.2663 12.7764C24.2663 11.9607 24.2001 11.1406 24.059 10.3381H12.7402V14.9591H19.222C18.953 16.4494 18.0888 17.7678 16.8233 18.6056V21.6039H20.6903C22.9611 19.5139 24.2663 16.4274 24.2663 12.7764Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.74 24.5008C15.9764 24.5008 18.7058 23.4382 20.6944 21.6039L16.8274 18.6055C15.7516 19.3375 14.3626 19.752 12.7444 19.752C9.61376 19.752 6.95934 17.6399 6.00693 14.8003H2.01648V17.8912C4.05359 21.9434 8.20278 24.5008 12.74 24.5008Z"
                        fill="#34A853"
                      />
                      <path
                        d="M6.00277 14.8003C5.50011 13.3099 5.50011 11.6961 6.00277 10.2057V7.11481H2.01674C0.314734 10.5056 0.314734 14.5004 2.01674 17.8912L6.00277 14.8003Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M12.74 5.24966C14.4508 5.2232 16.1043 5.86697 17.3433 7.04867L20.7694 3.62262C18.6 1.5855 15.7207 0.465534 12.74 0.500809C8.20277 0.500809 4.05359 3.05822 2.01648 7.11481L6.00252 10.2058C6.95052 7.36173 9.60935 5.24966 12.74 5.24966Z"
                        fill="#EA4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_62_755">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Log in with Google
                </Button>
              </Form.Item>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
