import Header from  "./Header"
import CarsList from "./CarsList"
import SearchBar from "./SearchBar"

const Cars = () => {
  return (
    <div className="max-w-full mx-auto p-5 sm:p-10 space-y-5">
      <Header />
      <SearchBar />
      <CarsList />
    </div>
  )
}

export default Cars
