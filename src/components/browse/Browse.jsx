import "../../index.css"
import './browse.css'
import { renderPageNumbers } from "../../utils/pagination.jsx";
import { useProductRedirect } from '../../hooks/useProductRedirect.jsx'

const Browse = ({ 
    paginatedProducts, 
    notFound, 
    error, 
    totalPages, 
    currentPage, 
    handlePageChange 
}) => {
    const redirectToProduct = useProductRedirect();

    return (
    <div className="collection-clothes">
        {error && (
        <div className="error-message">
            <p>Something went wrong: {error}</p>
        </div>
        )}
        {notFound && (
        <div className="error-message">
            <p>PRODUCT NOT FOUND 🥲</p>
        </div>
        )}
        <div className="product-container">
        {paginatedProducts.map(product => (
            <div
            key={product._id}
            onClick={() => redirectToProduct(product._id)}
            className="product-box"
            >
            <img src={product.images[0]} alt={product.name} />
            <h6>{product.name}</h6>
            <p>{product.price}.-</p>
            </div>
        ))}
        </div>

        {totalPages > 1 && (
        <div className="pagination-controls">
            <button 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
            >
            Prev
            </button>
            {renderPageNumbers(totalPages, currentPage, handlePageChange)}
            <button 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
            >
            Next
            </button>
        </div>
        )}
    </div>
    );
};

export default Browse;