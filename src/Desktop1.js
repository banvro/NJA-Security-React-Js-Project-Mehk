import { useCallback } from "react";
import { Link } from "react-router-dom";
import "./desktop1.css";
import Futter from "./Futter";

const Desktop1 = () => {
  

  // const onGroupContainerClick = useCallback(() => {
  //  }, []);

  // const onABOUTUSTextClick = useCallback(() => {
  //   // Please sync "Desktop - 6" to the project
  // }, []);

  // const onTRAININGTextClick = useCallback(() => {
  //   // Please sync "Desktop - 6" to the project
  // }, []);

  // const onCONTACTTextClick = useCallback(() => {
  //   // Please sync "Desktop - 6" to the project
  // }, []);

  // const onGroupContainer3Click = useCallback(() => {
  //   // Please sync "Desktop - 4" to the project
  // }, []);

  // const onGroupContainer4Click = useCallback(() => {
  //   // Please sync "Desktop - 5" to the project
  // }, []);

  // const onTRAININGText2Click = useCallback(() => {
  //   // Please sync "Desktop - 6" to the project
  // }, []);

  // const onCONTACTText1Click = useCallback(() => {
    // Please sync "Desktop - 6" to the project
  // }, []);

  // const onGroupContainer15Click = useCallback(() => {
  //   ("");
  // }, []);

  return (
    <>
    <div className="desktop-1">
      {/* <div className="rectangle-div" /> */}
   

     
      <div className="switch-to-nja-security">{`Switch to  NJA Security `}</div>
      <div className="security-service-div">SECURITY SERVICE</div>
      <div className="for-your-personal-safety">FOR YOUR PERSONAL SAFETY</div>
      <img className="rectangle-icon17hi" alt src="../picture/Rectangle 2.png"></img>
      <a href="/Contact us">
        <span className="hlobtnaro heydude prabhu">Request a quote</span>
        <img className="heydude" src="../../picture/Rectangle 35 (1).png" style={{height: '45px'}} />
      </a>


</div>
    <div class="map">
      {/* <div id="map"></div> */}
      <div>
        <div class="map-c">
          <h1 className="heduingcls">WELCOME TO NJA SECURITY PVT. LTD.</h1>
          <p className="forprea"  style={{marginBottom: '15px'}}>Our company M/S NJA SECURITY PRIVATE LIMITED will pioneer the Industry Services and will set standrds by way of Caliber of personnel, uality of services, Commitment to training and development the high degree of professionalism.</p>
          <p className="forprea" style={{marginBottom: '13px'}}>With the need based approch, the company will be in the field of providing security for properties, Industries Corporate men and materials against thef, pilferage, sabotage, all kinds of man made threats, strikes and labour unrest. I will pay my utmost attention in assisting the management by way of extra  security measures and staff. I will also render free advice to clients on all security matters.</p>

          <a href="/Read More">
            <span className="hlobtnaro">READ MORE</span>
            <img src="../../picture/Rectangle 35 (1).png" style={{marginTop: '12px', height: '45px'}} />
          </a>
        </div>
        
          <form className="formx" action="home" method="post">
          <h3 className="formtop">GET STARTED TODAY</h3>
            <div>
              <p>
                <label for="username">Name:</label>
                <input id="username" name="username" type="text" required/>
              </p>
              <p>
                <label for="password">Contact Number:</label>
                <input id="password" name="password" type="password" required/>
              </p>
              <p>
                <label for="confirm_password">Email Id:</label>
                <input id="confirm_password" name="confirm_password" type="password" required/>
              </p>
              <p>
                <input className="hlobtn" type="submit" value="SUBMIT" id="submit" />
              </p>

              <p className="sownjbtn">Do not fill this form for job enquiry, visit career page for job openings.</p>
              <p className="sownbtn" style={{marginBottom: '-8px'}}>One or more fields have an error. Please check and try again.</p>
            </div>
          </form>
        </div>
    </div>

    <div style={{marginTop: '-103px'}}>
      <h2 className="textar">SECURITY SERVICES</h2>
      <img className="helloimg" alt="" src="../picture/Vector 2.png" />
    </div>

 
    <div className="mainthingforcard">
      <div class="grid" id="container">
        <div class="grid__item item">
          <div class="card">
            <span className="imgged">Guarding/Industrial Security (Manpower)</span>
            <img class="card__img" src="../imx/1.png" alt="project mehhk imagees" />
            <div class="card__content">
              <p class="card__text">Get trained Security Guard, Supervisor and Security Officer at competitive rate with excellent track record and PCC verified.</p>
            </div>
          </div>
        </div>
        <div class="grid__item item">
          <div class="card">
            <span className="imgged">Transportation of Cash /Valuables</span>
            <img class="card__img" src="../imx/2.png" alt="project mehhk imagees" />
            <div class="card__content">
              <p class="card__text">Hire cash van for a trip or on monthly basis to safely transport your valuables with state of the art safety features</p>
            </div>
          </div>
        </div>
        <div class="grid__item item">
          <div class="card">
            <span className="imgged">Security of Ware House/Departmental Store</span>
            <img class="card__img" src="../imx/3.png" alt="project mehhk imagees" />
            <div class="card__content">
              <p class="card__text">Secure your Departmental Store & Warehouse and mitigate the risk by hiring labour law & factory act compliant NJA Security.</p>
            </div>
          </div>
        </div>
        <div class="grid__item item">
          <div class="card">
            <span className="imgged" style={{marginLeft: '-53px'}}>Night Patrol</span>
            <img class="card__img" src="../imx/4.png" alt="project mehhk imagees" />
            <div class="card__content">
              <p class="card__text">Secure your modern Commercial or Residential complex with Professional and Trained Security to protect the community 24/7.</p>
            </div>
          </div>
        </div>
        <div class="grid__item item">
          <div class="card">
            <span className="imgged">Electronic Security and Security Equirment</span>
            <img class="card__img" src="../imx/5.png" alt="project mehhk imagees" />
            <div class="card__content">
              <p class="card__text">Secure your modern Commercial or Residential complex with Professional and Trained Security to protect the community 24/7.</p>
            </div>
          </div>
        </div>
        <div class="grid__item item">
          <div class="card">
            <span className="imgged">Installation and maintenance of security and fire safety system</span>
            <img class="card__img" src="../imx/6.png" alt="project mehhk imagees" />
            <div class="card__content">
              <p class="card__text">A properly designed, installed, operated, and maintained fire alarm system can reduce the losses associated with an unwanted fire in any building.</p>
            </div>
          </div>
        </div>
        <div class="grid__item item">
          <div class="card">
            <span className="imgged" style={{marginLeft: '-75px'}}>Private Investigation</span>
            <img class="card__img" src="../imx/7.png" alt="project mehhk imagees" />
            <div class="card__content">
              <p class="card__text">A private investigator a private detective, or inquiry agent is a person who can be hired by individuals or groups to undertake investigatory law services.</p>
            </div>
          </div>
        </div>
        <div class="grid__item item">
          <div class="card">
            <span className="imgged">Security audit/consultancy</span>
            <img class="card__img" src="../imx/8.png" alt="project mehhk imagees" />
            <div class="card__content">
              <p class="card__text">We have the resources to uncover where weaknesses and security gaps exist throughout your organization. </p>
            </div>
          </div>
        </div>
        <div class="grid__item item">
          <div class="card">
            <span className="imgged">Training of Security Staff</span>
            <img class="card__img" src="../imx/9.png" alt="project mehhk imagees" />
            <div class="card__content">
              <p class="card__text">When the initiative of the professional security guard has entered the private security industry in the world, the different skills must be learned by the security personnel.</p>
            </div>
          </div>
        </div>
        <div class="grid__item item">
          <div class="card">
            <span className="imgged">Business Executive Protection</span>
            <img class="card__img" src="../imx/10.png" alt="project mehhk imagees" />
            <div class="card__content">
              <p class="card__text">An executive protection program is a security component in many
            venues: business, government, entertainment, sports, wealth, and other
            fields</p>
            </div>
          </div>
        </div>
        <div class="grid__item item">
          <div class="card">
            <span className="imgged" style={{marginLeft: '-56px'}}>Events Security</span>
            <img class="card__img" src="../imx/11.png" alt="project mehhk imagees" />
            <div class="card__content">
              <p class="card__text">Looking for Quick Short Term Security Services for an event? We have
            experience and expertise in event management.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
     
    <div class="mapalt" style={{backgroundColor:"#B23C26", marginTop: '32px', maxWidth: '100%'}}>
      <div>
      <div class="mrimg">
          <img class="relimk" src="../imx/last.png" alt="project mehhk imagees" />
      </div>
        <div className="btontnm" style={{color:"white"}}>
        <h1 className="uok">TRAINING</h1>
        <p className="forprea"  style={{marginBottom: '8px',fontSize: '18px'}}>The selected candidates undergo a 5-days training program at our training
          academies where they are trained on the following:-
        <br />
        <br />
          (A) To fight and control various types of fire.<br />
          (B) Industrial Safety.<br />
          (C) Documentation<br />
          (D) Handling communication equipment (Intercom, Telephone, Fax and
          Walkie-talkie)
          </p>

          <p>
            <span className="hlobtnaro">READ MORE</span>
            <img src="../../picture/Rectangle 35 (1).png" style={{marginTop: '12px', height: '45px'}} />
          </p>
           
        </div>
      </div>
  </div>


  <div>
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Scanfcode</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>

      {/* <div>
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
      </div> */}


      
      {/* <div className="rectangle-div1" /> */}
      {/* <div className="the-field-is-required">The field is required.</div>
      <div className="the-field-is-required1">The field is required.</div> */}
      {/* <div className="do-not-fill-this-form-for-job">
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
      </div> */}







{/* <img className="vector-icon2" alt="" src="../picture/Vector 2.png" />
      <div className="security-services-div">SECURITY SERVICES</div>
      
      <div className="rectangle-div19" style={{width: "100%"}} /> */}





      {/* <div>
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
      </div>

     
      
      <img className="vector-icon2" alt="" src="../picture/Vector 2.png" />
      <div className="security-services-div">SECURITY SERVICES</div>
      
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
    </div> */}

    <div className="letsfooter" style={{top: '1646px'}}>
      {/* <Futter/> */}
    </div>


{/* 
    <div>
    <div class="grid">
      <div class="grid__item item">
        <div class="card"><img class="card__img" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" alt="Snowy Mountains" />
          <div class="card__content">
            <h1 class="card__header">A starry night</h1>
            <p class="card__text">Look up at the night sky, and find yourself <strong>immersed</strong> in the amazing mountain range of Aspen.</p>
            <button class="card__btn">Explore <span>&rarr;</span></button>
          </div>
        </div>
      </div>
      <div class="grid__item item">
        <div class="card"><img class="card__img" src="https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" alt="Desert" />
          <div class="card__content">
            <h1 class="card__header">Misty mornings</h1>
            <p class="card__text">Capture the stunning <strong>essence</strong> of the early morning sunrise in the Californian wilderness.</p>
            <button class="card__btn">Explore <span>&rarr;</span></button>
          </div>
        </div>
      </div>
      <div class="grid__item">
        <div class="card"><img class="card__img" src="https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3300&amp;q=80" alt="Canyons" />
          <div class="card__content">
            <h1 class="card__header">Utah sunsets</h1>
            <p class="card__text">Sunsets over the <strong>stunning</strong> Utah Canyonlands, is truly something much more than incredible.</p>
            <button class="card__btn">Explore <span>&rarr;</span></button>
          </div>
        </div>
      </div>
    </div>
    </div>
     */}
     
    </>
    
  );
};

export default Desktop1;
