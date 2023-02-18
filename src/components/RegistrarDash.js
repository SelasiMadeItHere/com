import React from 'react'

const RegDash = ({image, title, badge })=>{
    return(
        <>
            <div className=' gap-3 justify-around rounded-md bg-white p-6 '>
                <div className=' place-items-center'>
                    <img className=' rounded-lg text-center' src={image} alt='logos' style={{width:"100%", maxHeight:'120px', maxWidth: '120px'}}/>
                </div>

                <div><h2>{title}</h2></div>

                <div>{badge}</div>
            </div>
        </>
    )
}

export default RegDash