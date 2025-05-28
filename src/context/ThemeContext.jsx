import React, { createContext, useState, useMemo, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('pokedex-theme');
    return storedTheme || 'moderno'; 
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'moderno' ? 'retro' : 'moderno'));
  };

  useEffect(() => {
    localStorage.setItem('pokedex-theme', theme);
    document.body.classList.remove('theme-moderno', 'theme-retro');
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};