

const CarsDetails = ({car}) => {

  const labels  = ['Brand', 'Year', 'price', 'Premium']
  return (
    <>
      <div>
        <h3 className="text-xl mb-2 font-bold">{car.title}</h3>
      </div>
      <ul className="">
        <li className="space-x-1.5">
          <span className="font-bold">
            Brand:
          </span>
          <span className="">
            {car.brand}
          </span>
        </li>
        <li className="space-x-1.5">
          <span className="font-bold">
            Year:
          </span>
          <span className="">
            {car.year}
          </span>
        </li>
        <li className="space-x-1.5">
          <span className="font-bold">
            Price:
          </span>
          <span className="">
            {car.price}
          </span>
        </li>
        <li className="space-x-1.5">
          <span className="font-bold">
            Premium:
          </span>
          <span className="">
            {car.isPremium ? 'Yes':'No'}
          </span>
        </li>
      </ul>
    </>
  )
}

export default CarsDetails
