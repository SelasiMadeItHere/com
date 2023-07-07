import { Divider } from '@mui/material';
import React from 'react';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


const ActivityCard = ({ number, text, onClick, Icon })  => {

    return (
        <div onClick={onClick} className="bg-white shadow-sm rounded-xl
         hover:shadow-lg cursor-pointer flex items-center justify-between  py-5 px-10 ">
            <div>
                <Icon className=" text-blue-500"/>
                <h2 className=' text-lg'>{text}</h2>
            </div>
            <Divider variant="middle" orientation="vertical" className=' font-extrabold'/>
            <div>
                <h1 className='text-3xl font-bold'>{number}</h1>
            </div>
        </div>
    )
}

export default ActivityCard;