import { useEffect, useState, useMemo } from "react";
import { useSearch } from "../contexts/SearchContext";

import PinkBackground from "../components/backgroundPink/BackgroundPink.jsx";
import Footer from "../components/footer/Footer.jsx";
import Header from "../components/header/Header.jsx";
import GetProducts from "../service/user/GetProducts.jsx";
import FilterBox from "../components/filterBox/FilterBox.jsx";
import Browse from "../components/browse/Browse.jsx";
import { getTotalPages, getPaginatedProducts } from "../utils/pagination.jsx";

const PRODUCTS_PER_PAGE = 2;

const FILTER_TEMPLATE = {
    categories: [],
    price: { min: null, max: null },
    size: [],
    season: [],
    decade: [],
    colors: [],
    brand: []
};

const AdminCollection = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [notFound, setNotFound] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({ ...FILTER_TEMPLATE });
    const { searchQuery } = useSearch();

    useEffect(() => {
        GetProducts()
            .then((data) => setProducts(data))
            .catch((err) => setError(err.message));
    }, []);

    const clearAllFilters = () => {
        setFilters({ ...FILTER_TEMPLATE });
        setCurrentPage(1);
    };

    const handleSetFilters = (newFilters) => {
        setFilters(newFilters);
        setCurrentPage(1);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        
            const matches = (key) => {
                if (key === "price") {
                    return (
                        (!filters.price.min || product.price >= filters.price.min) &&
                        (!filters.price.max || product.price <= filters.price.max)
                    );
                }
                if (key === "colors" || key === "categories") {
                    return (
                        filters[key].length === 0 ||
                        filters[key].some(filterValue => product[key]?.includes(filterValue))
                    );
                }
                return filters[key].length === 0 || filters[key].includes(product[key]);
            };

            return (
                matchesSearch &&
                matches("categories") &&
                matches("price") &&
                matches("size") &&
                matches("season") &&
                matches("decade") &&
                matches("colors") &&
                matches("brand")
            );
        });
    }, [products, filters, searchQuery]);

    useEffect(() => {
        if (filteredProducts.length === 0) {
            setNotFound(true);
        } else {
            setNotFound(false);
        }
    }, [filteredProducts]);

    const totalPages = getTotalPages(filteredProducts, PRODUCTS_PER_PAGE);

    const paginatedProducts = useMemo(() => {
        return getPaginatedProducts(filteredProducts, currentPage, PRODUCTS_PER_PAGE);
    }, [filteredProducts, currentPage]);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <>
            <Header />
            <div className="collection-top">
                <h2>BROWSE THE COLLECTION</h2>
            </div>

            <FilterBox
                filters={filters}
                products={products}
                setFilters={handleSetFilters}
                clearAllFilters={clearAllFilters}
            />

            <Browse 
                paginatedProducts={paginatedProducts}
                notFound={notFound}
                error={error}
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            
            <PinkBackground />
            <Footer />
        </>
    );
};

export default AdminCollection;