import { useState } from "react";


const Arbeitesklima=()=>{
    let [x,setX] = useState(1)
    return(
        <div className={ `text-3xl text-green-900 w-[40%] border-1 m-auto mt-5 p-5 shadow-2xl rounded-lg `}>
       <h1><h1>{x}</h1> 
        <button onClick={()=>setX(x++)} className="bg-green-500 font-bold px-6 py-1 m-1">+</button>
       <button onClick={()=>setX(x--)} className="bg-green-500 font-bold px-6 py-1 m-1">-</button> <br></br>
       <img src="foto.jpg" className="w-[20rem]"></img>
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Eaque provident quia excepturi, maxime dolorem debitis. Saepe 
     odit amet excepturi ad similique 
    sapiente eum officia illo consequatur! Error quo officia vel?</h1>
        </div>
    )
}

export default Arbeitesklima