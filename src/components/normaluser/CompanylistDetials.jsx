import React from "react";
import imageone from "../../assets/images/ownerprofile.png";
import { Image } from "antd";
import { Form, Input, Button, Select, Radio } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Option } = Select;
const CompanylistDetials = () => {
  const [sections, setSections] = useState([
    {
      id: Date.now(),
      type: "Multiple choice",
      options: ["Dhaka", "Borishal", "Khulna"],
    },
  ]);



  const handleOptionChange = (id, index, newValue) => {
    setSections(
      sections.map((section) =>
        section.id === id
          ? {
              ...section,
              options: section.options.map((opt, optIndex) =>
                optIndex === index ? newValue : opt
              ),
            }
          : section
      )
    );
  };

  const deleteOption = (id, index) => {
    setSections(
      sections.map((section) =>
        section.id === id
          ? {
              ...section,
              options: section.options.filter(
                (_, optIndex) => optIndex !== index
              ),
            }
          : section
      )
    );
  };
  return (
    <div>
      <div className="bg-[#F4F4F4] min-h-screen py-8">
        <div className="container mx-auto">
          <div className="bg-white p-4 rounded-lg">
            <div className="w-full flex items-center justify-center">
              <Image preview={false} src={imageone} />
            </div>
            <div>
              <h3 className="text-[#000000] text-center py-2 text-[24px] font-bold">
                Lalamove
              </h3>
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
                <span>Banasree, Dhaka</span>
              </p>
              <p className="text-[14px] px-2 text-center text-[#000000] font-[400]">
                Lalamove is a logistics and delivery service that connects users
                with local drivers for on-demand delivery. Founded in 2013 in
                Hong Kong, it allows individuals and businesses to request
                transportation for goods via a mobile app or website.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg mb-2 border-t-4 border-[#1F3B6B] mt-6 ">
            <h1 className="text-[#424242] text-[24px] font-bold w-full  pb-2">
            Survey for our new product
            </h1>
            <p className="text-[16px] text-[#424242] font-medium border-b pb-2   ">
            Please fill up this form for make our decision easy & make a good product.
            </p>
            <Input className=" h-[44px]  border-none focus:borderrn-none focus:outline-none focus:shadow-none" />
          </div>


          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white p-4 rounded-lg shadow-lg mb-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[#424242] text-lg font-medium w-full border-b pb-2">
                What is the capital city of Bangladesh?
                </h3>
       
              </div>

             <div className="mb-12">
             {section.type === "Multiple choice" && (
                <Radio.Group className="w-full">
                  {section.options.map((option, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <Input
                        allowClear
                        prefix={
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM3.12276 12C3.12276 16.9028 7.09723 20.8772 12 20.8772C16.9028 20.8772 20.8772 16.9028 20.8772 12C20.8772 7.09723 16.9028 3.12276 12 3.12276C7.09723 3.12276 3.12276 7.09723 3.12276 12Z"
                              fill="#424242"
                            />
                          </svg>
                        }
                        value={option}
                        onChange={(e) =>
                          handleOptionChange(section.id, index, e.target.value)
                        }
                        className="bottom-border-only h-[44px] "
                      />
                    </div>
                  ))}
                </Radio.Group>
              )}
             </div>

              <div className="mb-12">
              <h3 className="text-[#424242] text-lg font-medium w-full border-b pb-2">
                What is the capital city of Bangladesh?
                </h3>
                {section.options.map((option, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <Input
                      prefix={<input type="checkbox" className="mr-2 h-[] " />}
                      value={option}
                      onChange={(e) =>
                        handleOptionChange(section.id, index, e.target.value)
                      }
                      className="mr-2 h-[44px] bottom-border-only text-[#424242] text-[14zpx] font-medium"
                    />
                    <Button
                      type="link"
                      icon={<DeleteOutlined />}
                      onClick={() => deleteOption(section.id, index)}
                    />
                  </div>
                ))}
          
              </div>





              <div className="mb-12">
              <h3 className="text-[#424242] text-lg font-medium w-full border-b pb-2">
                What is the capital city of Bangladesh?
                </h3>
             {section.type === "Multiple choice" && (
                
                <Radio.Group className="w-full">
                  {section.options.map((option, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <Input
                        allowClear
                        prefix={
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM3.12276 12C3.12276 16.9028 7.09723 20.8772 12 20.8772C16.9028 20.8772 20.8772 16.9028 20.8772 12C20.8772 7.09723 16.9028 3.12276 12 3.12276C7.09723 3.12276 3.12276 7.09723 3.12276 12Z"
                              fill="#424242"
                            />
                          </svg>
                        }
                        value={option}
                        onChange={(e) =>
                          handleOptionChange(section.id, index, e.target.value)
                        }
                        className="bottom-border-only h-[44px] "
                      />
                    </div>
                  ))}
                </Radio.Group>
              )}
             </div>




              <div>
                <p className="text-[16px] text-[#424242] font-normal border-b pb-2 mt-4   ">
                  What is the capital city of Bangladesh?
                </p>
                <Input
                  defaultValue={"Dhaka"}
                  prefix={
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1H15M1 5H15M1 9H7"
                        stroke="#424242"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                  className=" h-[44px]  border-none focus:borderrn-none focus:outline-none focus:shadow-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanylistDetials;
