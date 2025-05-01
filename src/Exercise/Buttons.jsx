
function Button({msg, children}) {

    const handleClick = (event, msg) => {
        console.log(event);
        console.log(msg);
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
