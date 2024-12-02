import logo from "../assets/farhan.jpg"
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
// import {FaSquareXTwitter} from "react-icons/fa6"
// import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center w-[50px] h-[50px]">
        <img className="overflow-hidden rounded-[50%] w-[50px] h-[50px] object-cover object-top" width={70} height={70} src={logo} alt="" />
        {/* <strong className="text-4xl font-light tracking-wide">Fk</strong> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2x">
        <a target="_blank" href="https://www.linkedin.com/in/farhan-k-6b196314b"><FaLinkedin /></a>
        <a target="_blank" href="https://github.com/farhankhan1122"><FaGithub /></a>
        {/* <FaInstagram /> */}
        {/* <FaSquareXTwitter /> */}
      </div>
      </nav>
  )
}

export default Navbar