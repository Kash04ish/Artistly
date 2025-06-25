import React, { useEffect, useState } from "react";
import VoiceSearchInput from "../Components/VoiceSearchInput";
import { FiMapPin } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const allWorkers = [
  { id: 1, name: "DJ Sonic Vibe", job: "DJ", rating: 4.9, location: "Mumbai", fee: "₹15,000" },
  { id: 2, name: "Elena Vasquez", job: "Singer", rating: 4.8, location: "Delhi", fee: "₹20,000" },
  { id: 3, name: "Luna Dance Crew", job: "Dance Group", rating: 4.7, location: "Bangalore", fee: "₹30,000" },
  { id: 4, name: "Rajiv Kapoor", job: "Motivational Speaker", rating: 4.6, location: "Hyderabad", fee: "₹25,000" },
];

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWorkers, setFilteredWorkers] = useState(allWorkers);

  useEffect(() => {
    const filtered = allWorkers.filter(
      (w) =>
        w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        w.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
        w.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredWorkers(filtered);
  }, [searchTerm]);

  return (
    <div className="p-4 pb-24 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-purple-700">🎨 Artist Manager Dashboard</h1>

      {/* Manual Search */}
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name, category, or city..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm outline-none focus:border-purple-600"
        />
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-5 font-semibold text-gray-600 text-sm mb-2 px-2">
        <span>Name</span>
        <span>Category</span>
        <span>City</span>
        <span>Fee</span>
        <span className="text-center">Action</span>
      </div>

      {/* Table Rows */}
      {filteredWorkers.length > 0 ? (
        filteredWorkers.map((worker) => (
          <div
            key={worker.id}
            className="grid grid-cols-5 items-center bg-white shadow-sm p-3 mb-2 rounded-lg border hover:shadow-md transition"
          >
            <div className="text-sm font-medium text-gray-800">{worker.name}</div>
            <div className="text-sm text-gray-600">{worker.job}</div>
            <div className="text-sm text-gray-600 flex items-center"><FiMapPin className="mr-1" />{worker.location}</div>
            <div className="text-sm text-green-600 font-medium">{worker.fee}</div>
            <div className="text-center">
              <button className="bg-purple-600 text-white text-xs px-3 py-1 rounded hover:bg-purple-700" >
                  <a href="/profile" className="bg-purple-600 text-white text-xs px-3 py-1 rounded hover:bg-purple-700 inline-block text-center">View Profile</a>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 mt-6">No Artists found for your search.</p>
      )}
    </div>
  );
};

export default Explore;
