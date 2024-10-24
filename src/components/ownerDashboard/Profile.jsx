import { Form, Input, Button } from "antd";
import profile from "../../assets/images/ownerprofile.png";
import { Link } from "react-router-dom";

const Profile = () => {
  const onFinish = (values) => {
    console.log("Success:", { ...values }); // Include the login type in the console log
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-[#F4F4F4] font-nunito">
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
              <strong className="text-[16px] font-bold text-[#1F3B6B]">
                Edit Profile
              </strong>
              <Link to={'/dashboard/genareteqrcode'} className="text-[16px] font-medium text-[#424242]">
                Generate QR Code
              </Link>
            </div>

            <div className="w-full ">
              <Form
                name="profile"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label={
                    <label
                      htmlFor="username"
                      className="text-sm text-[#424242] font-bold"
                    >
                      Username
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
                    value={"Lalamove"}
                    disabled
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
                      htmlFor="address"
                      className="text-sm text-[#424242] font-bold"
                    >
                      Address
                    </label>
                  }
                  name="address"
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
                    value={"Dhaka, Bangladesh"}
                    disabled
                    prefix={
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2.5C7.6 2.5 4 6.1 4 10.5C4 15.9 11 22 11.3 22.3C11.5 22.4 11.8 22.5 12 22.5C12.2 22.5 12.5 22.4 12.7 22.3C13 22 20 15.9 20 10.5C20 6.1 16.4 2.5 12 2.5ZM12 20.2C9.9 18.2 6 13.9 6 10.5C6 7.2 8.7 4.5 12 4.5C15.3 4.5 18 7.2 18 10.5C18 13.8 14.1 18.2 12 20.2ZM12 6.5C9.8 6.5 8 8.3 8 10.5C8 12.7 9.8 14.5 12 14.5C14.2 14.5 16 12.7 16 10.5C16 8.3 14.2 6.5 12 6.5ZM12 12.5C10.9 12.5 10 11.6 10 10.5C10 9.4 10.9 8.5 12 8.5C13.1 8.5 14 9.4 14 10.5C14 11.6 13.1 12.5 12 12.5Z"
                          fill="#424242"
                        />
                      </svg>
                    }
                    className="border bg-[#E9EBF0] p-2 text-[16px] text-[#424242] font-medium hover:bg-[#E9EBF0] focus:border-[#dde2eb]"
                    placeholder="Enter your location"
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

                <div>
                  <h3 className="text-sm text-[#424242] font-bold text-start">
                    About Company
                  </h3>
                  <div className="bg-[#E9EBF0] text-[#424242] p-4 rounded-lg w-full mb-4 mt-2">
                    <p className="flex items-center gap-4 text-[14px] font-medium text-start">
                    
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 16H12V14H4V16ZM4 12H12V10H4V12ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H10L16 6V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 7V2H2V18H14V7H9Z" fill="#424242"/>
</svg>

                    Software Solution Company. Stablished in 2013 in a drawing house. 
                    </p>
                  </div>
                </div>

                <Form.Item>
                  <Button
                    style={{ backgroundColor: "#1F3B6B" }}
                    className="text-[#FFFFFF] text-[16px] font-semibold p-6"
                    size="large"
                    type="primary"
                    htmlType="submit"
                    block
                  >
                    Update
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

export default Profile;
