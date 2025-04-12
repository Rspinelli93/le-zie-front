import { redirect } from 'react-router-dom';

export const authenticateAdmin = async (email, password) => {
    const API_URL = 'http://localhost:3210/admin/login';

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'An error occurred during login');
    }
    const data = await response.json();
    return data;
};

export const getValidAdminToken = () => {
    const stored = localStorage.getItem('adminToken');
    if (!stored) return null;

    try {

        const { token, expiry } = JSON.parse(stored);
        if (Date.now() > expiry) {
        localStorage.removeItem('adminToken');
        
        return null;
        }
        return token;
    } catch {
        localStorage.removeItem('adminToken');
        return null;
    }
    };

export const requireAdminAuth = () => {
    const token = getValidAdminToken();
    if (!token) {
    return redirect('/admin/login');
    }
    return null;
};