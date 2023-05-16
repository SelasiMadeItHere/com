import React from 'react'
import Navbar from '../../components/Navbar'
import Lpane from '../../components/Lpane'
import Dashcards from '../../components/Dashcards'
import { Link } from 'react-router-dom';
// import { Button } from '@mui/material';




function Dashboard() {
    return (
        // this set of code is for the navigation and left pane
        <div className=' bg-indigo-100 grid grid-cols-5 grid-flow-row md:h-full lg:h-full'>
            <div>
                <Navbar />
                <Lpane className="col-span-2" />

            </div>

            {/* The code below signifies the main page */}
            <div className='grid lg:grid-cols-3 col-span-4 py-5 mt-28 gap-5'>
                <Link to="/admincardrenewal">
                    <Dashcards image={require("../../assets/imgs/idcards.jpg")} name="ID Card Renewal" button={"VIEW"} />
                </Link>
                <Link to="/admindeferment">
                    <Dashcards image={require("../../assets/imgs/exams.jpg")} name="Deferment Application" button={"VIEW"} />
                </Link>
                <Link to="/admincardrenewal">
                    <Dashcards image={require("../../assets/imgs/Certificate.png")} name="Certificate Application" button={"VIEW"} />
                </Link>
                <Link to="/admintranscript">
                    <Dashcards image={require("../../assets/imgs/apply-paper.jpg")} name="Transcript Application" button={"VIEW"} />
                </Link>
            </div>

            <div className='rounded-md bg-white grid-cols-5 col-start-2 col-span-4 m-11 p-12 text-center'>
                <p className=' lg:text-3xl sm:text-lg'>FREQUENTLY ASKED QUESTIONS</p>

            </div>
        </div>
    )
}

export default Dashboard;