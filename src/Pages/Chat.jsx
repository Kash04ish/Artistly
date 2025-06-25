// === pages/Chat.jsx ===
import { useEffect, useState } from "react";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const q = query(collection(db, "artistlyChat"), orderBy("created"));
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => doc.data()));
    });
    return () => unsub();
  }, []);

  const sendMessage = async () => {
    if (text.trim()) {
      await addDoc(collection(db, "artistlyChat"), {
        text,
        created: new Date()
      });
      setText("");
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-purple-700">💬 Chat with Artists</h2>
      <p className="text-sm text-gray-500 mb-4">Ask questions, discuss performances, or negotiate bookings directly with artists.</p>

      <div className="h-64 overflow-y-scroll border p-3 mb-4 rounded-xl shadow-inner bg-white">
        {messages.length > 0 ? (
          messages.map((m, i) => (
            <div key={i} className="mb-3 bg-purple-50 p-3 rounded-lg text-sm text-gray-800">
              {m.text}
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-sm">Start the conversation by sending a message.</p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border p-2 rounded-lg outline-none focus:ring-2 ring-purple-300"
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;