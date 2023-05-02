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
                    <li className="li-list">
                        <div class="dropdown">
                        <button class="dropbtn">Services</button>
                        <div class="dropdown-content li-list">
                            <a href="Guarding">Guarding/Industrial Security</a>
                            <a href="Transportation">Transportation of Cash</a>
                            <a href="Security">Security of Ware Houses</a>
                            <a href="Night">Night Patrol</a>
                            <a href="Electronic">Electronic Security</a>
                            <a href="Equipment">Security Equipment</a>
                            <a href="Installation">Fire safety systems</a>
                            <a href="Private">Private Investigation</a>
                            <a href="Audit">Security audit/consultancy</a>
                            <a href="Staff">Training of Security Staff</a>
                            <a href="Buisness">Business Executive Protection</a>
                            <a href="Event">Events Security</a>
                        </div>
                    </div>
                    </li> 
                    <li className="li-list">
                        <Link to="/training">TRAINING</Link>

                    </li>
                    <li className="li-list">
                        <Link to="/Contact us">CONTACT</Link>
                    </li>
                </ul>
                </div>

               
                
              

            </div>

           

        </>
    )
}

export default Navbar


