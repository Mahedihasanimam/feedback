import { useState } from "react";
import { Form, Input, Button, Select, Radio } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;

const CreateNewForms = () => {
  const [sections, setSections] = useState([
    {
      id: Date.now(),
      type: "Multiple choice",
      options: ["Option 1", "Option 2", "Option 3"],
    },
  ]);

  const addSection = () => {
    setSections([
      ...sections,
      {
        id: Date.now(),
        type: "Multiple choice",
        options: ["Option 1", "Option 2", "Option 3"],
      },
    ]);
  };

  const deleteSection = (id) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  const handleTypeChange = (value, id) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, type: value } : section
      )
    );
  };

  const addOption = (id) => {
    setSections(
      sections.map((section) =>
        section.id === id
          ? {
              ...section,
              options: [
                ...section.options,
                `Option ${section.options.length + 1}`,
              ],
            }
          : section
      )
    );
  };

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
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white p-4 rounded-lg shadow-lg mb-6 border-t-4 border-[#1F3B6B]">
        <h1 className="text-[#424242] text-[24px] font-bold w-full  pb-2">
          Untitled form
        </h1>
        <p className="text-[16px] text-[#424242] font-medium border-b pb-2   ">
          Form description
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
            How much you like this product?
            </h3>
            <Select
              className="w-[210px] h-[40px] ml-4 text-[#424242] font-bold"
              defaultValue={section.type}
              onChange={(value) => handleTypeChange(value, section.id)}
            >
              <Option
                className="text-[#424242] font-bold"
                value="Multiple choice"
              >
                <div className="flex items-center space-x-4  text-lg font-normal">
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
                    <circle cx="12" cy="12" r="5" fill="#424242" />
                  </svg>
                  Multiple choice
                </div>
              </Option>
              <Option className="text-[#424242] font-bold" value="Check box">
                <div className="flex items-center space-x-4  text-lg font-normal">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0ZM16 2V16H2V2H16ZM7 14L3 10L4.41 8.58L7 11.17L13.59 4.58L15 6"
                      fill="#424242"
                    />
                  </svg>
                  Check box
                </div>
              </Option>
              <Option className="text-[#424242] font-bold" value="Short answer">
                <div className="flex items-center space-x-4  text-lg font-normal">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 8H19M5 12H19M5 16H11"
                      stroke="#424242"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Short answer
                </div>
              </Option>
            </Select>
          </div>

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
          <div className="text-[#424242] font-medium text-[14px] border-b-2 border-[#424242] h-[44px] ">
            <p>
              Add option or{" "}
              <Button
                className="border-none text-[#424242] font-medium text-[14px]"
                onClick={() => addOption(section.id)}
              >
                “Add other”
              </Button>
            </p>
          </div>

          {section.type === "Check box" && (
            <div>
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
              <p>
                Add option or{" "}
                <Button
                  className="border-none text-[#424242] font-medium text-[14px]"
                  onClick={() => addOption(section.id)}
                >
                  “Add other”
                </Button>
              </p>
            </div>
          )}

          {section.type === "Short answer" && (
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
          )}

          <div className="flex items-center justify-end mt-4 w-full">
            <p
              type="primary"
              className="mr-2 cursor-pointer"
              onClick={addSection}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 13.0001H5V11.0001H11V5.00012H13V11.0001H19V13.0001H13V19.0001H11V13.0001Z"
                  fill="#424242"
                />
              </svg>
            </p>
            <Button type="danger" onClick={() => deleteSection(section.id)}>
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 18.0001C2.45 18.0001 1.97933 17.8045 1.588 17.4131C1.19667 17.0218 1.00067 16.5508 1 16.0001V3.00012H0V1.00012H5V0.00012207H11V1.00012H16V3.00012H15V16.0001C15 16.5501 14.8043 17.0211 14.413 17.4131C14.0217 17.8051 13.5507 18.0008 13 18.0001H3ZM5 14.0001H7V5.00012H5V14.0001ZM9 14.0001H11V5.00012H9V14.0001Z"
                  fill="#424242"
                />
              </svg>
            </Button>
          </div>
        </div>
      ))}
      {sections.map((section) => (
        <div
          key={section.id}
          className="bg-white p-4 rounded-lg shadow-lg mb-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[#424242] text-lg font-medium w-full border-b pb-2">
            What is the national game of USA?
            </h3>
            <Select
              className="w-[210px] h-[40px] ml-4 text-[#424242] font-bold"
              defaultValue={section.type}
              onChange={(value) => handleTypeChange(value, section.id)}
            >
              <Option
                className="text-[#424242] font-bold"
                value="Multiple choice"
              >
                <div className="flex items-center space-x-4  text-lg font-normal">
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
                    <circle cx="12" cy="12" r="5" fill="#424242" />
                  </svg>
                  Multiple choice
                </div>
              </Option>
              <Option className="text-[#424242] font-bold" value="Check box">
                <div className="flex items-center space-x-4  text-lg font-normal">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0ZM16 2V16H2V2H16ZM7 14L3 10L4.41 8.58L7 11.17L13.59 4.58L15 6"
                      fill="#424242"
                    />
                  </svg>
                  Check box
                </div>
              </Option>
              <Option className="text-[#424242] font-bold" value="Short answer">
                <div className="flex items-center space-x-4  text-lg font-normal">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 8H19M5 12H19M5 16H11"
                      stroke="#424242"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Short answer
                </div>
              </Option>
            </Select>
          </div>

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
          <div className="text-[#424242] font-medium text-[14px] border-b-2 border-[#424242] h-[44px] ">
            <p>
              Add option or{" "}
              <Button
                className="border-none text-[#424242] font-medium text-[14px]"
                onClick={() => addOption(section.id)}
              >
                “Add other”
              </Button>
            </p>
          </div>

          {section.type === "Check box" && (
            <div>
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
              <p>
                Add option or{" "}
                <Button
                  className="border-none text-[#424242] font-medium text-[14px]"
                  onClick={() => addOption(section.id)}
                >
                  “Add other”
                </Button>
              </p>
            </div>
          )}

          {section.type === "Short answer" && (
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
          )}

          <div className="flex items-center justify-end mt-4 w-full">
            <p
              type="primary"
              className="mr-2 cursor-pointer"
              onClick={addSection}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 13.0001H5V11.0001H11V5.00012H13V11.0001H19V13.0001H13V19.0001H11V13.0001Z"
                  fill="#424242"
                />
              </svg>
            </p>
            <Button type="danger" onClick={() => deleteSection(section.id)}>
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 18.0001C2.45 18.0001 1.97933 17.8045 1.588 17.4131C1.19667 17.0218 1.00067 16.5508 1 16.0001V3.00012H0V1.00012H5V0.00012207H11V1.00012H16V3.00012H15V16.0001C15 16.5501 14.8043 17.0211 14.413 17.4131C14.0217 17.8051 13.5507 18.0008 13 18.0001H3ZM5 14.0001H7V5.00012H5V14.0001ZM9 14.0001H11V5.00012H9V14.0001Z"
                  fill="#424242"
                />
              </svg>
            </Button>
          </div>
        </div>
      ))}
      {sections.map((section) => (
        <div
          key={section.id}
          className="bg-white p-4 rounded-lg shadow-lg mb-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[#424242] text-lg font-medium w-full border-b pb-2">
            What is the national game of Uganda?
            </h3>
            <Select
              className="w-[210px] h-[40px] ml-4 text-[#424242] font-bold"
              defaultValue={section.type}
              onChange={(value) => handleTypeChange(value, section.id)}
            >
              <Option
                className="text-[#424242] font-bold"
                value="Multiple choice"
              >
                <div className="flex items-center space-x-4  text-lg font-normal">
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
                    <circle cx="12" cy="12" r="5" fill="#424242" />
                  </svg>
                  Multiple choice
                </div>
              </Option>
              <Option className="text-[#424242] font-bold" value="Check box">
                <div className="flex items-center space-x-4  text-lg font-normal">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0ZM16 2V16H2V2H16ZM7 14L3 10L4.41 8.58L7 11.17L13.59 4.58L15 6"
                      fill="#424242"
                    />
                  </svg>
                  Check box
                </div>
              </Option>
              <Option className="text-[#424242] font-bold" value="Short answer">
                <div className="flex items-center space-x-4  text-lg font-normal">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 8H19M5 12H19M5 16H11"
                      stroke="#424242"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Short answer
                </div>
              </Option>
            </Select>
          </div>

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
          <div className="text-[#424242] font-medium text-[14px] border-b-2 border-[#424242] h-[44px] ">
            <p>
              Add option or{" "}
              <Button
                className="border-none text-[#424242] font-medium text-[14px]"
                onClick={() => addOption(section.id)}
              >
                “Add other”
              </Button>
            </p>
          </div>

          {section.type === "Check box" && (
            <div>
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
              <p>
                Add option or{" "}
                <Button
                  className="border-none text-[#424242] font-medium text-[14px]"
                  onClick={() => addOption(section.id)}
                >
                  “Add other”
                </Button>
              </p>
            </div>
          )}

          {section.type === "Short answer" && (
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
          )}

          <div className="flex items-center justify-end mt-4 w-full">
            <p
              type="primary"
              className="mr-2 cursor-pointer"
              onClick={addSection}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 13.0001H5V11.0001H11V5.00012H13V11.0001H19V13.0001H13V19.0001H11V13.0001Z"
                  fill="#424242"
                />
              </svg>
            </p>
            <Button type="danger" onClick={() => deleteSection(section.id)}>
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 18.0001C2.45 18.0001 1.97933 17.8045 1.588 17.4131C1.19667 17.0218 1.00067 16.5508 1 16.0001V3.00012H0V1.00012H5V0.00012207H11V1.00012H16V3.00012H15V16.0001C15 16.5501 14.8043 17.0211 14.413 17.4131C14.0217 17.8051 13.5507 18.0008 13 18.0001H3ZM5 14.0001H7V5.00012H5V14.0001ZM9 14.0001H11V5.00012H9V14.0001Z"
                  fill="#424242"
                />
              </svg>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreateNewForms;
