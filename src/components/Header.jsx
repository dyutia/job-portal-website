import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Settings, LogOut, User, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq3eaqQRVY8Wd3Aj_IIxp7m65K9RedGZf2yQ&s"
              alt="Logo"
              className="h-8 w-8 rounded-full"
            />
          </Link>
          <Link to="/" className="text-2xl font-bold text-gray-900">Jobstack</Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Jobs
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Pages
          </a>
          <a href="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              type="search"
              placeholder="Search..."
              className="w-[200px] rounded-full bg-gray-50 py-2 pl-9 pr-4 text-sm outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded-full"
              >
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-500 hover:text-white"
                  >
                    <User className="inline-block mr-2 h-4 w-4" />
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-500 hover:text-white"
                  >
                    <Settings className="inline-block mr-2 h-4 w-4" />
                    Settings
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-emerald-500 hover:text-white"
                  >
                    <LogOut className="inline-block mr-2 h-4 w-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link 
              to="/login"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600 transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

