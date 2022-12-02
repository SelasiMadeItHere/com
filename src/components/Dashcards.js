import React from 'react';
// import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
// import {useNavigate} from "react-router-dom"

const Dashcards = ({ image, name, description, button }) => {
    return (
        <>
            <div className=' bg-white shadow-xl rounded-xl px-10 py-10 grid mx-5'>
                <div className=' justify-items-center'>
                    <img className=' rounded-lg w-40 h-20' src={image} alt='holder' />
                </div>
                
                <div className=' text-center justify-items-center mt-[10px]'>
                    <h2>{name}</h2>
                    <Button className='mt-7' variant="contained">{button}</Button>
                </div>
            </div>
        </>
    )
}

export default Dashcards;