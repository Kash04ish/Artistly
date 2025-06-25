import React, { useState, useEffect } from "react";

const dummyVideos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
  "https://media.w3.org/2010/05/bunny/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
  "https://media.w3.org/2010/05/bunny/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
  "https://media.w3.org/2010/05/bunny/movie.mp4",
];

const Reels = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      setVideos(dummyVideos);
    }, 500);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">🎬 Top Artist Performances🔥</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((url, i) => (
          <video
            key={i}
            controls
            className="rounded-xl shadow-lg w-full h-64 object-cover"
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </div>
  );
};

export default Reels;
