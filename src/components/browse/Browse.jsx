import "../../index.css"
import './browse.css'
import { renderPageNumbers } from "../../utils/pagination.jsx";
import { useProductRedirect } from '../../hooks/useProductRedirect.jsx'

const Browse = ({ 
    paginatedProducts, 
    notFound, 
    error,
    isLoading,
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
        {isLoading && (
        <div className="loader">
        </div>
        )}
        {notFound && (
        <div className="error-message">
            <p>SORRY - NOT FOUND 🚫</p>
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
                
                {currentPage > 1 && (
                <button onClick={() => handlePageChange(currentPage - 1)}>
                    Prev
                </button>
                )}

                {renderPageNumbers(totalPages, currentPage, handlePageChange)}

                {currentPage < totalPages && (
                <button onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                </button>
                )}
            </div>
            )}
    </div>
    );
};

export default Browse;