import React, {useState} from 'react';

import { Link } from "react-router-dom";

import "./Navbarstyles.css";
import Logo1 from "../assets/beh.png";
import Logo2 from "../assets/bee.png";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import prof from "../assets/n.jpg";
import adb from "../assets/ad.png";

import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className="header">
        <ul className={click ? "nava-menu active" : "nava-menu"}> 
                    <li>
                        <Link  className="shi" to="/share">Share Your Work</Link>
                    </li>  
                    <li>
                        <Link to="/">For You</Link>
                    </li>
                    <li>
                        <Link to="/discover">Discover</Link>
                    </li>
                    <li>
                        <Link to="/live">Livestreams</Link>
                    </li>
                    <li>
                        <Link to="/">Jobs</Link>
                    </li>
        </ul>
         <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20}  style={{color: "#000"}} />) : 
            (<FaBars size={20} style={{color: "#000"}} /> ) }
         </div>
      
        <ul className='hidee'>
               <Link to="/"> <img className='header_log' src={Logo2}  alt="me"/> </Link> 
                <li>
                    <Link to="/message" className='ico'>
                      < SearchRoundedIcon fontSize={"medium"} margin-top={"10px"} />
                    </Link>
                    </li>
                <li>
                    <Link to="/message" className='ico'>
                        < EmailIcon fontSize={"medium"} margin-top={"10px"} />
                    </Link>
                </li>
                <li>
                    <Link to="/message" className='ico'>
                        < NotificationsIcon fontSize={"medium"} margin-top={"10px"} />
                    </Link>
                </li>
        </ul>
       <Link to="/"> <img className='header_logo' src={Logo1}  alt="me"/> </Link> 
            
                <ul className="nav-menu">
                    <li>
                        <Link to="/">For You</Link>
                    </li>
                    <li>
                        <Link to="/discover">Discover</Link>
                    </li>
                    <li>
                        <Link to="/live">Livestreams</Link>
                    </li>
                    <li>
                        <Link to="/">Jobs</Link>
                    </li>
                </ul>
        <div className="header_search">
            <SearchRoundedIcon fontSize={"medium"}  style={{color: "#000", marginRight: "10px", cursor: "pointer", opacity: "0.4"}} />
            <input className='header_input' type="search" placeholder='Search...' ></input>                   
        </div>
                <ul className="lee">
                    <li className='sh'>
                        <Link to="/share"><p>Share Your Work</p></Link>
                    </li>
                    <li>
                        <Link to="/message" className='icc'>
                            < EmailIcon fontSize={"medium"} margin-top={"10px"} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/message" className='icc'>
                            < NotificationsIcon fontSize={"medium"} margin-top={"10px"} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            < img src={prof} alt="yo" className='profimg' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/adobec">
                            < img src={adb} alt="aa" className='header_lo' />
                        </Link>
                    </li>
                </ul>
    </div>
  );
};                        

export default Navbar;