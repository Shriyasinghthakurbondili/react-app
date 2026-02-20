import React from "react";
import {useDispatch} from "react-redux"
import {increment} from "./CounterSlice"
const Increment = () =>{
      var disptach = useDispatch()
      return(
        <div>
            <button onClick={()=>disptach(increment())}>+1</button>
        </div>
      )
}
export default Increment;