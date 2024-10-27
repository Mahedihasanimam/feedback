import { Form, Input, Button, message } from "antd";
import profile from "../../assets/images/ownerprofile.png";
import { Link, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate=useNavigate()
  const onFinish = (values) => {
    console.log("Success:", { ...values }); // Include the login type in the console log
    message.success("Profile updated successfully");
    navigate('/')
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
              <Link to={'/updateuserpass'} className="text-[16px] font-medium text-[#424242]">
                UpdatePassword
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
                    defaultValue={"Lalamove"}
                    
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
                    defaultValue={"Dhaka, Bangladesh"}
                    
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

export default UserProfile;
