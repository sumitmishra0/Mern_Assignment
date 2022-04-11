import { ADD_DATA } from "./action";

export const Reducer = (store,{type,payload}) =>{
    switch(type){
        case ADD_DATA :
            return {...store,data:payload}
            default:
                return store;
    }
}