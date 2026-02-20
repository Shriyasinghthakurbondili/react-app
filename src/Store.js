import {configureStore} from "@reduxjs/toolkit"
import counterReduce from "./CounterSlice"

export var Store = configureStore({
    reducer : {
        count : counterReduce
    }
})