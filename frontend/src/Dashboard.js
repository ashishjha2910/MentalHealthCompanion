import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [email, setEmail] = useState('');
  const [moods, setMoods] = useState([]);
  const [journalContent, setJournalContent] = useState('');
  const [journalEntries, setJournalEntries] = useState([]);
  const navigate = useNavigate();

  // Fetch user email from localStorage/session
  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      navigate('/login');
    } else {
      setEmail(userEmail);
      fetchMoods(userEmail);
      fetchJournal(userEmail);
    }
  }, [navigate]);

  const fetchMoods = async (email) => {
    try {
      const res = await fetch(`http://localhost:8080/moods/${email}`);
      const data = await res.json();
      setMoods(data);
    } catch (err) {
      console.error('Error fetching moods:', err);
    }
  };

  const fetchJournal = async (email) => {
    try {
      const res = await fetch(`http://localhost:8080/journal/${email}`);
      const data = await res.json();
      setJournalEntries(data);
    } catch (err) {
      console.error('Error fetching journal:', err);
    }
  };

  const handleJournalSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8080/journal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: journalContent,
          userEmail: email,
        }),
      });

      if (res.ok) {
        setJournalContent('');
        fetchJournal(email);
      }
    } catch (err) {
      console.error('Error saving journal entry:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return (
    <div className="p-6 text-gray-800 dark:text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 border rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          Logout
        </button>
      </div>

      <p className="mb-6 text-lg">Hello, {email} 👋</p>

      {/* Mood Tracker Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Recent Moods</h2>
        <div className="flex gap-2 flex-wrap">
          {moods.slice(0, 5).map((mood, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-indigo-100 dark:bg-indigo-800 rounded-full text-sm"
            >
              {mood.mood} — {new Date(mood.timestamp).toLocaleDateString()}
            </span>
          ))}
        </div>
      </div>

      {/* Journal Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Write in Your Journal</h2>
        <form onSubmit={handleJournalSubmit} className="mb-4">
          <textarea
            value={journalContent}
            onChange={(e) => setJournalContent(e.target.value)}
            rows="4"
            className="w-full p-2 border rounded-md dark:bg-gray-800"
            placeholder="How are you feeling today?"
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Save Entry
          </button>
        </form>

        <div>
          <h3 className="text-lg font-semibold mb-2">Recent Journal Entries</h3>
          {journalEntries.slice(0, 5).map((entry, idx) => (
            <div key={idx} className="mb-3 p-3 border rounded-md dark:bg-gray-800">
              <p className="text-sm text-gray-500">
                {new Date(entry.createdAt).toLocaleString()}
              </p>
              <p>{entry.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
