// src/contexts/AppContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const lightTheme = {
  nav_color: '#000000',
  bg_color: '#ffffff',
  block_color: '#f2f2f2',
  hover_color: '#e6e6e6',
  primary_text: 'black',
  secondary_text: 'white',
};

const darkTheme = {
  nav_color: '#000000',
  bg_color: '#1a1a1a',
  block_color: '#333333',
  hover_color: '#404040',
  primary_text: 'white',
  secondary_text: 'white',
};

const redTheme = {
  nav_color: '#0C0C0C',
  bg_color: '#481E14',
  block_color: '#9B3922',
  hover_color: '#F2613F',
  primary_text: 'white',
  secondary_text: 'white',
};

const blueTheme = {
  nav_color: '#000d1a',
  bg_color: '#001a33',
  block_color: '#003366',
  hover_color: '#004d99',
  primary_text: '#e6e6e6',
  secondary_text: 'white',
};

const pinkTheme = {
  nav_color: '#694F8E',
  bg_color: '#FFDFD6',
  block_color: '#B692C2',
  hover_color: '#E3A5C7',
  primary_text: 'black',
  secondary_text: 'white',
};

const grayTheme = {
  nav_color: '#404040',
  bg_color: '#bfbfbf',
  block_color: '#e6e6e6',
  hover_color: '#f6f6f6',
  primary_text: 'black',
  secondary_text: 'white',
};

const font1 = 'Playfair Display'
const font2 = 'Open Sans'
const font3 = 'Inconsolata'
const font4 = 'Bad Script'
const font5 = 'Handlee'
const font6 = 'Montserrat'
const font7 = 'Baskervville'
const font8 = 'Merienda'

export const AppProvider = ({ children }) => {
  
  const [theme, setTheme] = useState(redTheme);
  const [font, setFont] = useState(font5); 

  return (
    <AppContext.Provider value={{ theme, setTheme, font, setFont }}>
      {children}
    </AppContext.Provider>
  );
};
