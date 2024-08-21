// import React, { useState } from 'react';
// import Logo from '../assets/Logo.png';
// import { NavLink } from "react-router-dom";


// function Header() {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       {/* Waves svg path */}
//       <div id="waves">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//           <path fill="#0099ff" fillOpacity="2"
//             d="M0,288L21.8,277.3C43.6,267,87,245,131,202.7C174.5,160,218,96,262,69.3C305.5,43,349,53,393,96C436.4,139,480,213,524,208C567.3,203,611,117,655,74.7C698.2,32,742,32,785,69.3C829.1,107,873,181,916,213.3C960,245,1004,235,1047,240C1090.9,245,1135,267,1178,245.3C1221.8,224,1265,160,1309,160C1352.7,160,1396,224,1418,256L1440,288L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z">
//           </path>
//         </svg>
//       </div>

//       <div className="logo">
//         <img src={Logo} alt="The school logo" />
//       </div>

//       <div className="topbar">
//         <h1>ST. JOSEPH'S JUNIOR SEMINARY MOLO</h1>
//         <h5>Excellence in mind and in spirit.</h5>
//       </div>

//       <nav id="navbar">
//         <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
//           <ul>
//             <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
//             <li><NavLink to="/about" onClick={toggleMenu}>About</NavLink></li>
//             <li><NavLink to="/resources" onClick={toggleMenu}>Resources</NavLink></li>
//             <li><NavLink to="/gallery" onClick={toggleMenu}>Gallery</NavLink></li>
//           </ul>
//         </div>
//         <div className="hamburger" onClick={toggleMenu}>
//           <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
//           <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
//           <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Header;

import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Waves svg path */}
      <div id="waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fillOpacity="2"
            d="M0,288L21.8,277.3C43.6,267,87,245,131,202.7C174.5,160,218,96,262,69.3C305.5,43,349,53,393,96C436.4,139,480,213,524,208C567.3,203,611,117,655,74.7C698.2,32,742,32,785,69.3C829.1,107,873,181,916,213.3C960,245,1004,235,1047,240C1090.9,245,1135,267,1178,245.3C1221.8,224,1265,160,1309,160C1352.7,160,1396,224,1418,256L1440,288L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z">
          </path>
        </svg>
      </div>

      <div className="logo">
        <img src={Logo} alt="The school logo" />
      </div>

      <div className="topbar">
        <h1>ST. JOSEPH'S JUNIOR SEMINARY MOLO</h1>
        <h5>Excellence in mind and in spirit.</h5>
      </div>

      <nav id="navbar">
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={toggleMenu}>About</NavLink></li>
            <li><NavLink to="/resources" onClick={toggleMenu}>Resources</NavLink></li>
            <li><NavLink to="/gallery" onClick={toggleMenu}>Gallery</NavLink></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
        </div>
      </nav>
    </>
  )
}

export default Header;
