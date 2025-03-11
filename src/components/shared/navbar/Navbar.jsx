
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import { TfiClose } from "react-icons/tfi";
import Button from "../Button";
import { RiSearchLine } from "react-icons/ri";

const Navbar = () => {
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = () => {
    navigate("/");
  };

  // Background color change on scroll
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 32) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed -top-[3px] left-0 w-full py-1 md:py-3 lg:py-2 shadow transition-all ease-in-out duration-300 ${navbar ? "bg-[#F1F0EA] z-50 fixed md:py-4" : "bg-[#f1f0ea] z-50"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center px-4 lg:px-0">
          <nav className="relative container flex justify-between items-center w-full">
            {/* Logo */}
            <div className="flex items-center gap-6 lg:hidden">
              <div onClick={handleNavigate} className="">
                {/* mobile device logo */}
                <img src="/logo2.png" alt="logo" className="w-full h-full object-cover md:hidden" />

                <img src="/logo3.png" alt="logo" className="h-20 object-cover hidden md:block"/>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="absolute right-1  top-1/2 -translate-y-1/2 rounded-lg  py-[6px] focus:ring-2 ring-primary"
              >
                {menuOpen ? <TfiClose className="text-2xl" /> : <VscMenu className="text-2xl" />}
              </button>
            </div>


            {/* Sidebar (Mobile Menu) */}
            <div
              className={`fixed top-0 right-0 h-full w-2/3 p-4 bg-gray-100 shadow-lg z-[200] transition-transform overflow-y-auto ${menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
              <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4">
                <TfiClose className="text-2xl" />
              </button>
              <div className="flex flex-col space-y-4 mt-8">
                <NavLink
                  to={'/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-Poppins text-[14px] text-[#172B4D] ${isActive ? ' text-[#172B4D] font-bold font-Poppins  rounded-full' : 'font-Poppins text-[14px] text-[#172B4D]'}`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={'/about'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-Poppins text-[14px] text-[#172B4D] ${isActive ? ' text-[#172B4D] font-bold font-Poppins  rounded-full' : 'font-Poppins text-[14px] text-[#172B4D]'}`
                  }
                >
                  About us
                </NavLink>
                <NavLink
                  to={'/blogs'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-Poppins text-[14px] text-[#172B4D] ${isActive ? ' text-[#172B4D] font-bold font-Poppins  rounded-full' : 'font-Poppins text-[14px] text-[#172B4D]'}`
                  }
                >
                  Blogs
                </NavLink>
                <NavLink
                  to={'/faq'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-Poppins text-[14px] text-[#172B4D] ${isActive ? ' text-[#172B4D] font-bold font-Poppins  rounded-full' : 'font-Poppins text-[14px] text-[#172B4D]'}`
                  }
                >
                  FAQs
                </NavLink>
                <NavLink
                  to={'/privacy'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-Poppins text-[14px] text-[#172B4D] ${isActive ? ' text-[#172B4D] font-bold font-Poppins  rounded-full' : 'font-Poppins text-[14px] text-[#172B4D]'}`
                  }
                >
                  Privacy
                </NavLink>
                {/* Signup Button */}
                <div className="">
                  <div>
                    <button className="bg-primary text-white font-Poppins font-medium text-[14px] px-[12px] py-[8px] rounded-full flex items-center gap-1">
                      <span className="flex items-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00004 9.3335C2.36823 9.3335 2.66671 9.63197 2.66671 10.0002V12.6668C2.66671 12.8436 2.73695 13.0132 2.86197 13.1382C2.98699 13.2633 3.15656 13.3335 3.33337 13.3335H12.6667C12.8435 13.3335 13.0131 13.2633 13.1381 13.1382C13.2631 13.0132 13.3334 12.8436 13.3334 12.6668V10.0002C13.3334 9.63197 13.6319 9.3335 14 9.3335C14.3682 9.3335 14.6667 9.63197 14.6667 10.0002V12.6668C14.6667 13.1973 14.456 13.706 14.0809 14.081C13.7058 14.4561 13.1971 14.6668 12.6667 14.6668H3.33337C2.80294 14.6668 2.29423 14.4561 1.91916 14.081C1.54409 13.706 1.33337 13.1973 1.33337 12.6668V10.0002C1.33337 9.63197 1.63185 9.3335 2.00004 9.3335Z" fill="white" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21106 10.7318 7.78894 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526Z" fill="white" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00004 1.3335C8.36823 1.3335 8.66671 1.63197 8.66671 2.00016V10.0002C8.66671 10.3684 8.36823 10.6668 8.00004 10.6668C7.63185 10.6668 7.33337 10.3684 7.33337 10.0002V2.00016C7.33337 1.63197 7.63185 1.3335 8.00004 1.3335Z" fill="white" />
                        </svg>
                      </span>
                      Get App
                      <span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.52864 5.52876C3.78899 5.26841 4.2111 5.26841 4.47145 5.52876L8.00004 9.05735L11.5286 5.52876C11.789 5.26841 12.2111 5.26841 12.4714 5.52876C12.7318 5.78911 12.7318 6.21122 12.4714 6.47157L8.47145 10.4716C8.2111 10.7319 7.78899 10.7319 7.52864 10.4716L3.52864 6.47157C3.26829 6.21122 3.26829 5.78911 3.52864 5.52876Z" fill="white" />
                        </svg>

                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:justify-center items-center gap-[80px]">
              <div className="flex items-center gap-6">
                <div onClick={handleNavigate} className="cursor-pointer">
                  <span onClick={handleNavigate} className="flex items-center cursor-pointer">
                   <img src="/logo3.png" alt="logo" className="h-20 object-cover"/>
                    <h1 className="font-Quicksand font-bold text-2xl text-[#265758]">Pet & beyond</h1>
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    `font-Poppins text-[14px] text-[#172B4D] ${isActive ? 'bg-[#d0d2cd] text-[#172B4D] font-semibold font-Poppins px-[16px] py-[4px] rounded-full' : 'font-Poppins text-[14px] text-[#172B4D]'}`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={'/about'}
                  className={({ isActive }) =>
                    `font-Poppins text-[14px] text-[#172B4D] ${isActive ? 'bg-[#d0d2cd] text-[#172B4D] font-semibold font-Poppins px-[16px] py-[4px] rounded-full' : 'font-Poppins text-[14px] text-[#172B4D]'}`
                  }
                >
                  About us
                </NavLink>
                <NavLink
                  to={'/blogs'}
                  className={({ isActive }) =>
                    `font-Poppins text-[14px] text-[#172B4D] ${isActive ? 'bg-[#d0d2cd] text-[#172B4D] font-semibold font-Poppins px-[16px] py-[4px] rounded-full' : 'font-Poppins text-[14px] text-[#172B4D]'}`
                  }
                >
                  Blogs
                </NavLink>
                <NavLink
                  to={'/faq'}
                  className={({ isActive }) =>
                    `font-Poppins text-[14px] text-[#172B4D] ${isActive ? 'bg-[#d0d2cd] text-[#172B4D] font-semibold font-Poppins px-[16px] py-[4px] rounded-full' : 'font-Poppins text-[14px] text-[#172B4D]'}`
                  }
                >
                  FAQs
                </NavLink>
                <NavLink
                  to={'/privacy'}
                  className={({ isActive }) =>
                    `font-Poppins text-[14px] text-[#172B4D] ${isActive ? 'bg-[#d0d2cd] text-[#172B4D] font-semibold font-Poppins px-[16px] py-[4px] rounded-full' : 'font-Poppins text-[14px] text-[#172B4D]'}`
                  }
                >
                  Privacy
                </NavLink>
              </div>
            </div>

            {/* Desktop Signup/Login Button */}
            <div className="hidden lg:flex lg:justify-end">
              <div>
                <button className="bg-primary text-white font-Poppins font-medium text-[14px] px-[12px] py-[8px] rounded-full flex items-center gap-1">
                  <span className="flex items-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00004 9.3335C2.36823 9.3335 2.66671 9.63197 2.66671 10.0002V12.6668C2.66671 12.8436 2.73695 13.0132 2.86197 13.1382C2.98699 13.2633 3.15656 13.3335 3.33337 13.3335H12.6667C12.8435 13.3335 13.0131 13.2633 13.1381 13.1382C13.2631 13.0132 13.3334 12.8436 13.3334 12.6668V10.0002C13.3334 9.63197 13.6319 9.3335 14 9.3335C14.3682 9.3335 14.6667 9.63197 14.6667 10.0002V12.6668C14.6667 13.1973 14.456 13.706 14.0809 14.081C13.7058 14.4561 13.1971 14.6668 12.6667 14.6668H3.33337C2.80294 14.6668 2.29423 14.4561 1.91916 14.081C1.54409 13.706 1.33337 13.1973 1.33337 12.6668V10.0002C1.33337 9.63197 1.63185 9.3335 2.00004 9.3335Z" fill="white" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21106 10.7318 7.78894 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526Z" fill="white" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00004 1.3335C8.36823 1.3335 8.66671 1.63197 8.66671 2.00016V10.0002C8.66671 10.3684 8.36823 10.6668 8.00004 10.6668C7.63185 10.6668 7.33337 10.3684 7.33337 10.0002V2.00016C7.33337 1.63197 7.63185 1.3335 8.00004 1.3335Z" fill="white" />
                    </svg>
                  </span>
                  Get App
                  <span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.52864 5.52876C3.78899 5.26841 4.2111 5.26841 4.47145 5.52876L8.00004 9.05735L11.5286 5.52876C11.789 5.26841 12.2111 5.26841 12.4714 5.52876C12.7318 5.78911 12.7318 6.21122 12.4714 6.47157L8.47145 10.4716C8.2111 10.7319 7.78899 10.7319 7.52864 10.4716L3.52864 6.47157C3.26829 6.21122 3.26829 5.78911 3.52864 5.52876Z" fill="white" />
                    </svg>

                  </span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;