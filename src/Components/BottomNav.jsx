// === components/BottomNav.jsx ===
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiVideo,
  FiMap,
  FiMessageCircle,
  FiUser,
  FiBriefcase
} from "react-icons/fi";

const BottomNav = () => {
  const { pathname } = useLocation();

  const tabs = [
    { path: "/", icon: <FiHome />, label: "Home" },
    { path: "/reels", icon: <FiVideo />, label: "Reels" },
    { path: "/explore", icon: <FiMap />, label: "Explore" },
    { path: "/jobs", icon: <FiBriefcase />, label: "Onboard" },
    { path: "/chat", icon: <FiMessageCircle />, label: "Chat" },
    { path: "/profile", icon: <FiUser />, label: "Profile" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg flex justify-around py-3 px-4 z-20">
      {tabs.map((tab, i) => (
        <Link
          key={i}
          to={tab.path}
          className={`flex flex-col items-center text-xs font-medium transition-colors duration-200 ${
            pathname === tab.path ? "text-purple-600" : "text-gray-400 hover:text-purple-400"
          }`}
        >
          <div className="text-lg mb-1">{tab.icon}</div>
          {tab.label}
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
