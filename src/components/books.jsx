import { useEffect} from "react"
import axios from "axios"
import "./book.css"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addData } from "../redux/action"
import { useState } from "react"


export const Books = ()=>{

    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState("");
    const data = useSelector((store)=>(store.data))
    

   
    console.log(data)
    

    function getData(){
        axios.get("http://localhost:3001/data").then((res)=>{
         
            dispatch((addData(res.data)))
        }).catch((err)=>{
            console.log(err)
        })
    }

useEffect(()=>{
    getData()
},[])




    return <div>
<div className="searchContainer">
<input type="searchtext" className="search-box" placeholder="Search"  onChange={event => {setSearchTerm(event.target.value)} }/>
            <button className="search" >Search</button>
</div>

<div className="container">
{data.filter((val) => {
            if(searchTerm === ""){
                return val
            }
            else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
            }
        }).map((e,key) => {
            return (
                <div className="box" key={key}>
                <img src={e.image}/>
                <h2>{e.title}</h2>
                <h3>{e.price}</h3>
                <p>{e.detail}</p>
                <Link to={`/save/${e.id}`}><button>order</button></Link>
                    {/* <p>{val.url}</p>
                    <h3> <span className="title">{val.title}</span> | <span>{val.author}</span> </h3>
                    <p className="description">{val.description}</p>
                    <h3> Creation Date: {val.creation_date}</h3>
                    <h3> Explicit: {val.explicit} Quality:  {val.quality} </h3> */}
                </div>
            )
        } )
        }
</div>



        <div className="container">{data.map((e)=>{
            {/* return <div className="box" key={e.id}>
                <img src={e.image}/>
                <h2>{e.title}</h2>
                <h3>{e.price}</h3>
                <p>{e.detail}</p>
                <Link to={`/save/${e.id}`}><button>order</button></Link>
            </div> */}
        })}</div>
    </div>
}