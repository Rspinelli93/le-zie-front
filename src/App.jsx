import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollProvider } from './contexts/ScrollContext';
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <SearchProvider>
      <ScrollProvider>
        <Outlet />
      </ScrollProvider>
    </SearchProvider>
  );
}

export default App;
