
function Button({msg, children}) {

    const handleClick = (event, massage) => {
        console.log(event.target);
        console.log(massage);
    }

    return (
        <button onClick={(event)=>handleClick(event,msg)} >
            {children}
        </button>
    )

}
const Buttons = () => {
  return (
    <div className='flex gap-2'>
        <Button msg='Hello' >
         btn1
        </Button>
        <Button msg='World' >
            btn2
        </Button>
    </div>
  )
}

export default Buttons
