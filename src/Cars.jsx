import Header from  "./Header"
import CarsList from "./CarsList"
import SearchBar from "./SearchBar"
import { useState } from "react"

const Cars = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCheck, setSearchCheck] = useState(false);

  const cars = [   
    { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
    { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
    { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
    { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
    { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true },
  ]
  console.log(searchTerm);
  
  return (
    <div className="max-w-full mx-auto p-5 sm:p-10 space-y-5">
      <Header />
      <SearchBar cars = {cars} searchTerm = {searchTerm} onSearchCar = {setSearchTerm} />
      <CarsList cars = {cars} searchTerm = {searchTerm} searchCheck = {searchCheck} />
    </div>
  )
}

export default Cars
