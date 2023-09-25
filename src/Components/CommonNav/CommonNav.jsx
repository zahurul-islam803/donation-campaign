import { NavLink } from "react-router-dom";
const CommonNav = () => {
  return (
    <div>
      <nav className="flex flex-col md:flex-row gap-8 justify-between items-center max-w-[1600px] mx-auto pt-[40px] p-5">
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
    </div>
  );
};

export default CommonNav;
