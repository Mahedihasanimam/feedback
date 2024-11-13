import { Form, Input, Button } from "antd";
import signupimage from "../../../assets/images/verify.png";
import { useNavigate } from "react-router-dom";
const Forgotpassword = () => {
const navigate=useNavigate()
  const onFinish = (values) => {
    console.log("Success:", { ...values }); 
    navigate('/auth/otpverification')
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
            src={signupimage}
            alt="sideimage"
          />
          <div className="absolute text-white text-start lg:p-[51px] p-4 bottom-0 left-0">
            <h1 className="lg:text-4xl text-2xl font-bold">
            Join the Conversation, Influence the Experience
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
              Verify Email!
              </h1>
              <h3 className="text-[#424242] text-[12px]">
              Enter your email which are used to create Opinyoo account
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
                <Form.Item>
                  <Button
                    style={{ backgroundColor: "#1F3B6B" }}
                    className="text-[#FFFFFF] text-[16px] font-semibold p-6"
                    size="large"
                    type="primary"
                    htmlType="submit"
                    block
                  >
                    Verify
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

export default Forgotpassword;
