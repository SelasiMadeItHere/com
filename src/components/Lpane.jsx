import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ChatBubbleLeftIcon, HomeIcon, TicketIcon, UserIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import CardMembershipRounded from '@mui/icons-material/CardMembership';

function Lpane() {
    return (
        <>
            <div className='h-full z-10 fixed mt-[80px] grid grid-cols-1 space-x-6 left-0 '>
                <div className=' bg-sky-800 h-full grid-flow-col'>
                    <ul className=' text-white px-4 pt-20'>
                        <li className=' py-5 border-gray-500 border-b-2'><DashboardIcon fontSize='large' className=' pr-3' /> DASHBOARD</li>
                        <li className=' py-5 border-gray-500 border-b-2'><CreditCardIcon fontSize='large' className=' pr-3' /> ID CARD RENEWALS</li>
                        <li className=' py-5 border-gray-500 border-b-2'><CardMembershipRounded fontSize='large' className=' pr-2' /> TRANSCRIPT APPLICATION</li>
                        <li className=' py-5 border-gray-500 border-b-2'> <MilitaryTechIcon fontSize='large' className=' pr-3' /> CERTIFICATE APPLICATION</li>
                        <li className=' py-5 border-gray-500 border-b-2'><ExitToAppIcon fontSize='large' className=' pr-3' /> DEFERMENT APPLICATION</li>
                    </ul>

                    {/* LOGOS FOR FAQs OR POSING QUESTIONS */}
                    <div className='pt-18'>
                        <ul className=' inline-flex mt-28'>
                            <li><ChatBubbleLeftIcon className='text-white w-12' /></li>
                            <li><HomeIcon className='text-white w-12' /></li>
                            <li><TicketIcon className='text-white w-10' /></li>
                            <li><UserIcon className='text-white w-12' /></li>
                            <li><UserGroupIcon className='text-white w-12' /></li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Lpane