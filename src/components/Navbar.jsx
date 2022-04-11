
import {Link} from "react-router-dom"
import "./navbar.css"
export const Navbar = ()=>{
return  <div className="navbar">
<Link to={"/"} style={{color:"white",textDecoration:"none"}}>Home</Link>
</div>
}