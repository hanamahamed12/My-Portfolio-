import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Header />
      <div className="thing">
        <h1 id="titat">About Me.</h1>

        <div className="idk">
          <article>
            <ul>
              <li>
                <p>
                  I am web developer with experience in both frontend development
                  and backend, passion for data managment and developing new
                  ways to model data. 
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <h1 style={{marginBottom:"30px", marginTop:"30px"}}> My Hobbies </h1>
              <p>
              I Love😍 cooking and making alot of delicious dishes. 
              I can say that the kiching's my favored place. 
              Also i love learn and exploring new things that's why i particularly
              love IT industry it makes me fascinated  pretty much about everything. 
              I like reading a lot well that's what i can remember so far.
              </p>
              </li>
            </ul>
            <br></br> <br></br>
          </article>
        </div>
        <Link to="/projects" className="homey">
          Go To Projects{" "}
        </Link>
      </div>
      <Footer />
    </div>
  );
}
