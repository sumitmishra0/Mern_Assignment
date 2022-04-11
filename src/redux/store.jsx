import {createStore} from "redux"
import { Reducer } from "./reducer"

const init = {data:[]}

export const store = createStore(Reducer,init)