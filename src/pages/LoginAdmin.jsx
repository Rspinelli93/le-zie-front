import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { authenticateAdmin } from '../authentication/adminAuth'

const LoginAdmin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
        setError('Both fields are required.');
        return;
    }

    setLoading(true);
    setError('');

    try {
        const { message, token } = await authenticateAdmin(email, password);
        alert(message);


        const expiry = Date.now() + 30 * 60 * 1000;
        localStorage.setItem('adminToken', JSON.stringify({ token, expiry }));

        setLoading(false);
        navigate('/admin/collection');
    } catch (err) {
        setError(err.message || 'Something went wrong. Please try again.');
        setLoading(false);
    }
    };

    return (
    <div className="login-admin-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>

        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
        </button>
        </form>
    </div>
    );
};

export default LoginAdmin;
