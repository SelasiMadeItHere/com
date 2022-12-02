import React from 'react'
import Navbar from '../components/Navbar'
import Lpane from '../components/Lpane'
import Dashcards from '../components/Dashcards'


function Dashboard() {
    return (
        // this set of code is for the navigation and left pane
        <div className=' fixed'>
            <div>
                <Navbar />
                <Lpane />
            </div>

            {/* The code below signifies the main page */}
            <div >
                <div className='mt-[80px] grid flex-wrap space ml-80 '>
                    <div className=' mt-10'>
                        <div className='grid grid-cols-3 gap-14'>
                            <Dashcards image={require('../assets/imgs/avatar2.png')} name="ID Renewal System" button="Details >>" className />
                            <Dashcards image={require('../assets/imgs/exams.jpg')} name="Transcript Application System" button="Details >>" className />
                            <Dashcards image={require('../assets/imgs/avatar2.png')} name="Deferment Application System" button="Details >>" className />
                        </div>
                    </div>
                </div>

                <div className=' my-20 mx-96 text-3xl text-blue-700 font-600'>
                    FREQUENTLY ASKED QUESTIONS
                </div>

            </div>
        </div>
    )
}

export default Dashboard