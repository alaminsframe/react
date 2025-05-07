import {useState, useEffect} from 'react'

const UseEffect = () => {
    let [count, setCount] = useState(0);
    const [name, setName] = useState('hello');
    // useEffect(()=>{
    //     setTimeout(() => {
    //         setCount(++count)
    //     }, 1000)
    // })
    useEffect(()=>{
        setTimeout(() => {
            setCount(++count)
        }, 1000)
    }, [name])
  return (
    <div>
      <p>I've rendered {count} times.</p>
      <button onClick={()=>setName('hi')} className='border p-1'>change</button>
    </div>
  )
}

export default UseEffect
