import { Form, Input, Button, message } from "antd";
import logoimage from "../../../assets/images/loginimage.png"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";
const Login = () => {

const navigate=useNavigate()
  const onFinish = (values) => {
    console.log("Success:", { ...values }); // Include the login type in the console log
    message.success('Successfully created new password')
    navigate('/')

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };



  return (
    <div className="bg-[#F4F4F4] font-nunito">
      <div className="text-center lg:flex md:flex flex-row justify-center items-center gap-6 w-fit container mx-auto h-full min-h-screen">
        <div className="h-full w-full relative">
          <img
            className="w-full h-full mt-10"
            src={logoimage}
            alt="sideimage"
          />
          <div className="absolute text-white text-start lg:p-[51px] p-4 bottom-0 left-0">
            <h1 className="lg:text-4xl text-2xl font-bold">
              Listening to your customers is the first step toward innovation
            </h1>
          </div>
        </div>

        <div className="w-full">
          <div className="py-8">
            <h3 className="lg:text-[28px] text-xl font-bold text-[#424242]">
              Welcome to
            </h3>
            <h1 className="lg:text-4xl text-2xl font-extrabold text-[#424242]">
            OPLNYOO
            </h1>
            <h1 className="lg:text-4xl text-2xl font-extrabold text-[#424242]">
              FEEDBACK DEFINED
            </h1>
          </div>
          <div className="bg-[#FFFFFF] p-4 rounded-lg">
            <div className="py-6">
              <h1 className="text-2xl font-bold mb-4 text-[#424242]">
                Create new password
              </h1>
              <h3 className="text-[#424242] text-[12px]">
                Create new password for Opinyoo sign in account
              </h3>
            </div>

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
                      htmlFor="password"
                      className="text-sm text-[#424242] font-bold"
                    >
                      Confirm Password
                    </label>
                  }
                  name="confirmpassword"
                  rules={[
                    {
                      required: true,
                      message: "Please input your confirm password!",
                    },
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

                <Form.Item>
                  <Button
                    style={{ backgroundColor: "#1F3B6B" }}
                    className="text-[#FFFFFF] text-[16px] font-semibold p-6"
                    size="large"
                    type="primary"
                    htmlType="submit"
                    block
                  >
                    Create
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
