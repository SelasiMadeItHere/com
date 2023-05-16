import React from 'react'
import { Button } from '@mui/material'

const RegDash = ({ image, title, badge, link }) => {
    return (
        <>
            <div className=' bg-white shadow-xl rounded-xl p-6 grid h-auto place-items-center md:max-w-md lg:max-w-lg sm:max-w-sm'>
                <div>
                    <img className='rounded-lg' src={image} alt='logos' style={{ width: "100%", maxHeight: '150px', maxWidth: '250px' }} />
                </div>

                <div className=' text-center'>
                    <h2>{title}</h2>
                </div>

                <div><Button href={link} className='mt-7 gap-3' variant="contained">{badge}</Button></div>
            </div>
        </>
    )
}

export default RegDash