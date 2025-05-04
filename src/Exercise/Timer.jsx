import {useState} from 'react'

const Timer = () => {
    let [sec, setSec] = useState(0);
    let [min, setMin] = useState(0);
    let [hour, setHour] = useState(0);
    setTimeout(() => {
        setSec(++sec)
        if(sec === 60){
            setSec(0)
            setMin(++min)
            if (min === 60) {
                setMin(0)
                setHour(++hour)
            }
        }
    }
    , 1000);
    let zero = "0";
    return (
        <div className='flex'>
            <p className='text-2xl p-2 border rounded'>
                {hour >= 10 ? hour : zero+hour}
            </p>
            <p className='text-2xl p-2 border rounded'>
                {min >= 10 ? min : zero+min}
            </p>
            <p className='text-2xl p-2 border rounded'>
                {sec >= 10 ? sec : zero+sec}
            </p>
        </div>
    )
}

export default Timer
