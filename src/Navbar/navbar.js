import React from "react";
import { Link } from "react-router-dom";
import './nav.css'


const Navbar = () => {
    return (
        <>
        
            <div className="navTop">
               <div className="rectangle-div" style={{zIndex:'-1'}} ></div>
                <img className="vector-icon" alt="" src="../picture/Vector 1 (1).png" style={{zIndex:'-1'}}  /> 
                <img className="nja-logo-1" alt="" src="../picture/nja logo 1.png" style={{zIndex:'-1'}} />
               <div className="h4"><h4>NJA SECURITY <br/> PVT. LTD</h4> </div>  
                <div className="ul-main-list">
                <ul className="ul-list">
                    <li className="li-list">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="li-list">
                        <Link to="/About us">ABOUT US</Link>
                    </li>
                    <li className="li-list" id='security'>
                    SECURITY SERVICES
                    </li>
                    <li className="li-list">
                        <Link to="/training">TRAINING</Link>

                    </li>
                    <li className="li-list">
                        <Link to="/Contact">CONTACT</Link>
                    </li>
                </ul>
                </div>
                
              

            </div>

           

        </>
    )
}

export default Navbar


