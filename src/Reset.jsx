import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "./CounterSlice";
const Reset = () =>{
    var disptach = useDispatch()

    return(
        <div>
            <button onClick={()=>disptach(reset())}>0</button>
        </div>
    )
}
export default Reset;