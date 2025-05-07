import {useState, useEffect} from 'react'

const UseEffect = () => {
    let [count, setCount] = useState(0);
    useEffect(()=>{
        setTimeout(() => {
            setCount(++count)
        }, 1000)
    })
  return (
    <div>
      <p>I've rendered {count} times.</p>
    </div>
  )
}

export default UseEffect
