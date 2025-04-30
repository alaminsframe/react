
const CheckInput = ({handleOnSearchPremium}) => {
  return (
    <>
      <input 
        type="checkbox"
        onChange={handleOnSearchPremium}
        className="h-7 w-7 appearance-none border-2 rounded checked:bg-blue-400"
       />
       <span className="font-bold text-sm md:text-base">Show Premium Only</span>
    </>
  )
}

export default CheckInput
