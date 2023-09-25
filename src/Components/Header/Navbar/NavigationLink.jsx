import { NavLink } from "react-router-dom";

const NavigationLink = () => {
  return (
    <div>
      <ul className="flex gap-5 text-xl font-semibold">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? "text-red-600 underline" : isPending ? "pending" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Donation"
            className={({ isActive, isPending }) =>
              isActive ? "text-red-600 underline" : isPending ? "pending" : ""
            }
          >
            Donation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Statistics"
            className={({ isActive, isPending }) =>
              isActive ? "text-red-600 underline" : isPending ? "pending" : ""
            }
          >
            Statistics
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavigationLink;
