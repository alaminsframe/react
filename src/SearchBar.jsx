import SearchInput from "./SearchInput"
import CheckInput from "./CheckInput"

const SearchBar = ({searchTerm, onSearchCar, cars}) => {
  return (
    <>
      <form className="flex items-center gap-3 w-full">
        <SearchInput searchTerm = {searchTerm} onSearchCar = {onSearchCar} />
        <CheckInput cars = {cars} />
      </form>
    </>
  )
}

export default SearchBar
