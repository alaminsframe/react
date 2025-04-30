import React from 'react'

const Footer = (data) => {
    
  return (
    <>
        <div className='w-full mx-auto bg-gray-600 py-5 fixed inset-x-0 bottom-0'>
            <p className='text-center text-xl uppercase text-white'>{data.msg}</p>
        </div>
    </>
  )
}

export default Footer
