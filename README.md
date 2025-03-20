# Le Zie - Online Second-Hand Shop

## Version 1.0
Le Zie is an online second-hand shop designed to make it easy for admins to manage inventory while providing a smooth shopping experience for users. This project is built with **React + Vite** for the frontend and connects to a **MongoDB** database through a backend API.

The backend is secured so that only the admin can add, update, and remove items via a form-based admin panel. The frontend consumes the backend API to display products to customers in a user-friendly interface.

## Features
- **User Side:**
  - Browse second-hand clothing items
  - View product details
  - Customers may, through a form and a specific designated ID for each product, contact the admin to arrange an in-person pickup of the clothes.
  - Filter and search for products

- **Admin Side:**
  - Secure login for inventory management
  - Add new products via a form
  - Edit and update product details
  - Mark products as reserved
  - Delete products from the shop

## Project Structure
The project is structured as follows:

```
le-zie-frontend/
│── public/             # Static assets (images, icons, etc.)
│── src/
│   ├── api/            # API service functions to interact with the backend
│   ├── components/     # Reusable UI components (buttons, product cards, etc.)
│   ├── pages/          # Page components (Home, Product, Admin, etc.)
│   ├── routes/         # React Router setup
│   ├── context/        # Context API for global state management (Auth, Cart, etc.)
│   ├── styles/         # CSS/SCSS stylesheets or Tailwind setup
│   ├── utils/          # Helper functions (formatting, validation, etc.)
│   ├── App.jsx         # Main application file
│   ├── main.jsx        # Vite entry point
│── .env                # Environment variables (API URLs, etc.)
│── package.json        # Project dependencies and scripts
│── vite.config.js      # Vite configuration
```

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/le-zie.git
   cd le-zie-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the backend API URL:
     ```env
     VITE_API_BASE_URL=http://your-backend-url.com/api
     ```

### Running the Development Server
To start the project locally:
```bash
npm run dev
```
The application will be available at `http://localhost:5173` by default.

## API Communication
The frontend communicates with the backend using `fetch` or `axios`. Here are the main API endpoints:

- **Products:**
  - `GET /products` - Fetch all products
  - `GET /products/:id` - Fetch product details
  
- **Admin Actions (Requires Authentication):**
  - `POST /admin/create` - Add a new product
  - `PUT /admin/edit/:id` - Edit product details
  - `PUT /admin/reserve/:id` - Mark a product as reserved
  - `DELETE /admin/delete/:id` - Remove a product
  
- **Admin Authentication:**
  - `POST /admin/login` - Admin login
  - `POST /admin/register` - Admin registration
  - `DELETE /admin/logout` - Admin logout

## Deployment
To build the project for production:
```bash
npm run build
```
This will generate a `dist/` folder with optimized assets. Deploy this folder to your preferred hosting service (e.g., Netlify, Vercel, or Firebase Hosting).

## Version 2.0 Roadmap
- Implement a shopping cart and checkout system
- Enhance UI/UX with animations and better product filtering
- Add user authentication for order tracking
- Optimize performance with lazy loading and image optimization
- Implement online selling functionality

## License
This project is licensed under the MIT License.

---

### Notes
This README provides a high-level overview of the frontend project. If you need further details, consider adding specific setup instructions for authentication, state management, or API integration.

