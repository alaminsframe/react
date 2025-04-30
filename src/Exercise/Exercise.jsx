import React from 'react'

const Exercise = ({name}) => {
  console.log(name);
  
  return (
    <div className=''>
      <h1 className='text-lg text-white capitalize'>{name}</h1>
    </div>
  )
}

export default Exercise
