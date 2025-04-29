const SearchInput = ({searchTerm, onSearchCar}) => {
    return(
        <>
            <input 
                type="text" 
                value={searchTerm}
                placeholder="Search cars..."
                onChange={(e)=> onSearchCar(e.target.value)}
                className="py-1.5 px-3 border rounded-md w-2/3 md:w-1/2"
            />
        </>
    )
}

export default SearchInput