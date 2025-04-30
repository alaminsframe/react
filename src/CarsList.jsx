import CarsDetails from "./CarsDetails"

const CarsList = ({cars, searchTerm}) => {
  const carlist = []
  cars.forEach( (car)=>{
    if(car.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1){
      return;
    }
    carlist.push( <CarsDetails key= {car.id} car={car} /> )

  })
  
  return(
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      {carlist}
    </div>
  )

}

export default CarsList
