import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { logo } from '../assets/images';
import { navLinks } from '../Constants/data';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between p-4"
        aria-label="main"
      >
        <div className="flex items-center gap-10">
          <img src={logo} alt="Shortly" />
          <ul className="hidden items-center sm:flex ">
            {navLinks.map((links, index) => {
              return (
                <li
                  key={links.id}
                  className={`${
                    index === links.length - 1
                      ? 'mr-0'
                      : 'mr-6'
                  } text-lg text-GrayishViolet hover:text-VeryDarkBlue`}
                >
                  <a href={links.link}>{links.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* hamburger */}
        <button className="text-3xl sm:hidden">
          <FaBars />
        </button>
        <ul className="hidden list-none items-center gap-6 sm:flex ">
          <li className="text-GrayishViolet hover:text-VeryDarkBlue">
            <a href="#">Login</a>
          </li>
          <li className="rounded-full bg-Cyan py-2 px-4 text-xl text-white hover:bg-opacity-70">
            <a href="#">sign up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
