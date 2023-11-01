
import Footer from "../Footer"
import Header from "../Header"
import { Link } from "react-router-dom"
import img1 from '../images/one.png'
import img2 from '../images/two.png'
// import img3 from '../images/three.png'
import img4 from '../images/four.png'


export default function Projects(){
    return <div>
          <Header/>
          <div className="izo">
            <div>
                <h1>Projects.</h1>
            </div>
          <div className="proj">
            <div className="hello">
                <div className="box">
                    <img src={img1} alt="hello" />
                    <button className="but"><a href=" https://hanamahamed12.github.io/Todo-list/">See Live</a> </button>
                </div>
                <div className="box">
                    <img src={img2} alt="hello" />
                    <button className="but"><a href="https://hanamahamed12.github.io/arcade/">See Live</a></button>
                </div>
                {/* <div className="box">
                    <img src={img3} alt="hello"  id="imo"/>
                    <button className="but"><a href=" https://hanamahamed12.github.io/Todo-list/">See Live</a></button>
                </div> */}
                <div className="box">
                    <img src={img4} alt="hello" />
                    <button className="but"><a href="https://hanamahamed12.github.io/Mural/">See Live</a></button>
                </div>
            </div>
           
          </div>
          <Link to="/contact" className="homey">Go To Contact </Link>
          </div>
          <Footer />
</div>

}