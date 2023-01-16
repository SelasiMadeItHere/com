import React from 'react';
// import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
// import {useNavigate} from "react-router-dom"

const Dashcards = ({ image, name, button, button2}) => {
    return (
        <>
            <div className=' bg-white shadow-xl rounded-xl p-6 grid mx-3 h-auto place-items-center md:max-w-md lg:max-w-lg sm:max-w-sm'>
                <div className=' place-items-center'>
                    <img className=' rounded-lg' src={image} style={{ width: "100%", maxHeight: 120, maxWidth: 180 }} alt='holder' />
                </div>
                
                <div className='text-center'>
                    <h2>{name}</h2>
                    <Button className='mt-7 gap-3' variant="contained">{button}</Button>
                    {/* <Button className='mt-7' variant="contained">{button2}</Button> */}
                </div>
            </div>
        </>
    )
}

export default Dashcards;