import React from 'react'

const ServiceContent = (props) => {
    const HomeOutlinedIcon = props.icon
  return (
    <div className='flex justify-between flex-1 mx-1'>
        <div className='text-center p-3 w-9 h-9 mr-3 h-16 w-16 border border-sky-600 bg-sky-600 hover:bg-white hover:border-sky-600 text-white hover:text-sky-600 text-6xl flex justify-center items-center' style={{borderRadius:'50%'}}>
            <HomeOutlinedIcon className='' />
        </div>
        <div className='p-2'>
            <h2 className='text-lg mb-2 font-bold text-center'>{props.title}</h2>
            <p className='text-justify'>{props.text}</p>
        </div>
    </div>
  )
}

export default ServiceContent