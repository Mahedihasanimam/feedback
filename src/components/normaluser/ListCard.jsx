import { Button, Image } from 'antd';
import React from 'react';
import profilimage from '../../assets/images/ownerprofile.png'
import { Link } from 'react-router-dom';
const ListCard = () => {
    return (
       
            <div className='bg-white p-2 rounded-lg flex items-center justify-between'>
           <div className='flex items-center justify-between gap-2'>
           <div>
                <Image height={48} width={48} src={profilimage} preview={false} className='rounded-full w-16 h-16' />
            </div>
            <div>
                <h3 className='text-[16px] font-medium text-[#000000]'>bdCallingLTD</h3>
                <p className='text-[14px] text-[#000000] font-normal'>Banasree, Dhaka, Bangladesh</p>
            </div>
           </div>
            <Link to={'/companylistdetials'}>
                <Button style={{color:'#fff', backgroundColor:'#1F3B6B'}} type='primary' size='large'>View</Button>
            </Link>
        </div>
    );
};

export default ListCard;