import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ChatBubbleLeftIcon, HomeIcon, TicketIcon, UserIcon, UserGroupIcon, BoltIcon } from '@heroicons/react/20/solid'
import CardMembershipRounded from '@mui/icons-material/CardMembership';
import { Settings, AdminPanelSettings } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function IDLpane() {
    return (
        <>
            <nav className=' z-10 mt-24 h-screen left-0 fixed '>
                <div className='h-screen bg-gray-900 drop-shadow-md rounded'>

                    <ul className=' text-white px-4  cursor-pointer '>
                        <li className=' py-5 border-gray-500 border-b-2'>
                            <Link to="/idunit"><DashboardIcon fontSize='large' className=' pr-3' />
                                VIEW ALL REQUESTS</Link>
                        </li>

                        <li className=' py-5 border-gray-500 border-b-2 ' to="/cardrenewal">
                            <Link to="/approvedcards">
                                <CreditCardIcon fontSize='large' className=' pr-3' />
                                APPROVED REQUESTS
                            </Link>
                        </li>

                        <li className=' py-5 border-gray-500'>
                            <Link to="/rejectedcards">
                                <CardMembershipRounded fontSize='large' className=' pr-2' />
                                REJECTED REQUESTS
                            </Link>
                        </li>
                    </ul>



                    {/* <ul className=' text-white bg-sky-800 bottom-0'>
                        <li className=' py-5 border-gray-500'>
                            <Link to="/">
                                <Settings fontSize='large' className=' pr-2' />
                                PREFEERENCES
                            </Link>
                        </li>
                    </ul> */}

                    {/* LOGOS FOR FAQs OR POSING QUESTIONS */}
                    <div className=' hidden'>
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

            </nav>
        </>
    )
}

export default IDLpane;