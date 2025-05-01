

const Button = () => {
    const handleClick = () => {
        console.log('Button clicked!')
    }

    return (
        <div>
            <button onClick={handleClick} className='border p-2 rounded bg-amber-200' >Click Me</button>
        </div>
    )
}

export default Button
