import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {ChatBubbleLeftIcon, HomeIcon, TicketIcon,UserIcon, UserGroupIcon} from '@heroicons/react/20/solid'
import CardMembershipRounded from '@mui/icons-material/CardMembership';

function Lpane() {
    return (
        <>
            <div className='h-full z-10 fixed mt-[80px] grid grid-cols-2'>
                <div className=' bg-sky-800 h-full w-full grid-flow-col'>
                    <ul className='text-2xl text-white px-4 pt-20'>
                        <li className=' py-3 border-gray-500 border-b-2'><DashboardIcon fontSize='large' className=' pr-2'/> DASHBOARD</li>
                        <li className=' py-3 border-gray-500 border-b-2'><CreditCardIcon fontSize='large' className=' pr-2'/> ID CARD RENEWALS</li>
                        <li className=' py-3 border-gray-500 border-b-2'><CardMembershipRounded fontSize='large' className=' pr-2'/> TRANSCRIPT APPLICATION</li>
                        <li className=' py-3 border-gray-500 border-b-2'> <MilitaryTechIcon fontSize='large' className=' pr-2'/> CERTIFICATE APPLICATION</li>
                        <li className=' py-3 border-gray-500 border-b-2'><ExitToAppIcon fontSize='large' className=' pr-2'/> DEFERMENT APPLICATION</li>
                    </ul>

                    {/* LOGOS FOR FAQs OR POSING QUESTIONS */}
                    <div className='pt-18'>
                        <ul className=' inline-flex mt-28'>
                            <li><ChatBubbleLeftIcon className='text-white w-12'/></li>
                            <li><HomeIcon className='text-white w-12'/></li>
                            <li><TicketIcon className='text-white w-10'/></li>
                            <li><UserIcon className='text-white w-12'/></li>
                            <li><UserGroupIcon className='text-white w-12'/></li>
                        </ul>
                        
                    </div>
                </div>

                <div className=' text-center h-2/5 bg-zinc-200 m-5 grid w-2/4 rounded-md'>
                    coasld
                    dlskd
                </div>
            </div>
        </>
    )
}

export default Lpane