import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ChatBubbleLeftIcon, HomeIcon, TicketIcon, UserIcon, UserGroupIcon, BoltIcon } from '@heroicons/react/20/solid'
import CardMembershipRounded from '@mui/icons-material/CardMembership';
import {Settings, AdminPanelSettings} from '@mui/icons-material';
import { Link} from 'react-router-dom';

function Lpane() {
    return (
        <>
            <div className=' z-10 mt-[40px] h-screen left-0 fixed'>
                <div className=' bg-sky-800 h-screen'>
                    <ul className=' text-white px-4  cursor-pointer '>
                        <li className=' py-5 border-gray-500 border-b-2'>
                            <Link to="/dashboard"><DashboardIcon fontSize='large' className=' pr-3' />
                                DASHBOARD</Link>
                        </li>

                        <li className=' py-5 border-gray-500 border-b-2 ' to="/cardrenewal">
                            <Link to="/admincardrenewal">
                                <CreditCardIcon fontSize='large' className=' pr-3' />
                                ID CARD RENEWALS
                            </Link>
                        </li>

                        <li className=' py-5 border-gray-500 border-b-2'>
                            <Link to="/transcript">
                                <CardMembershipRounded fontSize='large' className=' pr-2' />
                                TRANSCRIPT APPLICATION
                            </Link>
                        </li>


                        <li className=' py-5 border-gray-500 border-b-2'>
                            <Link to="/certificate"> 
                                <MilitaryTechIcon fontSize='large' className=' pr-3' />
                                CERTIFICATE APPLICATION
                            </Link>
                        </li>

                        <li className=' py-5 border-gray-500 border-b-2'>
                            <Link to="/admindeferment">
                                <ExitToAppIcon fontSize='large' className=' pr-3' />
                                DEFERMENT APPLICATION
                            </Link>
                        </li>

                        <li className=' py-5 border-gray-500 border-b-2'>
                            <Link to="/admindeferment">
                                <AdminPanelSettings fontSize='large' className=' pr-3' />
                                REGISTRAR'S PORTAL
                                </Link>
                        </li>

                        <li className=' py-5 border-gray-500 border-b-2'>
                            <Link to="/admindeferment"> 
                                <ExitToAppIcon fontSize='large' className=' pr-3' />
                                DEFERMENT APPLICATION</Link>
                        </li>

                        <li className=' py-5 border-gray-500 border-b-2'>
                            <Link to="/admindeferment">
                                <Settings fontSize='large' className=' pr-2' />
                                SETTINGS
                            </Link>
                        </li>
                    </ul>

                    {/* LOGOS FOR FAQs OR POSING QUESTIONS */}
                    <div>
                        <ul className=' inline-flex'>
                            <li><ChatBubbleLeftIcon className='text-white w-12' /></li>

                            <li><HomeIcon className='text-white w-12' /></li>
                            <li><TicketIcon className='text-white w-10' /></li>
                            <li><UserIcon className='text-white w-12' /></li>
                            <li><UserGroupIcon className='text-white w-12' /></li>
                            <li><BoltIcon className='text-white w-12' /></li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Lpane