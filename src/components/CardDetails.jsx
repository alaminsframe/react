
const CardDetails = ({data}) => {
    
  return (
   <>
    <div className="">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 bg-gray-100">
                <div className="flex justify-center mb-4">
                <img src={data.image_link} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
                </div>
                <div className="text-center">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">{data.name}</h2>
                <p className="text-sm md:text-base text-gray-600">{data.profession}</p>
                </div>
            </div>
        </div>
    </div>
    

   </>
  )
}

export default CardDetails