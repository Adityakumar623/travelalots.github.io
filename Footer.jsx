import React,{useEffect} from "react";
import "./footer.css";
import video2 from "../../Assets/footer3.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {

      // let create a react hook to add a scroll animation... 
 useEffect(()=>{
  Aos.init({duration:2000})
 },[])


  return (
    <section  className="footer">
      <div className="videoDiv">
        <video src={video2} muted autoPlay loop type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div   data-aos="fade-up"  className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
 
          <div className="inputDiv flex">
            <input    data-aos="fade-up" type="text" placeholder="Enter Email Address" />
            <button    data-aos="fade-up" className="btn flex" type="submit">
              SEND : <FiSend className="icon"></FiSend>
            </button>
          </div>
        </div>

        <div  style={{ opacity: 0.7}} className="footerCard flex">

          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Travel
              </a>
            </div>

<div    data-aos="fade-up" className="footerParagraph">
  <b>Nothing to lose but , A whole world to explore.</b><br />
  <b>Impossible to waste time when you’re travelling. Every moment’s as it should be.</b>
</div>

     <div   data-aos="fade-up"
     className="footerSocials flex">
      <AiOutlineTwitter className="icon"/>
      <AiOutlineYoutube className="icon"/>
      <AiOutlineInstagram className="icon"/>
      {/* <AiOutlineTwitter className="icon"/> */}
     </div>
          </div>


<div className="footerLinks grid">

{/* group 1 */}

  <div   data-aos="fade-up" 
  data-aos-duration="3000"
   className="linkGroup">
    <span className="groupTitle">
       AGENCY
    </span>

    <li className="footerList flex">
      <FiChevronRight className="icon" />
          Services
    </li>

    <li className="footerList flex">
      <FiChevronRight className="icon" />
          Insurance
    </li>

    <li className="footerList flex">
      <FiChevronRight className="icon" />
          Tourism
    </li>

    {/* <li className="footerList flex">
      <FiChevronRight className="icon" />
          Payment
    </li> */}
  </div>
       
       {/* group 2*/}

       <div  data-aos="fade-up" 
        data-aos-duration="4000" 
         className="linkGroup">
    <span className="groupTitle ">
     Partners
    </span>

    <li className="footerList flex">
      <FiChevronRight className="icon" />
         Booking
    </li>

    <li className="footerList flex">
      <FiChevronRight className="icon" />
          Rentcars
    </li>

    {/* <li className="footerList flex">
      <FiChevronRight className="icon" />
          Trivago
    </li> */}

    <li className="footerList flex">
      <FiChevronRight className="icon" />
        TripAdvisor 
           </li>
  </div>

  {/* group 3 */}

  <div   data-aos="fade-up" 
  data-aos-duration="5000"
  className="linkGroup">
    <span className="groupTitle">
    Recommended
    </span>

    <li className="footerList flex">
      <FiChevronRight className="icon" />
          India
    </li>

    <li className="footerList flex">
      <FiChevronRight className="icon" />
          California
    </li>

    <li className="footerList flex">
      <FiChevronRight className="icon" />
          Indonesia
    </li>

    {/* <li className="footerList flex">
      <FiChevronRight className="icon" />
          Europe
    </li> */}
  </div>
    
</div>

<div className="footerDiv grid">
  <small   >BEST TRAVEL WEBSITE THEME </small> <br />
  <small   >COPYRIGHTS RESERVED -Travel 2023</small>
</div>

        </div>
      </div>
    </section>
  );
};

export default Footer;
