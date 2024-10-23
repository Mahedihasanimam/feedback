import React from "react";
import { Modal, Image, Input, Button, Radio, Checkbox } from "antd";
import { UserOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons";


const UserInfoModal = ({ visible, onCancel, user }) => {
  return (
    <Modal
    classNames=" text-center mx-auto w-full "
      title={<h1 className="text-[22px] text-[#424242] font-bold py-2 text-center  ">User Information</h1>}
      open={visible}
      onCancel={onCancel}
      footer={[
        <>
        <Button
          key="cancel"
          onClick={onCancel}
          style={{backgroundColor:"#E9EBF0",color:"#D92323"}}
          className=" font-bold text-lg border-none px-6 h-[44px] rounded-md"
        >
          Cancel
        </Button>,
        <Button
        style={{backgroundColor:"#1F3B6B",color:"white"}}
          key="print"
          className="bg-[#1F3B6B] text-white font-bold text-lg border-none px-6 h-[44px] rounded-md"
          onClick={() => window.print()}
        >
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 16C16.7449 16 16.9813 16.09 17.1644 16.2527C17.3474 16.4155 17.4643 16.6397 17.493 16.883L17.5 17V21C17.5 21.2449 17.41 21.4813 17.2473 21.6644C17.0845 21.8474 16.8603 21.9643 16.617 21.993L16.5 22H8.5C8.25507 22 8.01866 21.91 7.83563 21.7473C7.65259 21.5845 7.53566 21.3603 7.507 21.117L7.5 21V17C7.50003 16.7551 7.58996 16.5187 7.75272 16.3356C7.91547 16.1526 8.13975 16.0357 8.383 16.007L8.5 16H16.5ZM19.5 7C20.2956 7 21.0587 7.31607 21.6213 7.87868C22.1839 8.44129 22.5 9.20435 22.5 10V17C22.5 17.5304 22.2893 18.0391 21.9142 18.4142C21.5391 18.7893 21.0304 19 20.5 19H19.5V16C19.5 15.4696 19.2893 14.9609 18.9142 14.5858C18.5391 14.2107 18.0304 14 17.5 14H7.5C6.96957 14 6.46086 14.2107 6.08579 14.5858C5.71071 14.9609 5.5 15.4696 5.5 16V19H4.5C3.96957 19 3.46086 18.7893 3.08579 18.4142C2.71071 18.0391 2.5 17.5304 2.5 17V10C2.5 9.20435 2.81607 8.44129 3.37868 7.87868C3.94129 7.31607 4.70435 7 5.5 7H19.5ZM17.5 9H15.5C15.2451 9.00028 15 9.09788 14.8146 9.27285C14.6293 9.44782 14.5178 9.68695 14.5028 9.94139C14.4879 10.1958 14.5707 10.4464 14.7343 10.6418C14.8979 10.8373 15.1299 10.9629 15.383 10.993L15.5 11H17.5C17.7549 10.9997 18 10.9021 18.1854 10.7272C18.3707 10.5522 18.4822 10.313 18.4972 10.0586C18.5121 9.80416 18.4293 9.55362 18.2657 9.35817C18.1021 9.16271 17.8701 9.0371 17.617 9.007L17.5 9ZM17.5 2C17.7652 2 18.0196 2.10536 18.2071 2.29289C18.3946 2.48043 18.5 2.73478 18.5 3V5H6.5V3C6.5 2.73478 6.60536 2.48043 6.79289 2.29289C6.98043 2.10536 7.23478 2 7.5 2H17.5Z" fill="white"/>
</svg>

          Print
        </Button>,
        </>
      ]}
      className="custom-modal"
      width={800}
    >
      {/* User Information Section */}
      <div className="flex flex-col items-center w-full ">
        <Image
          preview={false}
          src={user.image}
          alt="User Image"
          width={120}
          height={120}
          className="rounded-full "
        />
       <div className="mt-2 max-w-lg ">
       <Input
          size="large"
          placeholder="Name"
          value={user.name}
          prefix={<UserOutlined />}
          className="my-2   border border-[#4C6289]"
         
        />
        <Input
          size="large"
          placeholder="Email"
          value={user.email}
          prefix={<MailOutlined />}
          className="my-2  border border-[#4C6289]"
          
        />
        <Input
          size="large"
          placeholder="Location"
          value={user.location}
          prefix={<EnvironmentOutlined />}
          className="my-2  border border-[#4C6289]"
          
        />
       </div>
      </div>

      {/* Question Section */}
      <div className="my-4  pt-4 ">
        <div className="mb-4 border-2 border-[#627697] rounded-lg px-4 py-4 border-opacity-70">
          <p className="text-lg pb-2 border-b border-[#A5B1C4] text-[#424242] font-medium">What is the capital city of Bangladesh?</p>
          <Radio className="pt-2 text-[#424242] font-medium" checked>Dhaka</Radio>
        </div>
        <div className="mb-4 border-2 border-[#627697] rounded-lg px-4 py-4 border-opacity-70">
          <p className="text-lg pb-2 border-b border-[#A5B1C4] text-[#424242] font-medium">What is the capital city of Bangladesh?</p>
          <Checkbox className="pt-2 text-[#424242] font-medium" checked>Dhaka</Checkbox>
        </div>
        <div className="mb-4 border-2 border-[#627697] rounded-lg px-4 py-4 border-opacity-70">
          <p className="text-lg pb-2 border-b border-[#A5B1C4] text-[#424242] font-medium ">What is the capital city of Bangladesh?</p>
        <div className="flex space-x-3 items-center ">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 8H19M5 12H19M5 16H11" stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        <p className="pt-2 text-[#424242] font-medium">Dhaka is the capital city of Bangladesh. It's a beautiful country I have ever seen. Thank you so much. Freaking nice.</p>
        </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserInfoModal;
