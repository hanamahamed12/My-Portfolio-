
import {GrInstagram} from "react-icons/gr"
import {LiaFacebookF} from "react-icons/lia"
import {RiLinkedinFill} from "react-icons/ri"
import {RxGithubLogo} from "react-icons/rx"




export default function Footer(){

    return <div className="thing">
        <div className="social" >
           <a href="https://www.facebook.com/hana.mahamed.10004cd"> <LiaFacebookF size="19px" /> </a>
           <a href="https://www.linkedin.com/in/hana-mahamed-6b723921a/"> <RiLinkedinFill size="20px" /> </a>
           <a href="https://github.com/hanamahamed12" > <RxGithubLogo size="18px" /> </a>
           <a href="https://www.instagram.com/?hl=en"> <GrInstagram size="18px" /> </a>
        </div>
    </div>
}

