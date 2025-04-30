import { useState } from 'react'
import Banner from "./Banner"
import Exercise from "./Exercise/Exercise"
function App() {
const [student, setStudent] = useState();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-700 gap-2">
      <div>
        {student && <Exercise name= {student} /> }
        <button onClick={()=>setStudent('world hello')}>update name</button>
        {/* <Banner /> */}
      </div>
      
    </div>
  )
}

export default App
