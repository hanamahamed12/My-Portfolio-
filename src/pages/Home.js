import Header from "../Header"
import Footer from "../Footer"
import { Link } from "react-router-dom"
// import {BsArrowRightShort} from "react-icons/bs"

export default function Home(){
    return <div className="container">
          <Header/>
        <div className="detail">
            <h1 className="title">I'M HIDAYA MOHAMED HASSAN</h1>
           <div className="bio">
           <p>
           Your friendly neighborhood frontend developer, Analysts, 
           and Blockchain futur engneer. I spend my days (and often nights) painting the 
           Internet canvas with <Link to="/projects"><span> Projects </span></Link>
           and lines of code, turning zeroes and ones into immersive, interactive experiences,
            </p> 
            <br></br>
            <p>
            I am creative person, problem solver and not good at communication
            still improving that area. When I'm not crafting beautiful web experiences,
             you can find me reading <a href="https://www.youtube.com/@TheMercifulServant" id="aa"><span>Abdallah Humaid</span></a> or being lost at the world of books and searching 
             new Things. anyway you can   <Link to="/contact" className="homey"> Contact Me </Link>
            </p>
           </div> <br></br> <br></br>
           <Link to="/about" className="homey"> See More About Me </Link>
           
        </div>
        <Footer/>
    </div>
}