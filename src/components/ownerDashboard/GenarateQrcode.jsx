import { Form, Input, Button, Tabs } from "antd";
import { useState } from "react";
import profile from "../../assets/images/ownerprofile.png";
import { Link, useNavigate } from "react-router-dom";

const GenarateQrcode = () => {
    const navigate=useNavigate();
  const onFinish = (values) => {
    console.log("Success:", { ...values }); // Include the login type in the console log
    navigate('/downloadQRcode')

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-[#F4F4F4] font-nunito my-12">
      <div className="text-center  max-w-lg container mx-auto h-full min-h-screen">
        <div className="w-full">
          <div className="bg-[#FFFFFF] p-4 rounded-lg ">
            <div className="h-full w-fit mx-auto relative ">
              <img
                className="w-[14opx] h-[140px] block mx-auto "
                src={profile}
                alt="sideimage"
              />
              <div className="absolute bottom-0 right-0 cursor-pointer">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="17" cy="17" r="17" fill="#E9EBF0" />
                  <path
                    d="M12.243 22.997H8V18.754L19.435 7.319C19.6225 7.13153 19.8768 7.02621 20.142 7.02621C20.4072 7.02621 20.6615 7.13153 20.849 7.319L23.678 10.147C23.771 10.2399 23.8447 10.3502 23.8951 10.4716C23.9454 10.593 23.9713 10.7231 23.9713 10.8545C23.9713 10.9859 23.9454 11.116 23.8951 11.2374C23.8447 11.3588 23.771 11.4691 23.678 11.562L12.243 22.997ZM8 24.997H26V26.997H8V24.997Z"
                    fill="#1F3B6B"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center space-x-4 w-fit mx-auto py-6">
              <strong className="text-[16px] font-bold ">
                Edit Profile
              </strong>
              <p className="text-[16px] font-medium text-[#424242]">
                Generate QR Code
              </p>
            </div>

            <div className="w-full ">
              <Form
                name="profile"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
           

                <Form.Item>
                  <Button
                    style={{ backgroundColor: "#1F3B6B" }}
                    className="text-[#FFFFFF] text-[16px] font-semibold p-6"
                    size="large"
                    type="primary"
                    htmlType="submit"
                    block
                  >
                   Generate
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

export default GenarateQrcode;
