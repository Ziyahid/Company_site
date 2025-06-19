import { NavLink } from 'react-router-dom';
import { FiHome, FiBriefcase, FiShoppingCart, FiBell, FiCalendar, FiUser, FiLogOut } from 'react-icons/fi';
import Logo from '../assets/logo.jpg';

const Sidebar = () => {
  const navLinkClass =
    'flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700';

  const activeClass = 'bg-gray-200 font-medium text-gray-900';

  return (
    <div className="w-64 bg-white shadow-md flex flex-col justify-between h-screen border-r">
      <div>
        <div className="w-[80%] mx-auto py-6">
          <img className="w-full object-contain" src={Logo} alt="Logo" />
        </div>

        <nav className="mt-6 space-y-1 px-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${navLinkClass} ${activeClass}` : navLinkClass
            }
          >
            <FiHome /> Dashboard
          </NavLink>
          <NavLink
            to="/entities"
            className={({ isActive }) =>
              isActive ? `${navLinkClass} ${activeClass}` : navLinkClass
            }
          >
            <FiBriefcase /> My Entities
          </NavLink>
          <NavLink
            to="/marketplace"
            className={({ isActive }) =>
              isActive ? `${navLinkClass} ${activeClass}` : navLinkClass
            }
          >
            <FiShoppingCart /> Marketplace
          </NavLink>
          <NavLink
            to="/notifications"
            className={({ isActive }) =>
              isActive ? `${navLinkClass} ${activeClass}` : navLinkClass
            }
          >
            <FiBell /> Notifications
          </NavLink>
          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              isActive ? `${navLinkClass} ${activeClass}` : navLinkClass
            }
          >
            <FiCalendar /> Calendar
          </NavLink>
        </nav>
      </div>

      <div className="px-4 pb-6 space-y-1">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? `${navLinkClass} ${activeClass}` : navLinkClass
          }
        >
          <FiUser /> Profile
        </NavLink>
        <NavLink
          to="/logout"
          className={() => `${navLinkClass} text-red-600 hover:bg-red-50`}
        >
          <FiLogOut /> Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
