import {GoNorthStar} from "react-icons/go"
import { NavLink } from "react-router-dom"

export default function Header(){
    return <div> 
        <div className="header">
           <div className="logo"> 
           <NavLink  to="/home" > <GoNorthStar size="50px" color="white" /> </NavLink> 
           </div>
           <ul>
                <NavLink to="/about"> <li> About </li> </NavLink>
                <NavLink to="/projects"> <li> Projects </li> </NavLink>
                <NavLink to="/contact"> <li> Contact </li> </NavLink>
           </ul>
        </div>

    </div>
}