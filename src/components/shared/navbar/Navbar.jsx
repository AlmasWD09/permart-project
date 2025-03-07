
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
        className={`fixed -top-[3px] left-0 w-full py-3 lg:py-6 shadow transition-all ease-in-out duration-300 ${navbar ? "bg-[#F1F0EA] z-50 fixed py-4" : "bg-[#f1f0ea] z-50"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center px-4 lg:px-0">
          <nav className="relative container flex justify-between items-center w-full">
            {/* Logo */}
            <div className="flex items-center gap-6 lg:hidden">
              <div onClick={handleNavigate} className="cursor-pointer">
                <span onClick={handleNavigate} className="flex items-center gap-2 cursor-pointer">
                  <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.08 29.4398C30.08 30.6498 29.23 31.6698 28.09 31.9198C27.91 31.9598 27.73 31.9798 27.54 31.9798H26.23H2.58C2.58 31.9798 2.58 31.9798 2.57 31.9798C2.38 31.9798 2.19 31.9598 2.01 31.9198C0.86 31.6698 0 30.6398 0 29.4198V9.99984L16.29 0.339844C16.3 0.349844 16.32 0.359844 16.33 0.359844L16.53 0.479844L30.06 9.94984L30.08 29.4398Z" fill="black" />
                    <path d="M30.08 29.44C30.08 30.65 29.23 31.67 28.09 31.92C27.91 31.96 27.73 31.98 27.54 31.98H26.23L26.25 31.92L26.43 31.33C27.33 28.36 27.59 25.12 27.22 22.04C26.8 18.48 25.54 15.08 23.56 12.09C22.59 10.64 21.41 9.34 20.04 8.25C19.9 8.13 19.75 8.01 19.6 7.9C19.58 7.89 19.57 7.87 19.55 7.87C19.46 7.8 19.36 7.73 19.27 7.67C17.96 6.73 16.42 6.13 14.8 5.94C14.47 5.9 14.13 5.93 13.8 6.04L11.95 6.66C11.06 6.96 10.35 7.62 10 8.49L9.37 10.06L6.11 11.69C5.25 12.12 4.91 13.16 5.33 14.02C5.36 14.08 5.4 14.15 5.44 14.21L5.87 14.85L7.22 16.87L8.08 16.79C7.69 17.15 7.36 17.58 7.13 18.05L7.01 18.29L6.56 18.99C4.19 22.7 3.58 27.34 4.87 31.54L4.99 31.92L5.01 31.98H2.58C2.58 31.98 2.58 31.98 2.57 31.98C2.38 31.98 2.19 31.96 2.01 31.92C0.86 31.67 0 30.64 0 29.42V10C0 9.1 0.48 8.27 1.25 7.81L13.73 0.36C14.54 -0.12 15.54 -0.12 16.35 0.36L28.82 7.75C29.6 8.21 30.07 9.05 30.07 9.95V9.96L30.08 29.44Z" fill="#073F40" />
                    <path d="M19.62 31.99H6.18L5.96 31.26C4.76 27.37 5.33 23.14 7.52 19.71L7.98 18.98C7.99 18.96 8 18.95 8.01 18.93L8.14 18.66C8.58 17.78 9.41 17.15 10.38 16.98V18.67C10.38 18.89 10.5 19.09 10.7 19.19L12.72 20.2C13.48 20.58 14.02 21.29 14.19 22.12L14.45 23.42C14.47 23.53 14.53 23.64 14.61 23.72L14.67 23.78C15.09 24.2 15.13 24.86 14.76 25.32L14.57 25.55L14.38 25.78C13.46 26.93 11.79 27.11 10.64 26.19C10.56 26.13 10.49 26.06 10.42 25.99L10.21 25.78C9.98 25.55 9.62 25.55 9.39 25.78C9.16 26.01 9.16 26.37 9.39 26.6L9.6 26.81C11.09 28.3 13.51 28.3 15 26.81L15.72 27.71C15.8 27.8 15.9 27.87 16.01 27.91L16.17 27.95C18.03 28.49 19.38 30.08 19.62 31.99Z" fill="white" />
                    <path d="M20.82 12.5298C20.82 13.1898 20.45 13.7898 19.86 14.0798C19.37 14.3198 18.8 14.3198 18.31 14.0798C17.72 13.7898 17.35 13.1898 17.35 12.5298V11.3198C17.35 10.2898 17.07 9.27984 16.54 8.39984L15.95 7.41984C15.93 7.38984 15.91 7.35984 15.9 7.33984C16.87 7.59984 17.78 8.03984 18.6 8.61984C18.84 8.78984 19.07 8.96984 19.3 9.14984C20.26 10.0098 20.82 11.2398 20.82 12.5298Z" fill="white" />
                    <path d="M25.31 31L25.01 31.99L20.78 32C20.54 29.57 18.85 27.53 16.51 26.84L15.75 25.89C16.36 25 16.28 23.8 15.55 23.01L15.32 21.88C15.09 20.7 14.32 19.69 13.23 19.15L11.53 18.3V16.55L13.9 16.33C14.1 16.31 14.28 16.19 14.37 16.01L14.95 14.85C15.09 14.56 14.97 14.22 14.68 14.08C14.4 13.94 14.05 14.05 13.91 14.34L13.48 15.21L7.76999 15.73L7.12 14.76L7.2 14.71C8.08 14.12 8.47999 13.02 8.18999 12L10.06 11.07C10.19 11.01 10.29 10.9 10.34 10.77L11.05 8.99998C11.27 8.44998 11.72 8.01998 12.29 7.82998L13.67 7.36998C13.88 7.29998 14.1 7.24998 14.32 7.22998C14.55 7.49998 14.76 7.77998 14.94 8.08998L15.53 9.06998C15.95 9.76998 16.17 10.58 16.17 11.39V12.6C16.17 14.2 17.47 15.5 19.07 15.5C20.67 15.5 21.97 14.2 21.97 12.6C21.97 12.37 21.95 12.13 21.93 11.9C22.16 12.2 22.38 12.51 22.6 12.83C24.49 15.67 25.68 18.9 26.08 22.29C26.42 25.2 26.16 28.17 25.31 31Z" fill="white" />
                    <path d="M12.98 11.6302C13.4384 11.6302 13.81 11.2586 13.81 10.8002C13.81 10.3418 13.4384 9.97021 12.98 9.97021C12.5216 9.97021 12.15 10.3418 12.15 10.8002C12.15 11.2586 12.5216 11.6302 12.98 11.6302Z" fill="black" />
                    <path d="M12.15 22.87C12.6084 22.87 12.98 22.4984 12.98 22.04C12.98 21.5816 12.6084 21.21 12.15 21.21C11.6916 21.21 11.32 21.5816 11.32 22.04C11.32 22.4984 11.6916 22.87 12.15 22.87Z" fill="black" />
                  </svg>
                  <h1 className="font-Quicksand font-bold text-base text-[#265758]">Pet & beyond</h1>
                </span>
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
            <div className="hidden lg:flex lg:justify-center items-center gap-[40px]">
              <div className="flex items-center gap-6">
                <div onClick={handleNavigate} className="cursor-pointer">
                  <span onClick={handleNavigate} className="flex items-center gap-2 cursor-pointer">
                    <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30.08 29.4398C30.08 30.6498 29.23 31.6698 28.09 31.9198C27.91 31.9598 27.73 31.9798 27.54 31.9798H26.23H2.58C2.58 31.9798 2.58 31.9798 2.57 31.9798C2.38 31.9798 2.19 31.9598 2.01 31.9198C0.86 31.6698 0 30.6398 0 29.4198V9.99984L16.29 0.339844C16.3 0.349844 16.32 0.359844 16.33 0.359844L16.53 0.479844L30.06 9.94984L30.08 29.4398Z" fill="black" />
                      <path d="M30.08 29.44C30.08 30.65 29.23 31.67 28.09 31.92C27.91 31.96 27.73 31.98 27.54 31.98H26.23L26.25 31.92L26.43 31.33C27.33 28.36 27.59 25.12 27.22 22.04C26.8 18.48 25.54 15.08 23.56 12.09C22.59 10.64 21.41 9.34 20.04 8.25C19.9 8.13 19.75 8.01 19.6 7.9C19.58 7.89 19.57 7.87 19.55 7.87C19.46 7.8 19.36 7.73 19.27 7.67C17.96 6.73 16.42 6.13 14.8 5.94C14.47 5.9 14.13 5.93 13.8 6.04L11.95 6.66C11.06 6.96 10.35 7.62 10 8.49L9.37 10.06L6.11 11.69C5.25 12.12 4.91 13.16 5.33 14.02C5.36 14.08 5.4 14.15 5.44 14.21L5.87 14.85L7.22 16.87L8.08 16.79C7.69 17.15 7.36 17.58 7.13 18.05L7.01 18.29L6.56 18.99C4.19 22.7 3.58 27.34 4.87 31.54L4.99 31.92L5.01 31.98H2.58C2.58 31.98 2.58 31.98 2.57 31.98C2.38 31.98 2.19 31.96 2.01 31.92C0.86 31.67 0 30.64 0 29.42V10C0 9.1 0.48 8.27 1.25 7.81L13.73 0.36C14.54 -0.12 15.54 -0.12 16.35 0.36L28.82 7.75C29.6 8.21 30.07 9.05 30.07 9.95V9.96L30.08 29.44Z" fill="#073F40" />
                      <path d="M19.62 31.99H6.18L5.96 31.26C4.76 27.37 5.33 23.14 7.52 19.71L7.98 18.98C7.99 18.96 8 18.95 8.01 18.93L8.14 18.66C8.58 17.78 9.41 17.15 10.38 16.98V18.67C10.38 18.89 10.5 19.09 10.7 19.19L12.72 20.2C13.48 20.58 14.02 21.29 14.19 22.12L14.45 23.42C14.47 23.53 14.53 23.64 14.61 23.72L14.67 23.78C15.09 24.2 15.13 24.86 14.76 25.32L14.57 25.55L14.38 25.78C13.46 26.93 11.79 27.11 10.64 26.19C10.56 26.13 10.49 26.06 10.42 25.99L10.21 25.78C9.98 25.55 9.62 25.55 9.39 25.78C9.16 26.01 9.16 26.37 9.39 26.6L9.6 26.81C11.09 28.3 13.51 28.3 15 26.81L15.72 27.71C15.8 27.8 15.9 27.87 16.01 27.91L16.17 27.95C18.03 28.49 19.38 30.08 19.62 31.99Z" fill="white" />
                      <path d="M20.82 12.5298C20.82 13.1898 20.45 13.7898 19.86 14.0798C19.37 14.3198 18.8 14.3198 18.31 14.0798C17.72 13.7898 17.35 13.1898 17.35 12.5298V11.3198C17.35 10.2898 17.07 9.27984 16.54 8.39984L15.95 7.41984C15.93 7.38984 15.91 7.35984 15.9 7.33984C16.87 7.59984 17.78 8.03984 18.6 8.61984C18.84 8.78984 19.07 8.96984 19.3 9.14984C20.26 10.0098 20.82 11.2398 20.82 12.5298Z" fill="white" />
                      <path d="M25.31 31L25.01 31.99L20.78 32C20.54 29.57 18.85 27.53 16.51 26.84L15.75 25.89C16.36 25 16.28 23.8 15.55 23.01L15.32 21.88C15.09 20.7 14.32 19.69 13.23 19.15L11.53 18.3V16.55L13.9 16.33C14.1 16.31 14.28 16.19 14.37 16.01L14.95 14.85C15.09 14.56 14.97 14.22 14.68 14.08C14.4 13.94 14.05 14.05 13.91 14.34L13.48 15.21L7.76999 15.73L7.12 14.76L7.2 14.71C8.08 14.12 8.47999 13.02 8.18999 12L10.06 11.07C10.19 11.01 10.29 10.9 10.34 10.77L11.05 8.99998C11.27 8.44998 11.72 8.01998 12.29 7.82998L13.67 7.36998C13.88 7.29998 14.1 7.24998 14.32 7.22998C14.55 7.49998 14.76 7.77998 14.94 8.08998L15.53 9.06998C15.95 9.76998 16.17 10.58 16.17 11.39V12.6C16.17 14.2 17.47 15.5 19.07 15.5C20.67 15.5 21.97 14.2 21.97 12.6C21.97 12.37 21.95 12.13 21.93 11.9C22.16 12.2 22.38 12.51 22.6 12.83C24.49 15.67 25.68 18.9 26.08 22.29C26.42 25.2 26.16 28.17 25.31 31Z" fill="white" />
                      <path d="M12.98 11.6302C13.4384 11.6302 13.81 11.2586 13.81 10.8002C13.81 10.3418 13.4384 9.97021 12.98 9.97021C12.5216 9.97021 12.15 10.3418 12.15 10.8002C12.15 11.2586 12.5216 11.6302 12.98 11.6302Z" fill="black" />
                      <path d="M12.15 22.87C12.6084 22.87 12.98 22.4984 12.98 22.04C12.98 21.5816 12.6084 21.21 12.15 21.21C11.6916 21.21 11.32 21.5816 11.32 22.04C11.32 22.4984 11.6916 22.87 12.15 22.87Z" fill="black" />
                    </svg>
                    <h1 className="font-Quicksand font-bold text-base text-[#265758]">Pet & beyond</h1>
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