import { useState, useEffect } from 'react';

const THEME_KEY = 'theme';

const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const getCurrentTheme = () => {
  const savedTheme = window.localStorage.getItem(THEME_KEY);

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return getSystemTheme();
};

export const useDarkMode = () => {
  const [theme, setTheme] = useState(getCurrentTheme);

  const setMode = (mode) => {
    window.localStorage.setItem(THEME_KEY, mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    setMode(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = () => {
      if (!window.localStorage.getItem(THEME_KEY)) {
        setTheme(getSystemTheme());
      }
    };

    const handleStorageChange = (event) => {
      if (event.key === THEME_KEY || event.key === null) {
        setTheme(getCurrentTheme());
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    window.addEventListener('storage', handleStorageChange);

    // Reconcile the theme after registering listeners.
    setTheme(getCurrentTheme());

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return [theme, toggleTheme];
};
