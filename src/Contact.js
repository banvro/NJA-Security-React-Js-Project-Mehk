import { useCallback } from "react";
import Map from "./Map";
import Futter from "./Futter";
import "./contact.css";

const Contact = () => {


  const onCONTACTTextClick = useCallback(() => {
    // Please sync "Desktop - 6" to the project
  }, []);

  const onTRAININGTextClick = useCallback(() => {
    // Please sync "Desktop - 6" to the project
  }, []);

  const onHOMETextClick = useCallback(() => {
  ("/");
  }, []);

  const onABOUTUSTextClick = useCallback(() => {
    // Please sync "Desktop - 6" to the project
  }, []);

  const onTRAININGText1Click = useCallback(() => {
    // Please sync "Desktop - 6" to the project
  }, []);

  const onCONTACTText1Click = useCallback(() => {
    // Please sync "Desktop - 6" to the project
  }, []);

  return (
    <div className="contact-div2">
   
   
      <img className="rectangle-icon15" alt="" src="../picture/Rectangle 2 (1).png" />
      <div className="please-fill-up-the-inquiry-for">
        Please fill up the Inquiry Form. We will contact you within 2 working
        hours
      </div>
      <div className="gf-gali-no-19-bhagwati-ga1">
        <p className="gf-gali1 hloprea">18, G.F., Gali No. 19, Bhagwati</p>
        <p className="gf-gali1 hloprea">Garden Extn., Uttam Nagar,</p>
        <p className="new-delhi-110059-p1 hloprea">New Delhi-110059</p>
      </div>
      <div className="njasecurgmailcom-div1 hloprea">njasecur@gmail.com</div>
      <div className="div2 hloprea">99711-87836</div>
      <div className="div3 hloprea">87504-02774</div>
      <div className="request-a-quote1 hloprea">REQUEST A QUOTE</div>
      
      <form>
      <input className="rectangle-div22 hlocss inputfields" type="text" name="name" placeholder="Enter Your Name" required/>
      <input className="rectangle-div23 hlocss" type="number" name="contact" placeholder="Enter your Contact Number" required/>
      <input className="rectangle-div25 hlocss inputfields" type="text" name="name" placeholder="Enter your Company Name" required/>
      <input className="rectangle-div24 hlocss" type="email" name="email" placeholder="Enter your Email-ID" required/>
      <textarea className="rectangle-div26 hlocss" type="text" name="name" placeholder="Enter your Inquiry here...." required/>
      <div className="contact-persons-name">Contact Persons Name:</div>
      <div className="contact-number-div1">Contact Number:</div>
      <div className="email-div">Email:</div>
      <div className="your-inquiry-div">Your Inquiry:</div>
      <div className="company-name-div">Company Name:</div>
      {/* <div className="abcexamplecom-div">abc@example.com</div> */}
      <div className="contact-us-div">CONTACT US</div>
      <img className="group-icon3" alt="" src="../picture/Group 7.png" />
      <img className="group-icon4" alt="" src="../picture/Group 8.png" />
      <img className="group-icon5" alt="" src="../picture/Group 9.png" />
      <div className="group-div17">
        <div className="rectangle-div27" />
        <button className="submit-div1 btnchng" style={{top: '-18px', left: '1px', height: '58px'}}><span className="btnxspan">SUBMIT</span></button>
      </div>
      </form>
      <div className="map-work">
      <Map/>
      </div>
      <div className="group-div19">
       
        <img className="vector-icon7" alt="" src="../vector3.svg" />
      </div>
      <div style={{position:"relative", marginTop: '-370px'}}>
        {/* <Futter /> */}
      </div>
    </div>
  );
};

export default Contact;
