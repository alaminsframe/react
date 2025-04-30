import CardDetails from "./CardDetails"

const Cards = ({persons}) => {
  return (
    <div className="flex flex-wrap gap-5 max-w-7xl mx-auto mt-20 px-10">
        {persons.map( (data,index) => {
        return <CardDetails key={index} data = {data} />
        } )}
    </div>
  )
}

export default Cards
