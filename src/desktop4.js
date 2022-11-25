import { useCallback } from "react";

import "./desktop4.css";

const Desktop4 = () => {
  

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
    <div className="desktop-4">
      <div className="rectangle-div" />
      <img className="vector-icon" alt="" src="../picture/Vector 1 (1).png" />
      <div className="contact-div" onClick={onCONTACTTextClick}>
        CONTACT
      </div>
      <div className="line-div" />
      <div className="training-div" onClick={onTRAININGTextClick}>
        TRAINING
      </div>
      <img className="nja-logo-1" alt="" src="../picture/nja logo 1.png" />
      <img className="rectangle-icon" alt="" src="../picture/Rectangle 2.png" />
      <div className="rectangle-div1" />
      <div className="security-guard-is-omnipresent">
        <p className="p">
          <span className="security-guard-is">
            Security Guard is omnipresent and can be found anywhere, be it a
            commercial establishment or a residential unit. They have become an
            indispensable part of our society. Security Guard is highly
            effective in protecting life and property which cannot be replaced
            by any electronic gadget. We are amongst the best security guard
            provider in New Delhi.
          </span>
        </p>
        <p className="p">
          <span className="security-guard-is"></span>
        </p>
        <p className="p">
          <span className="security-guard-is">
            We provide following type of Security Personnel:
          </span>
        </p>
        <p className="p">
          <span className="security-guard-is"></span>
        </p>
        <ul className="security-guard-transportation-ul">
          <li className="security-guard-li">
            <span className="security-guard-is">Security Guard</span>
          </li>
          <li className="security-guard-li">
            <span className="security-guard-is">
              Transportation of Cash/Valuables
            </span>
          </li>
          <li className="security-guard-li">
            <span className="security-guard-is">
              Security of Ware House/Departmental Store
            </span>
          </li>
          <li className="security-guard-li">
            <span className="security-guard-is">
              Installation and maintenance of security and fire safety system
            </span>
          </li>
          <li className="security-guard-li">
            <span className="security-guard-is">Private Investigation</span>
          </li>
        </ul>
        <p className="p">
          <span className="security-guard-is"></span>
        </p>
        <ul className="security-guard-transportation-ul">
          <li className="security-guard-li">
            <span className="a-security-guard">
              <span className="security-guard-span2">Security Guard</span>
            </span>
          </li>
        </ul>
        <p className="a-security-guard-in-the-privat">
          <span className="security-guard-is">
            <span className="a-security-guard">{`A Security Guard in the Private Security Sector form the first level of defence, who notices `}</span>
            and encounters threats and risks that are detrimental to life,
            property and premises. Security Guard is responsible for monitoring
            premises and property through physical presence and by using
            security and protection systems. We are consistently ranked as top
            security guard provider in Mumbai for providing high quality
            security guards.
          </span>
        </p>
      </div>
      <div className="guardingindustrial-security">
        Guarding/Industrial Security (Manpower)
      </div>
      <div className="home-div" onClick={onHOMETextClick}>
        HOME
      </div>
      <div className="about-us-div" onClick={onABOUTUSTextClick}>
        ABOUT US
      </div>
      <div className="group-div">
        <div className="security-services-div">SECURITY SERVICES</div>
        <img className="vector-icon1" alt="" src="../" />
      </div>
      <div className="line-div1" />
      <div className="line-div2" />
      <div className="line-div3" />
      <div className="group-div1">
        <div className="rectangle-div2" />
        <div className="home-div1">HOME</div>
        <img className="nja-logo-2" alt="" src="../picture/nja logo 2.png" />
        <b className="usefull-link-b">USEFULL LINK</b>
        <b className="security-services-b">SECURITY SERVICES</b>
        <b className="contact-us-b">CONTACT US</b>
        <div className="security-services-div1">SECURITY SERVICES</div>
        <div className="about-us-div1">ABOUT US</div>
        <div className="training-div1" onClick={onTRAININGText1Click}>
          TRAINING
        </div>
        <div className="contact-div1" onClick={onCONTACTText1Click}>
          CONTACT
        </div>
        <div className="gf-gali-no-19-bhagwati-ga">
          <p className="p">18, G.F., Gali No. 19, Bhagwati</p>
          <p className="p">Garden Extn., Uttam Nagar,</p>
          <p className="a-security-guard-in-the-privat">New Delhi-110059</p>
        </div>
        <div className="njasecurgmailcom-div">njasecur@gmail.com</div>
        <div className="div">99711-87836</div>
        <div className="div1">87504-02774</div>
        <img className="group-icon" alt="" src="../picture/Group 7.png" />
        <img className="group-icon1" alt="" src="../picture/Group 8.png" />
        <img className="group-icon2" alt="" src="../picture/Group 9.png" />
        <div className="guardingindustrial-security-div">
          Guarding/Industrial Security
        </div>
        <div className="transportation-of-cash">Transportation of Cash</div>
        <div className="security-of-ware-houses">Security of Ware Houses</div>
        <div className="night-patrol-div">Night Patrol</div>
        <div className="electronic-security-div">Electronic Security</div>
        <div className="security-equipment-div">Security Equipment</div>
        <div className="fire-safety-systems">Fire safety systems.</div>
        <div className="private-investigation-div">Private Investigation</div>
        <div className="security-auditconsultancy-div">
          Security audit/consultancy
        </div>
        <div className="training-of-security-staff">
          Training of Security Staff
        </div>
        <div className="business-executive-protection">
          Business Executive Protection
        </div>
        <div className="events-security-div">Events Security</div>
        <div className="nja-security-pvt-ltd">
          <p className="p">{`NJA SECURITY `}</p>
          <p className="a-security-guard-in-the-privat">PVT. LTD</p>
        </div>
        <img className="arrow-icon" alt="" src="../picture/Arrow 1.png" />
        <img className="arrow-icon1" alt="" src="../picture/Arrow 1.png" />
        <img className="arrow-icon2" alt="" src="../picture/Arrow 1.png" />
        <img className="arrow-icon3" alt="" src="../picture/Arrow 1.png" />
        <img className="arrow-icon4" alt="" src="../picture/Arrow 1.png" />
        <img className="arrow-icon5" alt="" src="../picture/Arrow 1.png" />
        <img className="arrow-icon6" alt="" src="../picture/Arrow 1.png" />
        <img className="arrow-icon7" alt="" src="../picture/Arrow 1.png" />
        <img className="arrow-icon8" alt="" src="../picture/Arrow 1.png" />
        <img className="arrow-icon9" alt="" src="../picture/Arrow 1.png" />
        <img className="arrow-icon10" alt="" src="../picture/Arrow 1.png" />
        <img className="arrow-icon11" alt="" src="../picture/Arrow 1.png" />
        <img className="arrow-icon12" alt="" src="../picture/Arrow 1.png" />
        <img className="arrow-icon13" alt="" src="../picture/Arrow 1.png" />
        <img className="arrow-icon14" alt="" src="../picture/Arrow 1.png" />
        <img className="arrow-icon15" alt="" src="../picture/Arrow 1.png" />
        <img className="arrow-icon16" alt="" src="../picture/Arrow 1.png" />
      </div>
    </div>
  );
};

export default Desktop4;
