
const Button = ({ onClick, children }) => {
  return (
    <button 
        onClick={onClick}
        className='bg-slate-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-slate-600'>
      {children}
    </button>
  )
}
const PlayButton = ({name}) => {
    const handlePlayClick = () => {
        console.log(`Playing ${name}`);
    }
    
    return (
        <Button onClick={handlePlayClick}>
            Play {name}
        </Button>
    )
}
const UploadButton = () => {
  return (
    <Button onClick={() => console.log('Upload button clicked')}>
      Upload
    </Button>
  )
}

const ToolBar = () => {
  return (
    <>
        <PlayButton name='Na Zha' />
        <UploadButton />
    </>
  )
}

export default ToolBar
