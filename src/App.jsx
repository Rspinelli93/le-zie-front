import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollProvider } from './contexts/ScrollContext';
import { SearchProvider } from "./contexts/SearchContext";
import { AuthProvider } from './contexts/authContext';
import ScrollToTop from './routes/ScrollToTop';

function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <ScrollProvider>
          <ScrollToTop />
          <Outlet />
        </ScrollProvider>
      </SearchProvider>
    </AuthProvider>
  );
}

export default App;
