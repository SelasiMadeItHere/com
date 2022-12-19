import React from 'react';
// import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
// import {useNavigate} from "react-router-dom"

const Dashcards = ({ image, name, button }) => {
    return (
        <>
            <div className=' bg-white shadow-xl rounded-xl px-6 py-8 grid mx-3 h-60 place-items-center md:w-auto lg:w-auto'>
                <div className=' place-items-center'>
                    <img className=' rounded-lg' src={image} style={{ width: "100%", maxHeight: 120, maxWidth: 180 }} alt='holder' />
                </div>
                
                <div className='mt-[10px]'>
                    <h2>{name}</h2>
                    <Button className='mt-7' variant="contained">{button}</Button>
                </div>
            </div>
        </>
    )
}

export default Dashcards;