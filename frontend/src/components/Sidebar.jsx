import { NavLink } from 'react-router-dom';
import { FiHome, FiBriefcase, FiShoppingCart, FiBell, FiCalendar, FiUser, FiLogOut, FiX } from 'react-icons/fi';
import Logo from '../assets/logo.jpg';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navLinkClass =
    'flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700';
  const activeClass = 'bg-gray-200 font-medium text-gray-900';

  return (
    <>
      
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
  className={`fixed z-40 top-0 left-0 h-full w-64 bg-white border-r shadow-md transform transition-transform duration-300 ease-in-out
    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:z-auto md:h-screen`}
>
        <div className="flex justify-between items-center px-6 py-4 md:hidden">
          <img src={Logo} alt="Logo" className="h-10" />
          <button onClick={() => setSidebarOpen(false)} className="text-gray-600">
            <FiX size={24} />
          </button>
        </div>

        <div className="hidden md:flex justify-center py-6">
          <img className="w-36 object-contain" src={Logo} alt="Logo" />
        </div>

        <nav className="mt-4 space-y-1 px-4">
          <NavLink to="/" className={({ isActive }) => isActive ? `${navLinkClass} ${activeClass}` : navLinkClass}>
            <FiHome /> Dashboard
          </NavLink>
          <NavLink to="/entities" className={({ isActive }) => isActive ? `${navLinkClass} ${activeClass}` : navLinkClass}>
            <FiBriefcase /> My Entities
          </NavLink>
          <NavLink to="/marketplace" className={({ isActive }) => isActive ? `${navLinkClass} ${activeClass}` : navLinkClass}>
            <FiShoppingCart /> Marketplace
          </NavLink>
          <NavLink to="/notifications" className={({ isActive }) => isActive ? `${navLinkClass} ${activeClass}` : navLinkClass}>
            <FiBell /> Notifications
          </NavLink>
          <NavLink to="/calendar" className={({ isActive }) => isActive ? `${navLinkClass} ${activeClass}` : navLinkClass}>
            <FiCalendar /> Calendar
          </NavLink>
        </nav>

        <div className="mt-auto px-4 pb-6 space-y-1">
          <NavLink to="/profile" className={({ isActive }) => isActive ? `${navLinkClass} ${activeClass}` : navLinkClass}>
            <FiUser /> Profile
          </NavLink>
          <NavLink to="/logout" className={() => `${navLinkClass} text-red-600 hover:bg-red-50`}>
            <FiLogOut /> Logout
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
