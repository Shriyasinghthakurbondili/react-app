import React from "react";
import {useSelector} from "react-redux"
const Count = () =>{
    var count = useSelector((state)=>state.count.value)

    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}
export default Count;