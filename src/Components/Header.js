import React from "react";
import logo from "../asset/images/simplilogo2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-top">
        <div className="header-right">
          <a href="#resources">Resources</a>
          <a href="#simplilearn-for-business">Simplilearn for Business</a>
          <a href="#become-an-instructor">Become an Instructor</a>
          <a href="#hire-for-us">Hire for Us</a>
          <a href="#reviews">Reviews</a>
        </div>
      </div>
      <div className="header-bottom">
        <div className="bottom-logo">
          <img src={logo} alt="Simplilearn Logo" />
        </div>
        <button className="all-courses-btn">
        {/* <FontAwesomeIcon icon={faThLarge} className="icon" />  */}
            
         All Courses</button>
        <div className="search-bar">
          <input type="text" placeholder="What do you want to learn?" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        
     
        <button className="login-btn">Log in</button>
      </div>
    </header>
  );
};

export default Header;
