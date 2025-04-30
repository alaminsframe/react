import SearchInput from "./SearchInput"
import CheckInput from "./CheckInput"

const SearchBar = ({searchTerm, onSearchCar, handleOnSearchPremium}) => {
  return (
    <>
      <form className="flex items-center gap-3 w-full">
        <SearchInput searchTerm = {searchTerm} onSearchCar = {onSearchCar} />
        <CheckInput handleOnSearchPremium={handleOnSearchPremium} />
      </form>
    </>
  )
}

export default SearchBar
