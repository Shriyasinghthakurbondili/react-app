import React from "react";
import { decrement } from "./CounterSlice";
import { useDispatch } from "react-redux";
const Decrement = () =>{
    var disptach = useDispatch()
    return(
        <div>
            <button onClick={()=>disptach(decrement())}>-1</button>
        </div>
    )
}
export default Decrement;