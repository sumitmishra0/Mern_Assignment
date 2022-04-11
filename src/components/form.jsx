import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

import "./form.css"
export const Form = () => {

    const { id } = useParams();
    const [data1, setData1] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/data/${id}`).then((res) => {
            setData1(res.data)
        }).catch((err) => {
            console.log(err)
        });
    }, [])


    const [data, setData] = useState({
        name: "",
    })



    const obj = {};
    obj.personalDetails = data;
    obj.data = data1;


 
  

    function postData() {
        axios.post("http://localhost:3002/user", obj)
    }


    function handleChange(e) {
        const { id, value } = e.target
        setData({ ...data, [id]: value })
    }


    return <div className="container1">
        <div className="form">
            <form onSubmit={(e) => {
                e.preventDefault()
                postData()
            }}>
                <input placeholder="name" id="name" onChange={handleChange} />
                <input placeholder="email" id="email" onChange={handleChange} />
                <input type="number" placeholder="mobile no" id="mobile" onChange={handleChange} />
                <input type="text" placeholder="address" id="address" onChange={handleChange} />
                <input type="submit" value="submit"  className="button"/>
            </form>
        </div>

        <div className="userData">
            <img src={data1.image} />
            <h2>{data1.title}</h2>
            <h3>{data1.price}</h3>
            <p>{data1.detail}</p>
        </div>

    </div>
}