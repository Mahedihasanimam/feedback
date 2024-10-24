import React, { useState, useEffect } from "react";
import TrandingComCard from "./TrandingComCard";
import kfcimg from "../../assets/images/kfc.png";
import burgerking from "../../assets/images/burgerking.png";

const TrendingCompany = () => {
  const trendingData = [
    { id: 1, name: "KFC", location: "Dhaka, Bangladesh", image: kfcimg },
    { id: 2, name: "McDonald's", location: "Chittagong, Bangladesh", image: burgerking },
    { id: 3, name: "KFC", location: "Sylhet, Bangladesh", image: kfcimg },
    { id: 4, name: "McDonald's", location: "Khulna, Bangladesh", image: burgerking },
    { id: 5, name: "KFC", location: "Rajshahi, Bangladesh", image: kfcimg },
    { id: 6, name: "Burger King", location: "Barisal, Bangladesh", image: burgerking },
    { id: 7, name: "KFC", location: "Rangpur, Bangladesh", image: kfcimg },
    { id: 8, name: "Burger King", location: "Cox's Bazar, Bangladesh", image: burgerking },
    { id: 9, name: "KFC", location: "Narayanganj, Bangladesh", image: kfcimg },
    { id: 10, name: "Burger King", location: "Gazipur, Bangladesh", image: burgerking },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (trendingData.length - 4)); // -4 to ensure five items are shown
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="pt-[56px]">
      <h1 className="text-4xl font-bold text-[#000005] text-center pb-[24px]">
        Trending Companies
      </h1>
      <div className="container mx-auto pb-[48px]">
        <div className="overflow-hidden">
          <div
            className="flex space-x-4 md:space-x-6 transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }} // Adjust to show next items
          >
            {trendingData.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"> {/* Responsive widths */}
                <TrandingComCard
                  name={item.name}
                  location={item.location}
                  image={item.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCompany;
