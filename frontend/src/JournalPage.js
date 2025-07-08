import React, { useState, useEffect } from "react";

export default function JournalPage() {
  const [content, setContent] = useState("");
  const [entries, setEntries] = useState([]);
  const userEmail = localStorage.getItem("userEmail");

  const fetchEntries = async () => {
    const res = await fetch(`http://localhost:8080/journal/${userEmail}`);
    const data = await res.json();
    setEntries(data.reverse());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8080/journal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, userEmail }),
    });
    setContent("");
    fetchEntries();
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="p-8 max-w-xl mx-auto text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">📝 Journal</h1>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <textarea
          rows="5"
          placeholder="Write your thoughts..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 border rounded-md dark:bg-gray-800"
          required
        />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
          Save Entry
        </button>
      </form>
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Entries</h2>
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="mb-4 p-4 border rounded-md dark:bg-gray-800"
          >
            <p>{entry.content}</p>
            <p className="text-sm text-gray-500 mt-2">
              {new Date(entry.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
