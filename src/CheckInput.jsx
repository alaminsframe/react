
const CheckInput = ({handleOnSearchPremium}) => {
  return (
    <>
      <input 
        type="checkbox"
        id="premium"
        onChange={handleOnSearchPremium}
        className="h-7 w-7 appearance-none border-2 cursor-pointer rounded checked:bg-blue-400"
       />
       <label htmlFor="premium" className="font-bold text-sm md:text-base cursor-pointer">Show Premium Only</label>
    </>
  )
}

export default CheckInput
