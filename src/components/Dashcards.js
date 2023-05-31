import React from 'react';
// import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
// import {useNavigate} from "react-router-dom"

const Dashcards = ({ image, name, button}) => {
    return (
        <>
            <div className=' bg-white shadow-xl rounded-xl py-5 grid h-auto w-[80%] place-items-center md:max-w-md sm:max-w-sm'>
                <div>
                    <img className=' rounded-lg' src={image} style={{ width: "100%", maxHeight: 120, maxWidth: 180 }} alt='holder' />
                </div>
                
                <div className='text-center'>
                    <h2>{name}</h2>
                    <Button className='gap-3 m-6' variant="contained">{button}</Button>
                </div>
            </div>
        </>
    )
}

export default Dashcards;