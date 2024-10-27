import React from 'react';
import ListCard from './ListCard';
import profilimage from '../../assets/images/ownerprofile.png'


const CompanyList = () => {

    const companydata=[
        {
          "id": 1,
          "name": "bdCallingLTD",
          "location": "Banasree, Dhaka, Bangladesh",
          "image": profilimage
        },
        {
          "id": 2,
          "name": "TechSolutions",
          "location": "Uttara, Dhaka, Bangladesh",
          "image": profilimage
        },
        {
          "id": 3,
          "name": "CreativeMinds",
          "location": "Gulshan, Dhaka, Bangladesh",
          "image": profilimage
        },
        {
          "id": 4,
          "name": "DigitalBazar",
          "location": "Dhanmondi, Dhaka, Bangladesh",
          "image": profilimage
        },
        {
          "id": 5,
          "name": "InnovativeSoft",
          "location": "Banani, Dhaka, Bangladesh",
          "image": profilimage
        },
        {
          "id": 6,
          "name": "SmartTech Ltd.",
          "location": "Mohakhali, Dhaka, Bangladesh",
          "image": profilimage
        },
        {
          "id": 7,
          "name": "CodeFactory",
          "location": "Mirpur, Dhaka, Bangladesh",
          "image": profilimage
        },
        {
          "id": 8,
          "name": "NextGenIT",
          "location": "Tejgaon, Dhaka, Bangladesh",
          "image": profilimage
        }
      ]
      
    return (
        <div className='bg-[#F4F4F4] min-h-screen p-2 mb-12 '>
            <div className='container mx-auto'>
            <h1 className='text-2xl font-bold text-[#424242] py-[24px] '>Company List</h1>
           <div className='space-y-4'>
           {
                companydata.map(company=><ListCard key={company.id} name={company.name} location={company.location} image={company.image} />)
            }
           </div>
            </div>
        </div>
    );
};

export default CompanyList;