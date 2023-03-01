import React from 'react'

const RegDash = ({ image, title, badge }) => {
    return (
        <>
            <div className=' bg-white shadow-xl rounded-xl p-6 grid h-auto place-items-center md:max-w-md lg:max-w-lg sm:max-w-sm'>
                <div>
                    <img className='rounded-lg' src={image} alt='logos' style={{ width: "100%", maxHeight: '150px', maxWidth: '250px' }} />
                </div>

                <div className=' text-center'>
                    <h2>{title}</h2>
                </div>

                <div>{badge}</div>
            </div>
        </>
    )
}

export default RegDash