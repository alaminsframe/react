import { useState } from "react";

const Register = () => {
     const [query, setQuery] = useState("");

     const handleSubmit = (event) => {
        
        event.preventDefault();
        console.log(event.target.textInput.value);
        setQuery("")
     };

     return (
          <form onSubmit={handleSubmit}>
               <input
                    type="text"
                    name="textInput"
                    value={query}
                    onChange={((event) => setQuery(event.target.value))}
                    className="border-2 border-slate-500 rounded-md px-4 py-2"
                    placeholder="Enter something..."
               />
               <button 
                    type="submit" 
                    className="bg-slate-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-slate-600 ml-2"
                    >
                    Submit
               </button>
          </form>
     );
};

export default Register;