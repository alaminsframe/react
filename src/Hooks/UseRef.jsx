import { useRef } from 'react'

const UseRef = () => {
  let heading = useRef()
  const handleChange = ()=>{
    heading.current.innerText === 'Hi this is useRef'?
    heading.current.innerText = 'Hello this is heading':
    heading.current.innerText = 'Hi this is useRef'
    console.log(heading.current);
    
  }
  return (
    <div>
      <h1 ref={heading}>Hello this is heading </h1>
      <button onClick={handleChange} className='rounded p-1 bg-cyan-700'>change</button>
    </div>
  )
}

export default UseRef
