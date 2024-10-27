import { Button, Image } from "antd";
import React from "react";
import profilimage from "../../assets/images/ownerprofile.png";
import Title from "antd/es/skeleton/Title";
import { Link } from "react-router-dom";
const Survayitem = ({ title, date,ispending,id }) => {
  return (
   <Link to={   `/survaydetails`}>

<div className="bg-white p-2 rounded-lg flex items-center justify-between mb-4 ">
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

    </div>
   </Link>
  );
};

export default Survayitem;
