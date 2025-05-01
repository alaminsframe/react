
function Button(msg) {

    const handleClick = (event, msg) => {
        console.log(event);
        console.log(msg);
    }

    return (
        <button onClick={(event)=>handleClick(event,msg)} >
            btn
        </button>
    )

}
const Buttons = () => {
  return (
    <div className='flex gap-2'>
        <Button msg='Hello' >
         
        </Button>
        <Button msg='World' >
            
        </Button>
    </div>
  )
}

export default Buttons
