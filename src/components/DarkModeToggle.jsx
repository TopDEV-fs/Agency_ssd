import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle between dark and light modes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='flex justify-center items-center'>
      <button
        onClick={toggleDarkMode}
        className='p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-2 border-gray-800 dark:border-gray-200 transition duration-300
        hover:bg-gray-300 dark:hover:bg-gray-700 
             hover:text-gray-800 dark:hover:text-gray-200 
             hover:border-gray-600 dark:hover:border-gray-400'>
        {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
}
