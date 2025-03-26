import React from "react";
import Link from "next/link";

const YouTubeForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-red-600 p-4">
          <h1 className="text-2xl font-bold text-white text-center">YouTube Creator Form</h1>
        </div>
        
        <form className="p-6 space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 block">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 outline-none"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium text-gray-700 block">Username</label>
            <input 
              type="text" 
              id="username" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 outline-none"
              placeholder="YourCreatorName"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="channel" className="text-sm font-medium text-gray-700 block">Channel Name</label>
            <input 
              type="text" 
              id="channel" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 outline-none"
              placeholder="My Awesome Channel"
            />
          </div>
          
          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              Submit Application
            </button>
          </div>
        </form>
        
        <div className="px-6 pb-6">
          <Link href="/" className="block text-center text-sm text-gray-600 hover:text-red-600 transition-colors duration-200">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YouTubeForm;
