// import "./navbar.css";
// import logo from "../../assets/logo.png";
// import search from "../../assets//search_icon.svg";
// import bell from "../../assets//bell_icon.svg";
// import profile_img from "../../assets//profile_img.png";
// import caret_icon from "../../assets//caret_icon.svg";
// import { useEffect, useRef } from "react";
// import { logout } from "../../firebase";

// const Navbar = () => {
//   const navRef = useRef();

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY >= 80) {
//         navRef.current.classList.add("nav-dark");
//       } else {
//         navRef.current.classList.remove("nav-dark");
//       }
//     });
//   }, []);
//   return (
//     <div ref={navRef} className="navbar">
//       <div className="navbar-left">
//         <img src={logo} alt="" />
//         <ul>
//           <li>Home</li>
//           <li>Tv Show</li>
//           <li>Movies</li>
//           <li>New and Populer</li>
//           <li>My List</li>
//           <li>Browse by Languages</li>
//         </ul>
//       </div>
//       <div className="navbar-right">
//         <img src={search} alt="" className="icons" />
//         <p>Children</p>
//         <img src={bell} alt="" className="icons" />
//         <div className="navbar-profile">
//           <img src={profile_img} alt="" className="profile" />
//           <img src={caret_icon} alt="" />
//           <div className="drop-down">
//             <p
//               onClick={() => {
//                 logout();
//               }}
//             >
//               Sing Out Of Netflix
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell from "../../assets/bell_icon.svg";
import defaultProfileImg from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();
  const [profileImg, setProfileImg] = useState(defaultProfileImg);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImg(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Show</li>
          <li>Movies</li>
          <li>New and Populer</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="" className="icons" />
        <p>Children</p>
        <img src={bell} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={profileImg} alt="" className="profile" />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            id="profile-upload"
          />
          <label htmlFor="profile-upload">
            <img src={caret_icon} alt="" />
          </label>
          <div className="drop-down">
            <p
              onClick={() => {
                logout();
              }}
            >
              Sign Out Of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
