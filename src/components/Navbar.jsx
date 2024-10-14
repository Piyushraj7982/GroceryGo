import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  const toggleLocationModal = () => {
    setIsLocationModalOpen(!isLocationModalOpen); // Toggle location modal visibility
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-green-600 p-4 flex justify-between items-center">
        {/* Menu Icon */}
        <button onClick={toggleSidebar} className="mr-4 focus:outline-none text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Logo & Menu */}
        <div className="flex items-center space-x-4">
          <div className="text-white text-xl font-bold">GroceryGo</div>
          <ul className="hidden md:flex space-x-4 text-white">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="p-2 rounded-md w-full"
          />
        </div>

        {/* Location & Login/Signup */}
        <div className="space-x-4">
          <button 
            onClick={toggleLocationModal} 
            className="bg-white text-green-600 px-4 py-2 rounded-md"
          >
            Select Location
          </button>

          <Link to="/login">
            <button className="bg-white text-green-600 px-4 py-2 rounded-md">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-white text-green-600 px-4 py-2 rounded-md">
              Sign Up
            </button>
          </Link>
          <Link to="/profile">
            <button className="bg-white text-green-600 px-4 py-2 rounded-md">
              Profile
            </button>
          </Link>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 bg-green-600 h-full z-50 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 text-white">
          <h2 className="text-xl font-semibold">Menu</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <Link to="/dashboard" className="block text-lg hover:underline">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile" className="block text-lg hover:underline">Profile</Link>
            </li>
            <li>
              <Link to="/settings" className="block text-lg hover:underline">Settings</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar Overlay (Optional for closing when clicking outside) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}

      {/* Location Modal */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Select a location for delivery</h2>
            <p className="mb-4 text-gray-600">
              Choose your address location to see product availability and delivery options
            </p>
            <input
              type="text"
              placeholder="Search for area or street name"
              className="p-2 w-full border rounded-md mb-4"
            />
            <div className="flex justify-end">
              <button 
                className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={toggleLocationModal}
              >
                Confirm
              </button>
              <button 
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
                onClick={toggleLocationModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
