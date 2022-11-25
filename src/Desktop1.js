import { useCallback } from "react";
import { Link } from "react-router-dom";
import "./desktop1.css";
import Futter from "./Futter";

const Desktop1 = () => {
  

  const onGroupContainerClick = useCallback(() => {
   }, []);

  const onABOUTUSTextClick = useCallback(() => {
    // Please sync "Desktop - 6" to the project
  }, []);

  const onTRAININGTextClick = useCallback(() => {
    // Please sync "Desktop - 6" to the project
  }, []);

  const onCONTACTTextClick = useCallback(() => {
    // Please sync "Desktop - 6" to the project
  }, []);

  const onGroupContainer3Click = useCallback(() => {
    // Please sync "Desktop - 4" to the project
  }, []);

  const onGroupContainer4Click = useCallback(() => {
    // Please sync "Desktop - 5" to the project
  }, []);

  const onTRAININGText2Click = useCallback(() => {
    // Please sync "Desktop - 6" to the project
  }, []);

  const onCONTACTText1Click = useCallback(() => {
    // Please sync "Desktop - 6" to the project
  }, []);

  const onGroupContainer15Click = useCallback(() => {
    ("");
  }, []);

  return (
    <>
    <div className="desktop-1">
      {/* <div className="rectangle-div" /> */}
   

     
      <div className="switch-to-nja-security">{`Switch to  NJA Security `}</div>
      <div className="security-service-div">SECURITY SERVICE</div>
      <div className="for-your-personal-safety">FOR YOUR PERSONAL SAFETY</div>
      <img className="rectangle-icon17hi" alt src="../picture/Rectangle 2.png"></img>
      <div className="our-company-ms-nja-security-p">
        Our company M/S NJA SECURITY PRIVATE LIMITED will pioneer the Industry
        Services and will set standrds by way of Caliber of personnel, uality of
        services, Commitment to training and development the high degree of
        professionalism.
      </div>
      <div className="with-the-need-based-approch-t">
        With the need based approch, the company will be in the field of
        providing security for properties, Industries Corporate men and
        materials against thef, pilferage, sabotage, all kinds of man made
        threats, strikes and labour unrest. I will pay my utmost attention in
        assisting the management by way of extra security measures and staff. I
        will also render free advice to clients on all security matters.
      </div>
      <div className="welcome-to-nja-security-pvt-l">
        WELCOME TO NJA SECURITY PVT. LTD.
      </div>
      <div className="group-div" onClick={onGroupContainerClick}>
        <img style={{marginTop:"700px"}}className="rectangle-icon1" alt="" src="../picture/Rectangle 4.png" />
        <Link  to ='/Read More'className="read-more-div" style={{marginTop:"700px"}}>Read More</Link>
        <img className="vector-icon1" alt="" src="../picture/Vector (2).png" />
      </div>
      <div className="rectangle-div1" />
      {/* <div className="the-field-is-required">The field is required.</div>
      <div className="the-field-is-required1">The field is required.</div> */}
      <div className="do-not-fill-this-form-for-job">
        <p className="do-not-fill">
          Do not fill this form for job enquiry, visit career page for job
        </p>
        <p className="openings">openings.</p>
      </div>
      <div className="name-div">Name:</div>
      <div className="contact-number-div" style={{top:"935px"}}>Contact Number:</div>
      <div className="email-id-div">Email Id:</div>
      <div className="rectangle-div2" />
      <div className="get-started-today">GET STARTED TODAY</div>
      <form>
        <input className="rectangle-div3 hlocss" type='text' name = "name" placeholder="Enter your Name.." required/>
        <input className="rectangle-div4 hlocss" style={{top:"968px"}} type='number' name = "contact" placeholder="Enter your Contact Number.." required/>
        <input className="rectangle-div5 hlocss" type='email' name = "email" placeholder="Enter your Email-ID.." required/>
        <div className="group-div1">
          <div className="rectangle-div6" />
          <button className="submit-div btnchng"><span className="spnbtn">SUBMIT</span></button>
        </div>
      </form>
      <div className="group-div2">
        <div className="one-or-more-fields-have-an-err">
          <p className="do-not-fill">{`One or more fields have an error. Please check and `}</p>
          <p className="openings">try again.</p>
        </div>
        <div className="rectangle-div7" />
      </div>

     
      
      <img className="vector-icon2" alt="" src="../picture/Vector 2.png" />
      <div className="security-services-div">SECURITY SERVICES</div>
      <div className="group-div3" onClick={onGroupContainer3Click}>
        <div className="rectangle-div8" />
        <img className="rectangle-icon2" alt="" src="../picture/Rectangle 16.png" />
        <div className="guardingindustrial-security">
          <p className="do-not-fill">Guarding/Industrial Security</p>
          <p className="openings">(Manpower)</p>
        </div>
        <div className="get-trained-security-guard-su">
          Get trained Security Guard, Supervisor and Security Officer at
          competitive rate with excellent track record and PCC verified.
        </div>
      </div>
      <div className="group-div4" onClick={onGroupContainer4Click}>
        <div className="rectangle-div8" />
        <img className="rectangle-icon2" alt="" src="../picture/Rectangle 17.png" />
        <div className="transportation-of-cash-valuab">
          <p className="do-not-fill">Transportation of Cash</p>
          <p className="openings">/Valuables</p>
        </div>
        <div className="get-trained-security-guard-su">
          Hire cash van for a trip or on monthly basis to safely transport your
          valuables with state of the art safety features
        </div>
      </div>
      <div className="group-div5">
        <div className="rectangle-div8" />
        <img className="rectangle-icon2" alt="" src="../picture/Rectangle 18.png" />
        <div className="security-of-ware-house-depart">
          <p className="do-not-fill">Security of Ware House</p>
          <p className="openings">/Departmental Store</p>
        </div>
        <div className="get-trained-security-guard-su">{`Secure your Departmental Store & Warehouse and mitigate the risk by hiring labour law & factory act compliant NJA Security.`}</div>
      </div>
      <div className="group-div6">
        <div className="rectangle-div8" />
        <img className="rectangle-icon2" alt="" src="../picture/Rectangle 19.png" />
        <div className="night-patrol-div">Night Patrol</div>
        <div className="get-trained-security-guard-su">
          Secure your modern Commercial or Residential complex with Professional
          and Trained Security to protect the community 24/7.
        </div>
      </div>
      <div className="group-div7">
        <div className="rectangle-div8" />
        <img className="rectangle-icon2" alt="" src="../picture/Rectangle 24.png" />
        <div className="security-of-ware-house-depart">
          <p className="do-not-fill">Electronic Security and</p>
          <p className="openings">Security Equirment</p>
        </div>
        <div className="get-trained-security-guard-su">
          Secure your modern Commercial or Residential complex with Professional
          and Trained Security to protect the community 24/7.
        </div>
      </div>
      <div className="group-div8">
        <div className="rectangle-div8" />
        <img className="rectangle-icon2" alt="" src="../picture/Rectangle 31.png" />
        <div className="training-of-security-staff">
          Training of Security Staff
        </div>
        <div className="when-the-initiative-of-the-pro">
          When the initiative of the professional security guard has entered the
          private security industry in the world, the different skills must be
          learned by the security personnel.
        </div>
      </div>
      <div className="group-div9">
        <div className="rectangle-div8" />
        <img className="rectangle-icon2" alt="" src="../picture/Rectangle 25 (1).png" />
        <div className="installation-and-maintenance-o">
          <p className="do-not-fill">Installation and maintenance of</p>
          <p className="openings">security and fire safety system</p>
        </div>
        <div className="a-properly-designed-installed">
          A properly designed, installed, operated, and maintained fire alarm
          system can reduce the losses associated with an unwanted fire in any
          building.
        </div>
      </div>
      <div className="group-div10">
        <div className="rectangle-div8" />
        <img className="rectangle-icon2" alt="" src="../picture/Rectangle 32 (1).png" />
        <div className="business-executive-protection">
          <p className="do-not-fill">Business Executive</p>
          <p className="openings">Protection</p>
        </div>
        <div className="a-properly-designed-installed">
          An executive protection program is a security component in many
          venues: business, government, entertainment, sports, wealth, and other
          fields
        </div>
      </div>
      <div className="group-div11">
        <div className="rectangle-div8" />
        <img className="rectangle-icon2" alt="" src="../picture/Rectangle 26.png" />
        <div className="private-investigation-div">Private Investigation</div>
        <div className="a-private-investigator-a-priva">
          A private investigator a private detective, or inquiry agent is a
          person who can be hired by individuals or groups to undertake
          investigatory law services.
        </div>
      </div>
      <div className="group-div12">
        <div className="rectangle-div8" />
        <img className="rectangle-icon2" alt="" src="../picture/Rectangle 33.png" />
        <div className="events-security-div">Events Security</div>
        <div className="get-trained-security-guard-su">
          Looking for Quick Short Term Security Services for an event? We have
          experience and expertise in event management.
        </div>
      </div>
      <div className="group-div13">
        <div className="rectangle-div8" />
        <img className="rectangle-icon2" alt="" src="../picture/Rectangle 27.png" />
        <div className="security-auditconsultancy-div">
          Security audit/consultancy
        </div>
        <div className="get-trained-security-guard-su">{`We have the resources to uncover where weaknesses and security gaps exist throughout your organization. `}</div>
      </div>
      <div className="rectangle-div19" style={{width: "100%"}} />
      
      <div className="training-div1">TRAINING</div>
      <div className="the-selected-candidates-underg">
        <p className="do-not-fill">
          The selected candidates undergo a 5-days training program at our
          training
        </p>
        <p className="do-not-fill">
          academies where they are trained on the following:-
        </p>
        <p className="do-not-fill">&nbsp;</p>
        <p className="do-not-fill">
          (A) To fight and control various types of fire.
        </p>
        <p className="do-not-fill">(B) Industrial Safety.</p>
        <p className="do-not-fill">(C) Documentation</p>
        <p className="do-not-fill">
          (D) Handling communication equipment (Intercom, Telephone, Fax and
        </p>
        <p className="openings"> Walkie-talkie)</p>
      </div>
      <img className="rectangle-icon13" alt="" src="../picture/Rectangle 35 (1).png" />
      <div className="read-more-div1">READ MORE</div>
      <img className="vector-icon3" alt="" src="../picture/Vector1.png" />
     
     

      <div className="group-div15" onClick={onGroupContainer15Click}>
        <img className="rectangle-icon14" alt="" src="../../picture/Rectangle 35 (1).png" />
        <Link  to='/Contact us'className="request-a-quote">Request a quote</Link >
        <img className="vector-icon4" alt="" src="../picture/Vector (2).png" />
      </div>
      <div className="group-div16">
        <img className="vector-icon5" alt="" src="../vector3.svg" />
      </div>
    </div>

    <div className="letsfooter" style={{top: '1646px'}}>
      <Futter/>
    </div>
    </>
    
  );
};

export default Desktop1;
