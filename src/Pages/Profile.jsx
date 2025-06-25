// === pages/Profile.jsx ===
import React from "react";

const Profile = () => {
  return (
    <div className="px-4 pt-4 pb-2 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-purple-700">Artist Profile 🎤</h2>
      <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-2">
        <p className="text-lg font-semibold text-gray-800">Name: Kashish Verma</p>
        <p className="text-gray-600">Category: Singer</p>
        <p className="text-gray-600">Location: Gorakhpur</p>
        <p className="text-gray-600">Languages: English, Hindi</p>
        <p className="text-gray-600">Fee Range: ₹45,000 – ₹60,000</p>
        <p className="text-gray-600">Rating: 4.9 ★</p>

        <div className="mt-4">
          <h3 className="text-md font-semibold text-gray-700 mb-1">About</h3>
          <p className="text-sm text-gray-500">
            Kashish is an emerging classical performer with 1 year of experience in intimate gatherings and cultural events. Celebrated for her soulful renditions and graceful presence, she brings depth and authenticity to every performance.
          </p>
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300 shadow">
          Ask for Quote
        </button>
      </div>
      <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-2">
        <p className="text-lg font-semibold text-gray-800">Name: Elena Vasquez</p>
        <p className="text-gray-600">Category: Singer</p>
        <p className="text-gray-600">Location: Delhi</p>
        <p className="text-gray-600">Languages: English, Hindi</p>
        <p className="text-gray-600">Fee Range: ₹15,000 – ₹30,000</p>
        <p className="text-gray-600">Rating: 4.8 ★</p>

        <div className="mt-4">
          <h3 className="text-md font-semibold text-gray-700 mb-1">About</h3>
          <p className="text-sm text-gray-500">
            Elena is a versatile performer with over 5 years of experience in weddings, live concerts, and private events. Known for her soulful voice and engaging stage presence.
          </p>
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300 shadow">
          Ask for Quote
        </button>
      </div>
    </div>
  );
};

export default Profile;
