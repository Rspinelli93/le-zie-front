import { useNavigate } from 'react-router-dom';

export const useProductRedirect = () => {
    const navigate = useNavigate();

    return (productId) => {
        const storedToken = localStorage.getItem('adminToken');
        let isAdmin = false;
        
        if (storedToken) {
            try {
                const { expiry } = JSON.parse(storedToken);
                if (Date.now() < expiry) {
                    isAdmin = true;
                }
            } catch (err) {
                console.error("Error parsing admin token:", err);
            }
        }

        if (isAdmin) {
            navigate(`/admin/edit/${productId}`);
        } else {
            navigate(`/product/${productId}`);
        }
    };
}