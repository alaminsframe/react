import React from 'react'

const TextIput = () => {
    const handleChange = (e) => {
        console.log(e.target.valueAsNumber);
        console.log(typeof(e.target.value));
    }
    return (
    <>
        <input 
        type="number" 
        className='border p-2 rounded bg-blue-300'
        placeholder='Type here'
        onChange={handleChange}
        />
    </>
    )
}

export default TextIput
