import Header from  "./Header"
import CarsList from "./CarsList"
import SearchBar from "./SearchBar"
import { useState } from "react"

const Cars = () => {
  const CARS = [   
    { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
    { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
    { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
    { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
    { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [cars, setCars] = useState(CARS);

  const handleOnSearchPremium = (e) => {
    let check = e.target.checked; 
    if(check){
      setCars(cars.filter( car => car.isPremium))
      console.log(check);
      
      return !check
      
    }
    return cars
  }
  console.log(cars);
  
  
  
  return (
    <div className="max-w-full h-screen mx-auto p-5 sm:p-10 bg-gray-100 space-y-5">
      <Header />
      <SearchBar cars = {cars} searchTerm = {searchTerm} onSearchCar = {setSearchTerm} handleOnSearchPremium={handleOnSearchPremium} />
      <CarsList cars = {cars} searchTerm = {searchTerm} />
    </div>
  )
}

export default Cars
