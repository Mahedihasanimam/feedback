import React, { useState } from "react";
import { Button, Table, Pagination, Image, DatePicker } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";


import imageone from "../../assets/images/otpimg.png";
import UserInfoModal from "./UserInfoModal";
import dayjs from "dayjs";

const Feedbackresult = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [userData, setUserData] = useState([
    {
      key: "1",
      name: "David Via",
      email: "david@example.com",
      image: imageone,
      location: "USA",
    },
    {
      key: "2",
      name: "Lionel Messi",
      email: "messi@example.com",
      image: imageone,
      location: "Melbourne",
    },
    {
      key: "3",
      name: "Paul Pogba",
      email: "pogba@example.com",
      image: imageone,
      location: "USA",
    },
    {
      key: "4",
      name: "Kante",
      email: "kante@example.com",
      image: imageone,
      location: "Melbourne",
    },
    {
      key: "5",
      name: "Neymar Junior",
      email: "neymar@example.com",
      image: imageone,
      location: "Melbourne",
    },
    {
      key: "6",
      name: "Cristiano Ronaldo",
      email: "ronaldo@example.com",
      image: imageone,
      location: "USA",
    },
    {
      key: "7",
      name: "Lukaku",
      email: "lukaku@example.com",
      image: imageone,
      location: "Melbourne",
    },
    {
      key: "8",
      name: "Neymar Junior",
      email: "neymar@example.com",
      image: imageone,
      location: "Melbourne",
    },
    {
      key: "9",
      name: "Cristiano Ronaldo",
      email: "ronaldo@example.com",
      image: imageone,
      location: "USA",
    },
    {
      key: "10",
      name: "Lukaku",
      email: "lukaku@example.com",
      image: imageone,
      location: "Melbourne",
    },
    {
      key: "11",
      name: "Neymar Junior",
      email: "neymar@example.com",
      image: imageone,
      location: "Melbourne",
    },
    {
      key: "12",
      name: "Cristiano Ronaldo",
      email: "ronaldo@example.com",
      image: imageone,
      location: "USA",
    },
    {
      key: "13",
      name: "Lukaku",
      email: "lukaku@example.com",
      image: imageone,
      location: "Melbourne",
    },
    {
      key: "14",
      name: "Neymar Junior",
      email: "neymar@example.com",
      image: imageone,
      location: "Melbourne",
    },
    {
      key: "15",
      name: "Cristiano Ronaldo",
      email: "ronaldo@example.com",
      image: imageone,
      location: "USA",
    },
    {
      key: "16",
      name: "Lukaku",
      email: "lukaku@example.com",
      image: imageone,
      location: "Melbourne",
    },
  ]);

  

  const openModal = (record) => {
    setSelectedUser(record);
    setShowModal(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (record) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedData = userData.filter((user) => user.key !== record.key);
        setUserData(updatedData);

        Swal.fire({
          title: "Deleted!",
          text: "User has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div  className="flex items-center space-x-2 cursor-pointer">
          <Image
            preview={false}
            src={record.image}
            alt="User"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button className="border-none" icon={<EyeOutlined />} onClick={() => openModal(record)} />
          <Button icon={<DeleteOutlined className="text-red-500" />} onClick={() => handleDelete(record)} />
        </div>
      ),
    },
  ];

  const paginatedData = userData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="container mx-auto my-12 p-4 rounded-lg">
     <div className="flex items-center justify-between py-6">
     <h1 className="text-[34px] font-bold">Your form feedbacks</h1>
     <DatePicker
          onChange={(date) => setSelectedDate(date)}
          format="DD MMM YYYY"
          value={selectedDate}
          style={{
            border: '1px solid #1F3B6B',
            backgroundColor: 'transparent',
            color: '#1F3B6B',
            fontWeight: 'bold',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        />
     </div>
  
      <Table
        columns={columns}
        dataSource={paginatedData}
        pagination={false}
        className="custom-table"
        scroll={{ x: "max-content" }}
      />

      <div className="flex justify-center items-center gap-4 mt-8 border-t-2 border-[#424242] p-6 w-full">
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="text-center  mt-2">
            Page {currentPage} of {Math.ceil(userData.length / pageSize)}
          </div>
          <Pagination
            current={currentPage}
            total={userData.length}
            pageSize={pageSize}
            onChange={handlePageChange}
            showSizeChanger={false}
            className="text-center"
          />
        </div>
        <div className="flex justify-end items-center gap-4 w-full">
          <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
            Previous
          </Button>
          <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(userData.length / pageSize)))} >
            Next
          </Button>
        </div>
      </div>

      {selectedUser && (
        <UserInfoModal
          visible={showModal}
          onCancel={() => setShowModal(false)}
          user={selectedUser}
        />
      )}
    </div>
  );
};

export default Feedbackresult;
