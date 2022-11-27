import React from 'react'
import Navbar from '../components/Navbar'
import Lpane from '../components/Lpane'

function Dashboard() {
    return (
        <div className=' fixed'>
            <div>
            <Navbar />
            <Lpane />
            </div>
        
            <div className='mt-[80px] grid grid-cols-6 flex-wrap space'>
                <div className='bg-fuchsia-900 h-40 rounded-lg w-80 mt-[80px] '>
                    <ul>
                        <li>killshot</li>
                        <li>sdjsdjsd</li>
                    </ul>
                </div>
                <div className='bg-fuchsia-900 h-40 rounded-lg w-80  mt-[80px]'>
                    <ul>
                        <li>killshot</li>
                        <li>sdjsdjsd</li>
                    </ul>
                </div>
                <div className='bg-fuchsia-900 h-40 rounded-lg w-80  mt-[80px] justify-around'>
                    <ul>
                        <li>killshot</li>
                        <li>sdjsdjsd</li>
                    </ul>
                </div>
                <div className='bg-fuchsia-900 h-40 rounded-lg w-80 mt-[80px]'>
                    <ul>
                        <li>killshot</li>
                        <li>sdjsdjsd</li>
                    </ul>
                </div>
                <div className='bg-fuchsia-900 h-40 rounded-lg w-80 mt-[80px] justify-between'>
                    <ul>
                        <li>killshot</li>
                        <li>sdjsdjsd</li>
                    </ul>
                </div>
                <div className='bg-fuchsia-900 h-40 rounded-lg w-80 mt-[80px] z-10 '>
                    <ul>
                        <li>killshot</li>
                        <li>sdjsdjsdkkkkkkkkkkkkkkkkkkkkkkkkkkk</li>
                    </ul>
                </div>
                <div className='bg-fuchsia-900 h-40 rounded-lg w-80 mt-[80px] z-10 '>
                    <ul>
                        <li>killshot</li>
                        <li>sdjsadssssssssssssssssssssssssssdjsd</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard