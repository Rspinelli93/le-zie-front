import { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const footerRef = useRef(null);

    const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
    <ScrollContext.Provider value={{ scrollToFooter, footerRef }}>
        {children}
    </ScrollContext.Provider>
    );
};

export const useScroll = () => useContext(ScrollContext);
