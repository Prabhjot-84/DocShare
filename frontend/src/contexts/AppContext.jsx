// src/contexts/AppContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const themes = {
  light : {
    nav_color: '#f2f2f2',
    bg_color: 'white',
    block_color: '#e6e6e6',
    hover_color: '#d9d9d9',
    primary_text: 'black',
    secondary_text: 'black',
  },
  dark : {
    nav_color: '#000000',
    bg_color: '#1a1a1a',
    block_color: '#333333',
    hover_color: '#404040',
    primary_text: 'white',
    secondary_text: 'white',
  },
  red : {
    nav_color: '#0C0C0C',
    bg_color: '#481E14',
    block_color: '#9B3922',
    hover_color: '#F2613F',
    primary_text: 'white',
    secondary_text: 'white',
  },
  blue : {
    nav_color: '#000d1a',
    bg_color: '#001a33',
    block_color: '#00264d',
    hover_color: '#003366',
    primary_text: '#e6e6e6',
    secondary_text: 'white',
  },
  pink : {
    nav_color: '#694F8E',
    bg_color: '#FFDFD6',
    block_color: '#B692C2',
    hover_color: '#E3A5C7',
    primary_text: 'black',
    secondary_text: 'white',
  },
  gray : {
    nav_color: '#404040',
    bg_color: '#bfbfbf',
    block_color: '#e6e6e6',
    hover_color: '#f6f6f6',
    primary_text: 'black',
    secondary_text: 'white',
  }
}


// These fonts right here aren't functional i.e. implementation of this is in Navbar File
// They are just here for no specific function

const font1 = 'Playfair Display' // serif
const font2 = 'Open Sans' // Sans-serif
const font3 = 'Inconsolata'  // Monospace
const font4 = 'Bad Script'  // Script
const font5 = 'Handlee'  // Handwriting
const font6 = 'Montserrat'  // Geometric
const font7 = 'Baskervville'  // Transitional
const font8 = 'Merienda'  // Modern

const defaultFont = 'Open Sans'


export const AppProvider = ({ children }) => { 
  
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? JSON.parse(storedTheme) : themes.red;
  });
  const [font, setFont] = useState(localStorage.getItem('font') || defaultFont);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const storedFont = localStorage.getItem('font');

    if (storedTheme) {
      setTheme(JSON.parse(storedTheme));
    }
    if (storedFont) {
      setFont(storedFont);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    localStorage.setItem('font', font);
  }, [theme, font]);

  return (
    <AppContext.Provider value={{ theme, setTheme, font, setFont, themes }}>
      {children}
    </AppContext.Provider>
  );
};
