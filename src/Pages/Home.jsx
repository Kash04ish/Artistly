import React from "react";
import { FaStar } from "react-icons/fa";
import VoiceSearchInput from "../Components/VoiceSearchInput";
import Artist from "../assets/artist.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-4 pb-24">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl p-10 shadow-md mb-6">
        <div className="font-semibold text-sm mb-1">🎤 Artistly</div>
        <h2 className="text-2xl font-bold mb-2">Discover & Book Exceptional Artists</h2>
        <p className="text-sm mb-4">Voice-powered search to find singers, DJs, dancers & speakers near you</p>

        {/* Voice search input */}
        <VoiceSearchInput />

        <Link to="/explore">
          <button className="mt-4 bg-white text-purple-700 px-4 py-2 rounded-lg font-medium hover:bg-purple-100 transition">
            Explore Artists
          </button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <div className="bg-white p-5 rounded-xl text-center shadow">
          <p className="text-purple-600 font-bold text-lg">1,500+</p>
          <p className="text-xs text-gray-500">Artists Listed</p>
        </div>
        <div className="bg-white p-5 rounded-xl text-center shadow">
          <p className="text-green-600 font-bold text-lg">900+</p>
          <p className="text-xs text-gray-500">Bookings Completed</p>
        </div>
        <div className="bg-white p-5 rounded-xl text-center shadow">
          <p className="text-blue-600 font-bold text-lg flex justify-center items-center gap-1">
            4.9 <FaStar />
          </p>
          <p className="text-xs text-gray-500">Avg Rating</p>
        </div>
      </div>

      {/* Category Cards */}
      <h2 className="text-2xl font-semibold mb-4 text-purple-700">Artist Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {["Singers", "Dancers", "Speakers", "DJs"].map((category, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:bg-purple-50 transition text-center"
          >
            <img
              src={Artist}
              alt={category}
              className="rounded-lg mb-2 w-full h-24 object-cover"
            />
            <p className="text-sm font-semibold text-gray-700">{category}</p>
          </div>
        ))}
      </div>

      {/* Trending Section */}
      <h2 className="text-2xl font-semibold mb-2 text-purple-700">Trending Artists</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <img
            key={i}
            src={Artist}
            alt="Trending Artist"
            className="rounded-xl shadow-md w-full h-40 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
