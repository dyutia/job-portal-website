import React from 'react'
import { Briefcase, MapPin, Search, User } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-600/20">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq3eaqQRVY8Wd3Aj_IIxp7m65K9RedGZf2yQ&s"
              alt="Logo"
              className="h-8 w-8 rounded-full"
            />
            <span className="text-2xl font-bold text-gray-900">Jobstack</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Jobs
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Pages
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
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
            <button 
              className="rounded-full p-2 hover:bg-gray-100 transition-colors"
              aria-label="User menu"
            >
              <User className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Join our world-class team<br />of creators & dreamers
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find Jobs, Employment & Career Opportunities. Some of the companies
            we've helped recruit excellent applicants over the years.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-2 mb-8">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 relative">
                <Briefcase className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search your Keywords"
                  className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <div className="w-full md:w-64 relative">
                <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <select 
                  className="w-full appearance-none rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-8 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  defaultValue=""
                >
                  <option value="" disabled>Select location...</option>
                  <option value="ny">New York</option>
                  <option value="sf">San Francisco</option>
                  <option value="lon">London</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                  <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-2.5 rounded-lg font-medium transition-colors">
                Search
              </button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">Popular Searches:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Designer', 'Developer', 'Web', 'iOS', 'PHP', 'Senior Engineer'].map((term) => (
                <button
                  key={term}
                  className="px-4 py-1.5 text-sm rounded-full border border-gray-200 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://jobstack-shreethemes.vercel.app/static/media/bg6.e24eb6b04f651e6ad106.png"
            alt="Team of professionals"
            className="w-full h-auto"
          />
        </div>
      </main>
    </div>
  )
}