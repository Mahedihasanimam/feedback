import { Button, Image } from "antd";
import { Link } from "react-router-dom";


const TrandingComCard = ({ name, location, image }) => {
  return  (
    <div className="bg-gradient-to-b from-[#E9EBF0] to-[#FFFFFF] rounded-lg p-4 text-center w-full max-w-[283px]">
      <Image src={image} preview={false} className="w-20 h-20 mx-auto " />
      <h3 className="text-[16px] text-[#000000] font-bold py-2">{name}</h3>
      <p className="text-xs flex space-x-2 items-center justify-center font-medium text-[#424242]">
        <svg
          width="11"
          height="14"
          viewBox="0 0 11 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.50008 0.333008C2.56675 0.333008 0.166748 2.73301 0.166748 5.66634C0.166748 9.26634 4.83341 13.333 5.03341 13.533C5.16675 13.5997 5.36675 13.6663 5.50008 13.6663C5.63341 13.6663 5.83341 13.5997 5.96675 13.533C6.16675 13.333 10.8334 9.26634 10.8334 5.66634C10.8334 2.73301 8.43341 0.333008 5.50008 0.333008ZM5.50008 12.133C4.10008 10.7997 1.50008 7.93301 1.50008 5.66634C1.50008 3.46634 3.30008 1.66634 5.50008 1.66634C7.70008 1.66634 9.50008 3.46634 9.50008 5.66634C9.50008 7.86634 6.90008 10.7997 5.50008 12.133ZM5.50008 2.99967C4.03341 2.99967 2.83341 4.19967 2.83341 5.66634C2.83341 7.13301 4.03341 8.33301 5.50008 8.33301C6.96675 8.33301 8.16675 7.13301 8.16675 5.66634C8.16675 4.19967 6.96675 2.99967 5.50008 2.99967ZM5.50008 6.99967C4.76675 6.99967 4.16675 6.39967 4.16675 5.66634C4.16675 4.93301 4.76675 4.33301 5.50008 4.33301C6.23341 4.33301 6.83341 4.93301 6.83341 5.66634C6.83341 6.39967 6.23341 6.99967 5.50008 6.99967Z"
            fill="#424242"
          />
        </svg>
        <span>{location}</span>
      </p>
    <Link to={'/giverespons'}>
    <Button
        style={{ backgroundColor: "#1F3B6B", height: "42px",  }}
        type="primary"
        className="mt-4 text-white text-sm font-semibold rounded-lg"
      >
        Give response
      </Button>
    </Link>
    </div>
  );
};

export default TrandingComCard;
