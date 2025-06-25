import React from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { FiMic, FiSearch } from "react-icons/fi";

const VoiceSearchInput = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const handleMic = () => {
    resetTranscript(); // optional: clear previous
    SpeechRecognition.startListening({ continuous: false, language: "en-IN" });
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <p className="text-blue-500">Your browser doesn't support speech recognition.</p>;
  }

  return (
    <div className="flex items-center bg-white rounded-full overflow-hidden px-4 py-2 mt-4 cursor-pointer">
      <input
        type="text"
        value={transcript}
        onChange={() => {}}
        placeholder="Search for workers, jobs..."
        className="flex-1 text-black px-2 outline-none"
      />
      <FiSearch className="text-gray-500" size={18} />
      <button onClick={handleMic} className="ml-3 text-blue-500 cursor-pointer">
        <FiMic size={22} />
      </button>
      {listening && (
        <span className="ml-2 text-blue-500 animate-pulse">Listening...</span>
      )}
    </div>
  );
};

export default VoiceSearchInput;
