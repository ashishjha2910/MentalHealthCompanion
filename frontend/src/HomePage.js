import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">MindEase</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Resources</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Journal</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Community</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a>
          </nav>
          <div className="space-x-2 flex items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-sm px-3 py-1.5 border rounded-md bg-gray-200 dark:bg-gray-700 dark:text-white"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
            <Link to="/login">
              <button className="text-sm px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                Login
              </button>
            </Link>
            <Link to="/login">
              <button className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center px-4 py-20 bg-indigo-100 dark:bg-indigo-900">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Mental Health Matters</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Track your thoughts, learn coping skills, and connect with support—all in one place.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Get Started
          </button>
          <button className="px-6 py-3 border rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center">
          <div className="text-4xl mb-3">✅</div>
          <h3 className="text-xl font-semibold mb-2">Mood Tracker</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Log your emotions daily and track your mental health journey.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center">
          <div className="text-4xl mb-3">📚</div>
          <h3 className="text-xl font-semibold mb-2">Resources</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Explore self-help guides, articles, and calming exercises.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center">
          <div className="text-4xl mb-3">👥</div>
          <h3 className="text-xl font-semibold mb-2">Community</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Join discussions and connect with a safe, supportive community.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-white dark:bg-gray-800 border-t mt-12">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2025 MindEase. All rights reserved.
        </p>
      </footer>
    </div>
  );
}



