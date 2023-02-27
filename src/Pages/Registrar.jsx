import React from 'react'
import RegistrarDash from '../components/RegistrarDash'
import Lpane from '../components/Lpane'
import Navbar from '../components/Navbar'
import Badges from '../components/Badges'




function Registrar() {
    return (
        <>




            <div>
                <div className='grid grid-cols-4'>
                    <div className=' grid'>
                        <Navbar/>
                        <Lpane />
                    </div>

                    <div className=' grid col-start-4 mt-[25%] justify-end'>
                        <Badges />
                    </div>

                    <div className=' grid border rounded-md shadow-md col-start-2 mt-[50%]'>
                        <RegistrarDash image={require("../assets/imgs/AIT_CREST.png")} title="Little Cool" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registrar