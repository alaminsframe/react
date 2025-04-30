import { useState } from 'react'
import Banner from "./Banner"
import Exercise from "./Exercise/Exercise"
import User from './Exercise/User';
import Wrapper from './Exercise/Wrapper';
function App() {
const [student, setStudent] = useState();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-700 gap-2">
      <div>
        <Wrapper>
          <h1 className='text-2xl text-white'>Hello world</h1>
          <p className='text-lg text-white'>This is a simple react app</p>
        </Wrapper>

        {/* <User name='jahan' />
        {student && <Exercise name= {student} /> }
        <button onClick={()=>setStudent('world hello')}>update name</button>
        <Banner /> */}
      </div>
      
    </div>
  )
}

export default App
