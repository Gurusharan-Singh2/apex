import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  // GSAP Animation setup
  useGSAP(() => {
    const h2 = gsap.timeline();
    h2.from('.naav', {
      y: -20,
      opacity: 0,
      duration: 0.7,
      delay: 0.3,
    });
    h2.from("li",{
      y:-20,
      opacity:0,
      duration:0.5,
      stagger:0.1
    })
    h2.from(".pp",{
      y:-20,
      opacity:0,
      duration:0.4,
      stagger:0.1
    })
  });

  const navigate = useNavigate();

  const [token, setToken] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [ptoggle, setPToggle] = useState(true);

  const toggleHandle = () => {
    setToggle((prev) => !prev);
  };

  const ptoggleHandle = () => {
    setPToggle((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center text-sm py-1 mb-5 h-32 border-b border-b-gray-400">
      {/* Logo */}
      <img
        onClick={() => navigate('/signup')}
        className="w-44 h-22 naav cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/" end>
          <li className="py-1">HOME</li>
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
        </NavLink>
      </ul>

      {/* Profile or Create Account Button */}
      <div className="-mr-[25px] pp flex items-center gap-4">
        {token ? (
          <div
            className="-mr-28 md:mr-0 flex items-center gap-2 cursor-pointer relative"
            onClick={ptoggleHandle}
          >
            <img src={assets.profile_pic} className="w-8 rounded-full" alt="Profile" />
            <img src={assets.dropdown_icon} className="w-2.5" alt="Dropdown Icon" />
            <div
              className={`absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 ${
                ptoggle ? 'hidden' : 'block'
              }`}
            >
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p className="hover:text-black cursor-pointer" onClick={() => navigate('/my-profile')}>
                  My Profile
                </p>
                <p className="hover:text-black cursor-pointer" onClick={() => navigate('/my-appointments')}>
                  My Appointments
                </p>
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => {
                    setToken(false);
                    navigate('/');
                  }}
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
            onClick={() => navigate('/signup')}
          >
            CREATE ACCOUNT
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden pp">
        {toggle ? (
          <CiMenuBurger className="text-4xl" onClick={toggleHandle} />
        ) : (
          <div className="fixed top-0 left-0 w-screen h-screen bg-white z-10">
            <RxCross1 className="text-2xl absolute top-4 right-4 cursor-pointer" onClick={toggleHandle} />
            <ul className="flex flex-col items-start gap-5 mt-16 p-4">
              <NavLink to="/" end>
                <li className="py-1" onClick={toggleHandle}>
                  HOME
                </li>
              </NavLink>
              <NavLink to="/doctors">
                <li className="py-1" onClick={toggleHandle}>
                  ALL DOCTORS
                </li>
              </NavLink>
              <NavLink to="/about">
                <li className="py-1" onClick={toggleHandle}>
                  ABOUT
                </li>
              </NavLink>
              <NavLink to="/contact">
                <li className="py-1" onClick={toggleHandle}>
                  CONTACT
                </li>
              </NavLink>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
