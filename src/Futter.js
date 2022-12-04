import React from "react";
import { Link } from "react-router-dom";
import './Futter.css'

const Futter = () => {
    
return(
  <div>
    <div class="footer">
      <div class="contain bynow">
      <div class="col imgrs" style={{width: '-54px'}}>
        <ul>
          <div class="mrimg">
              <img class="noxyz" src="../picture/nja logo 1.png" alt="project mehhk imagees" />
              <h2 className="meheak">NJA SECURITY PVT. LTD</h2>
          </div>
        </ul>
      </div>
      <div class="col">
        <h1>USEFULL LINK</h1>
        <ul>
        <a href="/home"><div className="hloarrow"></div><li>HOME</li></a>
        <a href="/home"><div className="hloarrow"></div><li>SECURITY SERVICES</li></a>
        <a href="/home"><div className="hloarrow"></div><li>ABOUT US</li></a>
        <a href="/home"><div className="hloarrow"></div><li>TRAINING</li></a>
        <a href="/home"><div className="hloarrow"></div><li>CONTACT</li></a>
        </ul>
      </div>
      <div class="col hloasu">
        <h1>SECURITY SERVICES</h1>
        <ul>
        <a href="/home"><div className="hloarrow"></div><li  style={{marginBottom: '-4px', width: '110%'}}>Guarding/Industrial Security</li></a>
        <a href="/home"><div className="hloarrow"></div><li  style={{marginBottom: '-4px', width: '110%'}}>Transportation of Cash</li></a>
        <a href="/home"><div className="hloarrow"></div><li  style={{marginBottom: '-4px', width: '110%'}}>Security of Ware Houses</li></a>
        <a href="/home"><div className="hloarrow"></div><li  style={{marginBottom: '-4px', width: '110%'}}>Night Patrol</li></a>
        <a href="/home"><div className="hloarrow"></div><li  style={{marginBottom: '-4px', width: '110%'}}>Electronic Security</li></a>
        <a href="/home"><div className="hloarrow"></div><li  style={{marginBottom: '-4px', width: '110%'}}>Security Equipment</li></a>
        <a href="/home"><div className="hloarrow"></div><li  style={{marginBottom: '-4px', width: '110%'}}>Fire safety systems.</li></a>
        <a href="/home"><div className="hloarrow"></div><li  style={{marginBottom: '-4px', width: '110%'}}>Private Investigation</li></a>
        <a href="/home"><div className="hloarrow"></div><li  style={{marginBottom: '-4px', width: '110%'}}>Security audit/consultancy</li></a>
        <a href="/home"><div className="hloarrow"></div><li  style={{marginBottom: '-4px', width: '110%'}}>Training of Security Staff</li></a>
        <a href="/home"><div className="hloarrow"></div><li  style={{marginBottom: '-4px', width: '110%'}}>Business Executive Protection</li></a>
        <a href="/home"><div className="hloarrow"></div><li  style={{marginBottom: '-4px', width: '110%'}}>Events Security</li></a>
          
        </ul>
      </div>
      <div class="col conres">
        <h1 className="thisisme">CONTACT US</h1>
        <ul>
          <li>
            <div className="col"><img src="../imx/f1.png" style={{width: '34px'}}></img></div>
            <div className="col" style={{width: "144%",marginTop: "-65px", marginLeft: "47px", textAlign:"start"}}>18, G.F., Gali  No. 19, Bhagwati Garden Extn., Uttam Nagar,New Delhi-110059</div>
          </li>
          <li>
            <div className="col"><img src="../imx/f2.png" style={{width: '34px'}}></img></div>
            <div className="col" style={{width: "144%",marginTop: "-65px", marginLeft: "47px", textAlign:"start"}}>njasecur@gmail.com</div>
          </li>
          <li>
            <div className="col"><img src="../imx/f3.png" style={{width: '34px'}}></img></div>
            <div className="col" style={{width: "144%",marginTop: "-65px", marginLeft: "47px", textAlign:"start"}}>99711-87836 <br />87504-02774</div>
          </li>
        </ul>
      </div>
      
    <div class="clearfix"></div>
    </div>
    </div>
  </div>
  );
};



export default Futter;