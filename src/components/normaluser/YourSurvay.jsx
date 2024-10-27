import React from 'react';
import ListCard from './ListCard';
import profilimage from '../../assets/images/ownerprofile.png'
import NotificationItem from './NotificationItem';
import { BiLeftArrow } from 'react-icons/bi';
import { LeftOutlined } from '@ant-design/icons';
import Survayitem from './Survayitem';


const YourSurvay = () => {

    const notificationdata=[
        {
          "id": 1,
          "title": "You submit your feedback to bdcallingit.ltd",
          "date": "10/12/2024",
          "image": profilimage,
          "ispending":true
        },
        {
          "id": 2,
          "title": "You submit your feedback to bdcallingit.ltd",
          "date": "10/12/2024",
          "image": profilimage,
          "ispending":true
        },
        {
          "id": 3,
          "title": "You submit your feedback to bdcallingit.ltd",
          "date": "10/12/2024",
          "image": profilimage
        },
        {
          "id": 4,
          "title": "You submit your feedback to bdcallingit.ltd",
          "date": "10/12/2024",
          "image": profilimage
        },
        {
          "id": 5,
          "title": "You submit your feedback to bdcallingit.ltd",
          "date": "10/12/2024",
          "image": profilimage
        },
        {
          "id": 6,
          "title": "You submit your feedback to bdcallingit.ltd",
          "date": "10/12/2024",
          "image": profilimage
        },
        {
          "id": 7,
          "title": "You submit your feedback to bdcallingit.ltd",
          "date": "10/12/2024",
          "image": profilimage
        },
        {
          "id": 8,
          "title": "You submit your feedback to bdcallingit.ltd",
          "date": "10/12/2024",
          "image": profilimage
        }
      ]
      
    return (
        <div className='bg-[#F4F4F4] min-h-screen p-2 mb-12'>
            <div className="container mx-auto">
            <h1 onClick={()=>window.history.back()} className='text-2xl font-bold text-[#424242] py-[24px] cursor-pointer w-fit '> <LeftOutlined /> <span>Your Survey</span></h1>
           <div className='space-y-4'>
           {
                notificationdata.map(company=><Survayitem key={company.id} title={company.title} date={company.date} ispending={company.ispending} id={company.id} image={company.image} />)
            }
           </div>
            </div>
        </div>
    );
};

export default YourSurvay;