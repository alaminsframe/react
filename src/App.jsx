import React,{ useState } from "react"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Cards from "./components/Cards"

const App = () => {

  const persons = [
    {
      "name": "Alice John",
      "profession": "Software Engineer",
      "image_link": "https://www.w3schools.com/w3images/avatar2.png"
    },
    {
      "name": "Bob Smith",
      "profession": "Graphic Designer",
      "image_link": "https://www.w3schools.com/w3images/avatar1.png"
    },
    {
      "name": "Charlie Brown",
      "profession": "Product Manager",
      "image_link": "https://www.w3schools.com/w3images/avatar6.png"
    },
    {
      "name": "Diana Williams",
      "profession": "Marketing Specialist",
      "image_link": "https://www.w3schools.com/w3images/avatar5.png"
    },
    {
      "name": "Ethan Harris",
      "profession": "Data Scientist",
      "image_link": "https://www.w3schools.com/w3images/avatar4.png"
    }
  ];  

  return (
    <> 
      <div className="">
        <Nav />
        <Cards persons= {persons} />
        <Footer msg="this is footer"/>
      </div>
    </>
  )
}

export default App














// import React,{ useState } from "react"

// function app(){
//   // const [FN, setFN] = useState("hello");
//   // const [LN, setLN] = useState(0);
//   const [userName, setuserName] = useState("");

//   const submitHandler = (e) =>{
//     e.preventDefault()
//     console.log(userName);
//     setuserName("")
    
//   }

//   return <div>
//     {/* <h1 className="text-2xl"> {FN} {LN} </h1>
//     <button onClick={() => setLN(LN+5)} className="bg-blue-500 rounded px-3 py-1 text-white">click to add</button>
//     <br></br>
//     <button onClick={()=> setLN(LN-5)} className="bg-green-500 rounded px-3 py-1 text-white">click to decress</button> */}

//     <div className="m-10">
//       <form onSubmit={(e)=>{submitHandler(e)}} action="" className="flex item-center gap-3">
//         <input
//           value={userName} 
//           onChange={(e)=>setuserName(e.target.value)}
//           type="text" 
//           placeholder="Type here"
//           className="px-2 py-4 rounded text-xl text-black"
//         />
//         <button className="p-3 py-4 bg-green-500 uppercase text-white rounded cursor-pointer">submit</button>
//       </form>
//       <h1>{userName}</h1>
//     </div>
//   </div>;
// }
// export default app;