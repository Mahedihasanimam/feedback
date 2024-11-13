import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import signupimage from "../../../assets/images/verify.png";

const OtpVerification = ({ onFinish }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // Handle form finish with OTP values
  const handleFinish = () => {
    const otpValue = otp.join("");
    console.log("Success:", { otp: otpValue });
    
    // Redirect if OTP is complete
    if (otpValue.length === 4) {
      if (onFinish) {
        onFinish({ otp: otpValue });
      }
      navigate("/auth/createnewpassword");
      form.resetFields();
    } else {
      console.log("OTP not complete");
    }
  };

  // Handle form submission failure
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // Handle input changes for OTP digits
  const handleChange = (value, index) => {
    const otpCopy = [...otp];
    otpCopy[index] = value;
    setOtp(otpCopy);

    // Automatically focus on the next input field if the current field has a value
    if (value.length === 1 && index < otp.length - 1) {
      document.getElementById(`otpInput-${index + 1}`).focus();
    }
  };

  return (
    <div className="bg-[#F4F4F4] font-nunito">
      <div className="text-center lg:flex md:flex flex-row justify-center items-center gap-6 w-fit container mx-auto h-full min-h-screen">
        <div className="h-full w-full relative">
          <img className="w-full h-full mt-10" src={signupimage} alt="sideimage" />
          <div className="absolute text-white text-start lg:p-[51px] p-4 bottom-0 left-0">
            <h1 className="lg:text-4xl text-2xl font-bold">Join the Conversation, Influence the Experience</h1>
          </div>
        </div>

        <div className="w-full">
          <div className="py-8">
            <h3 className="lg:text-[28px] text-xl font-bold text-[#424242]">Welcome to</h3>
            <h1 className="lg:text-4xl text-2xl font-extrabold text-[#424242]">OPLNYOO</h1>
            <h1 className="lg:text-4xl text-2xl font-extrabold text-[#424242]">FEEDBACK DEFINED</h1>
          </div>
          <div className="bg-[#FFFFFF] p-4 rounded-lg">
            <div className="py-6">
              <h1 className="text-2xl font-bold mb-4 text-[#424242]">Verify Email!</h1>
              <h3 className="text-[#424242] text-[12px]">Enter your email which is used to create an Opinyoo account</h3>
            </div>

            <div className="w-full">
              <Form
                layout="vertical"
                onFinish={handleFinish}
                onFinishFailed={onFinishFailed}
                form={form}
                className="mx-auto"
              >
                {/* OTP Input */}
                <div style={{ maxWidth: "250px", width: "100%" }} className="flex justify-between mx-auto">
                  {otp.map((digit, index) => (
                    <Input
                      placeholder="0"
                      className="text-[#D0D5DD]"
                      key={index}
                      id={`otpInput-${index}`}
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(e.target.value, index)}
                      style={{
                        width: "50px",
                        height: "50px",
                        textAlign: "center",
                        fontSize: "24px",
                      }}
                    />
                  ))}
                </div>

                <p className="text-[14px] text-[#1F3B6B] font-semibold py-4">
                  Didn't get the code? <Link className="text-[#000000]" to="#">Send again</Link>
                </p>

                <Form.Item className="pt-6">
                  <Button
                    className="text-[#FFFFFF] text-[16px] font-semibold p-6"
                    size="large"
                    type="primary"
                    style={{ backgroundColor: "#1F3B6B", color: "white" }}
                    htmlType="submit"
                    block
                  >
                    Submit
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

export default OtpVerification;
