import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Banner.css";
import { useRef } from "react";
const Navbar = ({ handleSearch }) => {
  const searchRef = useRef(null);
  const handleLocalSearch = () => {
    const propRef = searchRef.current.value;
    handleSearch(propRef);
  };
  return (
    <div>
      <div className="bg">
        <div className="header">
          <nav className="flex flex-col md:flex-row gap-8 justify-between items-center max-w-[1600px] mx-auto pt-[50px] p-5">
            <img src="https://i.ibb.co/8gYSBx4/Logo.png" alt="logo" />
            <ul className="flex gap-12">
              <li className="font-bold text-lg">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "underline text-[#FF444A]"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="font-bold text-lg">
                <NavLink
                  to="/donation"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "underline text-[#FF444A]"
                      : ""
                  }
                >
                  Donation
                </NavLink>
              </li>
              <li className="font-bold text-lg">
                <NavLink
                  to="/statistics"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "underline text-[#FF444A]"
                      : ""
                  }
                >
                  Statistics
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center items-center">
            <div className="mt-[242px] text-center">
              <h1 className="text-5xl text-[#0B0B0B] font-bold mb-10">
                I Grow By Helping People In Need
              </h1>
              <div className="join mb-[210px]">
                <input
                  ref={searchRef}
                  name="name"
                  className="input input-bordered join-item"
                  placeholder="Search here...."
                />
                <button
                  onClick={handleLocalSearch}
                  className=" join-item rounded-r-full bg-[#FF444A] text-white text-base font-semibold py-[12px] px-[28px]"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  handleSearch: PropTypes.object,
};
export default Navbar;
