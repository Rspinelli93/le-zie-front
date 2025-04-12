import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useLocation  } from 'react-router-dom';
import { useScroll } from '../../contexts/ScrollContext';
import { useSearch } from "../../contexts/SearchContext";

import Logo from "../../assets/icons/logo_lezie.png"

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const { scrollToFooter } = useScroll();
  const { searchQuery, setSearchQuery } = useSearch();

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
      <img src={Logo} alt="logo_lezie" onClick={() => navigate("/")} />
  
      {!isAdminPage && (
        <div className='header-input'>
          <input
            type="text"
            placeholder='Search a product...'
            value={searchQuery}
            onChange={handleChange}
          />
          <button><FaSearch /></button>
        </div>
      )}
  
      {isAdminCollection && (
        <>
          <div className='header-input'>
            <input
              type="text"
              placeholder='Search a product...'
              value={searchQuery}
              onChange={handleChange}
            />
            <button><FaSearch /></button>
          </div>
          <p onClick={handleAddRedirect}>ADD NEW</p>
          <p onClick={handleAdminLogout}>LOGOUT</p>
        </>
      )}
  
      {isAdminForm && (
        <>
          <p onClick={() => navigate('/admin/collection')}>COLLECTION</p>
          <p onClick={handleAdminLogout}>LOGOUT</p>
        </>
      )}
  
      {!isAdminPage && (
        <p onClick={scrollToFooter}>CONTACT US</p>
      )}
    </header>
  );
}

export default Header;