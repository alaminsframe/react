import React from 'react'
const Button = ({onClick, children}) => {

    return (
        <button 
            onClick={onClick}
            className='bg-slate-500 text-white p-2 rounded-md'>
            {children}
        </button>
    )
}

const Bibbling = () => {
    const handleClick = (e) => {
        e.stopPropagation();
        console.log('Up child');
    } 
    return (
        <div 
            onClick={() => console.log('parent')}
            className='flex flex-col gap-2 bg-slate-800 p-4 rounded-md'>
            <Button 
            onClick={handleClick} 
            className='bg-slate-500 text-white p-2 rounded-md'>
                Up
            </Button>
            <Button 
            onClick={(e) => {
                e.stopPropagation();
                console.log('Down child');
            }
            } 
            className='bg-slate-500 text-white p-2 rounded-md'>
                Down
            </Button>
        </div>
    )
}

export default Bibbling
