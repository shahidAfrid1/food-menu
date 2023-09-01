import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as RedirctLink } from "react-router-dom";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="bg-gray-100 font-sans w-full m-0">
      <div className="bg-white shadow">
        <div className="container mx-auto lg:px-10 px-6">
          <div className="flex items-center justify-between py-4">
            <p className="logo text-xl font-medium">
              <span className="text-light-blue">Food </span>
              Menu
            </p>

            <div className="hidden sm:flex sm:items-center">
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-gray-800 text-lg font-semibold hover:text-light-blue mr-6 cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-gray-800 text-lg font-semibold hover:text-light-blue mr-6 cursor-pointer"
              >
                Qr Code
              </Link>
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-gray-800 text-lg font-semibold hover:text-light-blue mr-6 cursor-pointer"
              >
                Features
              </Link>
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-gray-800 text-lg font-semibold hover:text-light-blue mr-6 cursor-pointer"
              >
                About Us
              </Link>
            </div>

            <div className="hidden sm:flex sm:items-center">
              <RedirctLink
                to="/login"
                href="#"
                className="text-gray-800 text-sm font-semibold hover:text-light-blue mr-4"
              >
                Sign in
              </RedirctLink>
              <RedirctLink
                to="/register"
                className="bg-light-blue text-white text-sm font-semibold border px-4 py-2 rounded-lg hover:text-light-blue hover:border-light-blue hover:bg-white"
              >
                Sign up
              </RedirctLink>
            </div>

            <div className="sm:hidden cursor-pointer" onClick={handleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-light-blue"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.9499909,17 C12.7183558,18.1411202 11.709479,19 10.5,19 C9.29052104,19 8.28164422,18.1411202 8.05000906,17 L3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 3.5,16 L8.05000906,16 C8.28164422,14.8588798 9.29052104,14 10.5,14 C11.709479,14 12.7183558,14.8588798 12.9499909,16 L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 20.7761424,17 20.5,17 L12.9499909,17 Z M18.9499909,12 C18.7183558,13.1411202 17.709479,14 16.5,14 C15.290521,14 14.2816442,13.1411202 14.0500091,12 L3.5,12 C3.22385763,12 3,11.7761424 3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L14.0500091,11 C14.2816442,9.85887984 15.290521,9 16.5,9 C17.709479,9 18.7183558,9.85887984 18.9499909,11 L20.5,11 C20.7761424,11 21,11.2238576 21,11.5 C21,11.7761424 20.7761424,12 20.5,12 L18.9499909,12 Z M9.94999094,7 C9.71835578,8.14112016 8.70947896,9 7.5,9 C6.29052104,9 5.28164422,8.14112016 5.05000906,7 L3.5,7 C3.22385763,7 3,6.77614237 3,6.5 C3,6.22385763 3.22385763,6 3.5,6 L5.05000906,6 C5.28164422,4.85887984 6.29052104,4 7.5,4 C8.70947896,4 9.71835578,4.85887984 9.94999094,6 L20.5,6 C20.7761424,6 21,6.22385763 21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L9.94999094,7 Z M7.5,8 C8.32842712,8 9,7.32842712 9,6.5 C9,5.67157288 8.32842712,5 7.5,5 C6.67157288,5 6,5.67157288 6,6.5 C6,7.32842712 6.67157288,8 7.5,8 Z M16.5,13 C17.3284271,13 18,12.3284271 18,11.5 C18,10.6715729 17.3284271,10 16.5,10 C15.6715729,10 15,10.6715729 15,11.5 C15,12.3284271 15.6715729,13 16.5,13 Z M10.5,18 C11.3284271,18 12,17.3284271 12,16.5 C12,15.6715729 11.3284271,15 10.5,15 C9.67157288,15 9,15.6715729 9,16.5 C9,17.3284271 9.67157288,18 10.5,18 Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className={`${
            isOpenMenu ? "h-full" : "h-0"
          } absolute w-full px-6 overflow-hidden sm:hidden bg-white`}
        >
          <div className="flex flex-col h-9xl">
            <Link
              to="/"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-gray-800 text-base font-semibold hover:text-light-blue mr-6 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-gray-800 text-base font-semibold hover:text-light-blue mr-6 cursor-pointer"
            >
              Qr Code
            </Link>
            <Link
              to="/"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-gray-800 text-base font-semibold hover:text-light-blue mr-6 cursor-pointer"
            >
              Features
            </Link>
            <Link
              to="/"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-gray-800 text-base font-semibold hover:text-light-blue mr-6 cursor-pointer"
            >
              About Us
            </Link>
            <div className="flex justify-between items-center border-t-2 pt-2">
              <RedirctLink
                to={"/login"}
                className="text-gray-800 text-sm font-semibold hover:text-light-blue mr-4"
              >
                Sign in
              </RedirctLink>
              <RedirctLink
                to={"/register"}
                className="bg-light-blue text-white text-sm font-semibold border px-4 py-1 rounded-lg hover:text-light-blue hover:border-light-blue hover:bg-white"
              >
                Sign up
              </RedirctLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// return (
//   <nav className="navbar">
//     <h1>Food Menu</h1>
//     <div className={`navbar`}>
//       <ul className="navbar-links">
//         <li>
//           <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="qrSection"
//             spy={true}
//             smooth={true}
//             offset={0}
//             duration={500}
//           >
//             Qr Code
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="featureSection"
//             spy={true}
//             smooth={true}
//             offset={0}
//             duration={500}
//           >
//             Features
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="aboutSection"
//             spy={true}
//             smooth={true}
//             offset={0}
//             duration={500}
//           >
//             About Us
//           </Link>
//         </li>
//       </ul>
//     </div>
//     <img
//       src={barIcon}
//       alt="toggle-btn"
//       onClick={handleToggleBar}
//       className="bar-icon"
//     />
//     <article
//       className={`side-bar ${isOpen && "open"} active menu-sidebar-fixed`}
//     >
//       <img
//         src={closeIcon}
//         alt="close-icon"
//         className="close-icon"
//         onClick={handleCloseBtn}
//       />

//       <h2>Food Menu</h2>

//       <ul className="sidebar-links">
//         <li>
//           <Link
//             to="hero"
//             spy={true}
//             smooth={true}
//             offset={50}
//             duration={500}
//             onClick={handleCloseBtn}
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="qrSection"
//             spy={true}
//             smooth={true}
//             offset={0}
//             duration={500}
//             onClick={handleCloseBtn}
//           >
//             Qr Code
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="featureSection"
//             spy={true}
//             smooth={true}
//             offset={0}
//             duration={500}
//             onClick={handleCloseBtn}
//           >
//             Features
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="aboutSection"
//             spy={true}
//             smooth={true}
//             offset={0}
//             duration={500}
//             onClick={handleCloseBtn}
//           >
//             About Us
//           </Link>
//         </li>
//       </ul>
//     </article>
//   </nav>
// );
