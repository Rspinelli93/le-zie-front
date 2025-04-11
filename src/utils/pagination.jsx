export const getTotalPages = (products, productsPerPage) => {
    return Math.ceil(products.length / productsPerPage);
};

export const getPaginatedProducts = (products, currentPage, productsPerPage) => {
    const start = (currentPage - 1) * productsPerPage;
    return products.slice(start, start + productsPerPage);
};

export const renderPageNumbers = (totalPages, currentPage, handlePageChange) => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    } else {
        if (currentPage <= 3) {
            pages.push(1, 2, 3, 4, '...', totalPages);
        } else if (currentPage >= totalPages - 2) {
            pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
        } else {
            pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
        }
    }

    return pages.map((page, index) => {
        if (page === '...') {
            return <span key={index}>...</span>;
        }
        return (
            <button
                key={index}
                onClick={() => handlePageChange(page)}
                disabled={page === currentPage}
            >
                {page}
            </button>
        );
    });
};