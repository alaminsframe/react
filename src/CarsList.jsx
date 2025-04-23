import CarsDetails from "./CarsDetails"

const CarsList = () => {
  const cars = [   
    { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
    { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
    { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
    { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
    { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true },
  ]
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      {
        cars.map( (car) => (
          <li 
            key= {car.id}
            className="shadow border border-gray-200 p-3 rounded-lg"
          >
            <CarsDetails car={car} />
          </li>
        ))
      }
    </ul>
  );
}

export default CarsList
