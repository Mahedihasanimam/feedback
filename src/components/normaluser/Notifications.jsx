import React from 'react';
import ListCard from './ListCard';
import profilimage from '../../assets/images/ownerprofile.png'
import NotificationItem from './NotificationItem';


const Notifications = () => {

    const notificationdata=[
        {
          "id": 1,
          "title": "Your response delivered Lalamove.",
          "date": "10days ago",
          "image": profilimage,
          "ispending":true
        },
        {
          "id": 2,
          "title": "Your response delivered Lalamove.",
          "date": "10days ago",
          "image": profilimage,
          "ispending":true
        },
        {
          "id": 3,
          "title": "Your response delivered Lalamove.",
          "date": "10days ago",
          "image": profilimage
        },
        {
          "id": 4,
          "title": "Your response delivered Lalamove.",
          "date": "10days ago",
          "image": profilimage
        },
        {
          "id": 5,
          "title": "Your response delivered Lalamove.",
          "date": "10days ago",
          "image": profilimage
        },
        {
          "id": 6,
          "title": "Your response delivered Lalamove.",
          "date": "10days ago",
          "image": profilimage
        },
        {
          "id": 7,
          "title": "Your response delivered Lalamove.",
          "date": "10days ago",
          "image": profilimage
        },
        {
          "id": 8,
          "title": "Your response delivered Lalamove.",
          "date": "10days ago",
          "image": profilimage
        }
      ]
      
    return (
        <div className='bg-[#F4F4F4] min-h-screen p-2 mb-12'>
          <div className='container mx-auto'>
          <h1 className='text-2xl font-bold text-[#424242] py-[24px] '>Notifications</h1>
           <div className='space-y-4'>
           {
                notificationdata.map(company=><NotificationItem key={company.id} title={company.title} date={company.date} ispending={company.ispending} image={company.image} />)
            }
           </div>
          </div>
        </div>
    );
};

export default Notifications;