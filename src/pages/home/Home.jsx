import React, { useState, useEffect } from "react";
import homeimg from "../../assets/images/homeimg.png";
import { Button, Image, Modal } from "antd";
import { Carousel } from "antd";
import TrendingCompany from "./../../components/normaluser/TrendingCompany";
import QrScanner from "qr-scanner";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoStream, setVideoStream] = useState(null);
  const [cameraType, setCameraType] = useState("user"); // 'user' for front, 'environment' for back camera
  const [qrCodeData, setQrCodeData] = useState(null); // State to hold QR code data

  // Function to open the user's camera based on the current camera type
  const openCamera = async () => {
    try {
      // Stop any existing video stream to prevent multiple camera openings
      if (videoStream) {
        videoStream.getTracks().forEach((track) => track.stop());
      }

      // Request access to the camera with the specified camera type
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: cameraType },
      });

      // Update the state with the new stream and open the modal
      setVideoStream(stream);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error accessing the camera: ", error);
      alert("Could not access the camera. Please check your permissions.");
    }
  };

  // Toggle between front and back cameras
  const toggleCamera = () => {
    setCameraType((prevType) => (prevType === "user" ? "environment" : "user"));
  };

  // Stop the video stream and close the modal when the modal is closed
  const handleModalClose = () => {
    if (videoStream) {
      videoStream.getTracks().forEach((track) => track.stop());
    }
    setIsModalOpen(false);
    setQrCodeData(null); // Reset QR code data when closing the modal
  };

  useEffect(() => {
    let qrScanner;

    // Initialize the QR scanner when the camera is opened
    if (videoStream && isModalOpen) {
      const videoElement = document.getElementById("videoElement");
      if (videoElement) {
        videoElement.srcObject = videoStream;
        videoElement.play();

        // Initialize the QR scanner on the video element
        qrScanner = new QrScanner(
          videoElement,
          (result) => {
            console.log("QR Code detected:", result.data);
            setQrCodeData(result.data); // Store the scanned QR code value
          },
          {
            returnDetailedScanResult: true,
          }
        );

        qrScanner.start();
      }
    }

    // Cleanup QR scanner and video stream when closing the modal
    return () => {
      if (qrScanner) {
        qrScanner.stop();
      }
    };
  }, [videoStream, isModalOpen]);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="bg-[#F4F4F4] min-h-screen">
      <div className="container mx-auto">
        <div className="bg-[#FFFFFF] p-2 rounded-lg">
          <Carousel autoplay afterChange={onChange}>
            <div>
              <Image src={homeimg} preview={false} />
            </div>
            <div>
              <Image src={homeimg} preview={false} />
            </div>
            <div>
              <Image src={homeimg} preview={false} />
            </div>
          </Carousel>
          <p className="text-[#424242] text-2xl font-bold my-4 pt-[20px] text-center">
            Give your valuable feedback, so that owner can create a good product
            for you. Give your feedback.
          </p>
          <div className="flex items-center justify-center mt-[64px]">
            <Button
              onClick={openCamera}
              style={{ backgroundColor: "#1F3B6B", height: "56px" }}
              type="primary"
              size="large"
              className="w-1/2 text-[16px] font-semibold"
            >
              Get started
            </Button>
          </div>
        </div>

        <TrendingCompany />

        <Modal
          title="Camera View"
          visible={isModalOpen}
          onCancel={handleModalClose}
          footer={[
            <Button key="toggle" onClick={toggleCamera}>
              Toggle Camera
            </Button>,
            <Button key="close" type="primary" onClick={handleModalClose}>
              Close
            </Button>,
          ]}
        >
          <video
            id="videoElement"
            style={{ width: "100%", borderRadius: "8px" }}
            autoPlay
            muted
          ></video>
          {qrCodeData && (
            <div className="mt-4">
              <p>QR Code Data: {qrCodeData}</p>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Home;
