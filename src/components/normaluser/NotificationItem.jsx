import { Button, Image } from "antd";
import React from "react";
import profilimage from "../../assets/images/ownerprofile.png";
import Title from "antd/es/skeleton/Title";
const NotificationItem = ({ title, date,ispending }) => {
  return (
    <div className="bg-white p-2 rounded-lg flex items-center justify-between ">
      <div className="flex items-center justify-between gap-2">
        <div>
          <Image
            height={48}
            width={48}
            src={profilimage}
            preview={false}
            className="rounded-full w-16 h-16"
          />
        </div>
        <div>
          <h3 className="text-[16px] font-medium text-[#000000]">{title}</h3>
          <p className="text-[14px] text-[#000000] font-normal">{date}</p>
        </div>
      </div>
      <div>
       {
        ispending &&  <svg
        width="8"
        height="9"
        viewBox="0 0 8 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4" cy="4.5" r="4" fill="#D92323" />
      </svg>
       }
      </div>
    </div>
  );
};

export default NotificationItem;
