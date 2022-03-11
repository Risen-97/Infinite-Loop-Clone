import React, { useEffect, useState } from "react";
import { Link } from "react-scroll/modules";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const stickyHandler = () => {
    if (window.scrollY >= 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", stickyHandler);

    return () => window.removeEventListener("scroll", stickyHandler);
  }, [sticky]);
  return (
    <header
      className={`group z-30 flex justify-between items-center pad-nav text-xl fixed top-0 w-full animate ${
        sticky ? "text-main-color bg-white shadow-md" : "text-white"
      }`}
    >
      <div className="font-bold ml-7 z-20">Infinite Loop</div>
      <ul
        // -bottom-64
        className={`absolute space-x-2  top-full -translate-y-[0] animate bg-white w-full py-4  lg:w-fit text-main-color lg:text-inherit lg:bg-transparent lg:py-0 lg:static flex items-center justify-center gap-6 lg:gap-0 flex-col lg:flex-row ${
          !showMenu && "-translate-y-[125%] lg:-translate-y-0"
        }`}
      >
        <li className="w-full lg:w-fit">
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="link"
          >
            Home
          </Link>
        </li>
        <li className="w-full lg:w-fit">
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="link"
          >
            What We Do
          </Link>
        </li>
        <li className="w-full lg:w-fit">
          <Link
            activeClass="active"
            to="testimonials"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="link"
          >
            Testimonials
          </Link>
        </li>
        <li className="w-full lg:w-fit">
          <a className="link" href="#">
            Gallery
          </a>
        </li>
        <li className="w-full lg:w-fit">
          <Link
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="link"
          >
            Contact
          </Link>
        </li>
      </ul>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden mr-7 text-2xl z-20"
      >
        {!showMenu ? <AiOutlineMenu className="" /> : <AiOutlineClose />}
      </button>
    </header>
  );
};

export default Navbar;
