# 🧥 LE ZIE - Vintage Clothing Web App – Frontend

This is the **frontend** of a vintage clothing web application. It allows **users** to browse a curated collection of vintage clothing items. On the **admin** side, it provides tools to manage the inventory by adding, editing, deleting, and marking items as sold. The frontend connects to a backend database via API calls and handles all interactions with both users and admins through clearly defined routes and dynamic interfaces.

---

## 🧑‍💻 User Routes

These are public-facing routes that regular users can access to browse and view clothing items.

- `/home`  
  General **landing page** with branding, featured items, or introductory content.

- `/showroom`  
  Displays a list or grid of **all available clothing items** from the database.

- `/showroom/:id`  
  Dynamic route that shows **details of a selected product**

---

## 🔐 Admin Routes

These routes are restricted to authenticated admin users.

- `/admin/login`  
  Login page for admin access.

- `/admin/showroom`  
  Admin's view of the clothing inventory:
  - See all products
  - Edit or delete items
  - Mark items as sold

- `/admin/showroom/:id`  
  Detailed view of a single item for the admin:
  - Editable form to update product info
  - "Delete" and "Mark as Sold" options

- `/admin/form`  
  Page to **add new clothing items** to the database. The form includes:
  - **Name** (text input)
  - **Categories** (checkboxes — allow multiple)
  - **Colors** (checkboxes — allow multiple)
  - **Images** (file upload — allow multiple images per product)
  - **Decade** (dropdown)
  - **Brand** (text input)
  - **Price** (number input)
  - **Size** (dropdown)
  - **Season** (dropdown — only two options)

---

## ⚙️ Functionality

- Fully dynamic routing using product IDs (`/showroom/:id`, `/admin/showroom/:id`)
- Image upload support for multiple files per product
- Complete CRUD functionality through frontend API calls:
  - Create new product
  - Read/display product data
  - Update/edit existing product
  - Delete product or mark as sold
- Role-based navigation and view logic (admin vs. user)

---

## 🚀 To-Do – Version 2.0

Planned features for future release:

- Add full **shopping functionality**
- Integrate **payment methods**
- Shopping cart and checkout flow

---

## 🔗 Project Resources

- [🖼️ Wireframes & UI Flow](https://richiscouses.my.canva.site/lezie#home)  
  Visual overview of the layout, structure, and user interactions.

- [🗂️ Trello Planning Board](https://trello.com/b/QqDnmPn8/le-zie)  
  Task management and development roadmap.

- [📬 Postman](https://documenter.getpostman.com/view/41161776/2sB2cX91qN)