

const Button = () => {
    const handleClick = () => {
        console.log('Button clicked!')
    }

    return (
        <>
            <button onClick={handleClick} className='border p-2 rounded bg-amber-200' >Click Me</button>
        </>
    )
}

export default Button
