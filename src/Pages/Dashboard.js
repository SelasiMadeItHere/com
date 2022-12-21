import React from 'react'
import Navbar from '../components/Navbar'
import Lpane from '../components/Lpane'
import Dashcards from '../components/Dashcards'




function Dashboard() {
    return (
        // this set of code is for the navigation and left pane
        <div className=' bg-slate-400 grid grid-cols-5 md:h-full lg:h-screen'>
            <div>
                <Navbar />
                <Lpane className="col-span-2"/>
            </div>

            {/* The code below signifies the main page */}
            <div className='grid lg:grid-cols-3 col-span-4 gap-3 py-3 mt-28'>
                <Dashcards image={require("../assets/imgs/idcards.jpg")} name="ID Card Renewal" button={"EXPLORE"}/>
                <Dashcards image={require("../assets/imgs/exams.jpg")} name="ID Card Renewal" button={"EXPLORE"}/>
                <Dashcards image={require("../assets/imgs/idcards.jpg")} name="ID Card Renewal" button={"EXPLORE"}/>
            </div>
        </div>
    )
}

export default Dashboard;