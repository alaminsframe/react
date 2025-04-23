import SearchInput from "./SearchInput"
import CheckInput from "./CheckInput"

const SearchBar = () => {
  return (
    <div className="flex items-center gap-3 w-full">
      <SearchInput />
      <CheckInput />
    </div>
  )
}

export default SearchBar
