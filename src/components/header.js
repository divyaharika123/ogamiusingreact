import {
    BiLogoGmail,
    BiLogoPinterest,
    BiLogoLinkedin,
    BiLogoFacebook,
    BiLogoTwitter,
    BiSolidUser
  } from "react-icons/bi";
  import { FaPhoneAlt } from "react-icons/fa";
  
  import "../styles/header.scss";
  
  const Header = () => {
    return (
      <div className="header">
        <div className="header-container">
          <div className="header-contact">
            <div className="flexBox">
              <BiLogoGmail />
              <p>example@gmail.com</p>
            </div>
            <div className="flexBox">
              <FaPhoneAlt />
              <p>+65 11.188.888</p>
            </div>
          </div>
          <div className="header-actions">
              <div className="header-social-icons">
                  <BiLogoFacebook/>
                  <BiLogoTwitter/>
                  <BiLogoLinkedin/>
                  <BiLogoPinterest/>
              </div>
              <div>
                  <p>English</p> 
                  {/* TODO: Dropdown with images */}
              </div>
              <div className="header-user">
                  <BiSolidUser/>
                  <p>Login</p>
              </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;