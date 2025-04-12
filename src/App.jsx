import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollProvider } from './contexts/ScrollContext';
import { SearchProvider } from "./contexts/SearchContext";
import { AuthProvider } from './contexts/authContext';

function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <ScrollProvider>
          <Outlet />
        </ScrollProvider>
      </SearchProvider>
    </AuthProvider>
  );
}

export default App;
