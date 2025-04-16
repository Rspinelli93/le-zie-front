import { createContext, useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const footerRef = useRef(null);
    const { pathname } = useLocation();

    const scrollToFooter = () => {
        footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <ScrollContext.Provider value={{ scrollToFooter, scrollToTop, footerRef }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () => useContext(ScrollContext);