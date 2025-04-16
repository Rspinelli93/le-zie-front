import "../../index.css"
import "./Header.css";
import { useNavigate, useLocation  } from 'react-router-dom';

import { FaBars } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { TbLayoutGridAdd } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { GiClothes } from "react-icons/gi";

import { useScroll } from '../../contexts/ScrollContext';
import { useSearch } from "../../contexts/SearchContext";

import useIsMobile from "../../hooks/useIsMobile";
import Logo from "../../assets/icons/logo_lezie.png"

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const { scrollToFooter } = useScroll();
  const { searchQuery, setSearchQuery } = useSearch();
  const isMobile = useIsMobile(); 
  
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    if (window.location.pathname !== "/collection") {
      navigate("/collection");
    }
  };
  const isAdminCollection = location.pathname === '/admin/collection';
  const isAdminForm = 
    location.pathname === '/admin/add' || 
    location.pathname.startsWith('/admin/edit');
  const isAdminPage = location.pathname.startsWith('/admin');

  const handleAdminLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  const handleAddRedirect = () => {
    navigate('/admin/add')
  }

  return (
    <header className="header">
      {isMobile && (
        <FaBars className="header-icon" />
      )}
      <img 
      src={Logo} 
      alt="logo_lezie" 
      onClick={() => navigate("/")} 
      style={{ display: isMobile && isAdminCollection || isMobile && isAdminForm ? "none" : "inline-block" }}
      />
  
      {!isAdminPage && (
          <input
            className='header-input'
            type="text"
            placeholder='Search a product...'
            value={searchQuery}
            onChange={handleChange}
          />
      )}
  
      {isAdminCollection && (
        <>
            <input
              className='header-input'
              type="text"
              placeholder='Search a product...'
              value={searchQuery}
              onChange={handleChange}
            />
          {!isMobile ? <p onClick={handleAddRedirect}>ADD NEW</p> : <TbLayoutGridAdd onClick={handleAddRedirect} className="header-icon"/> }
          {!isMobile ? <p onClick={handleAdminLogout}>LOGOUT</p> : <MdLogout onClick={handleAdminLogout} className="header-icon"/> }
        </>
      )}
  
      {isAdminForm && (
        <>
          {!isMobile ? <p onClick={() => navigate('/admin/collection')}>COLLECTION</p> : <GiClothes onClick={() => navigate('/admin/collection')} className="header-icon"/> }
          {!isMobile ? <p onClick={handleAdminLogout}>LOGOUT</p> : <MdLogout onClick={handleAdminLogout} className="header-icon"/> }
        </>
      )}
  
      {!isAdminPage && (
      isMobile ? (
        <GrContact
          className="header-icon"
          onClick={scrollToFooter}
        />
      ) : (
        <p onClick={scrollToFooter}>CONTACT US</p>
      )
    )}
    </header>
  );
}

export default Header;