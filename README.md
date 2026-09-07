# Le Zie · Online showroom

React frontend for a second-hand clothing showroom in Geneva. Visitors can browse and filter the collection, inspect product details, and subscribe to the newsletter. An administration area supports adding, editing, marking, and removing products.

**Collection:** Featured applications · [Project directory](https://github.com/Rspinelli93/Rspinelli93/blob/main/PROJECTS.md)

**Related repository:** [le-zie](https://github.com/Rspinelli93/le-zie)

## Stack

`dotenv`, `framer-motion`, `react`, `react-dom`, `react-icons`, `react-router-dom`, `vite`.

## Run locally

Install Node.js and npm, then run:

```bash
git clone https://github.com/Rspinelli93/le-zie-front.git
cd le-zie-front
npm install
npm run dev
```

Open the local URL printed by Vite. `npm run build` creates the production bundle and `npm run preview` serves that bundle locally.

## Configuration

The source reads these environment variables. Configure them locally before starting the relevant integrations; values are not included here.

| Variable | Used by |
| --- | --- |
| `VITE_API_CLOUDINARY` | [`src/utils/cloudinaryUpload.js`](src/utils/cloudinaryUpload.js) |
| `VITE_API_URL` | [`src/authentication/AdminAuth.jsx`](src/authentication/AdminAuth.jsx), [`src/service/admin/AddProduct.jsx`](src/service/admin/AddProduct.jsx) |

## Available commands

| Command | Script in package.json |
| --- | --- |
| `npm run dev` | `vite` |
| `npm run build` | `vite build` |
| `npm run lint` | `eslint .` |
| `npm run preview` | `vite preview` |

## Implementation notes

Set `VITE_API_URL=http://localhost:3210` in a local `.env` file for the companion backend. `VITE_API_CLOUDINARY` is the upload endpoint consumed by `src/utils/cloudinaryUpload.js`; image uploads also depend on the Cloudinary configuration in that file. Start the backend before testing catalogue and administration requests.

## Repository guide

- [`eslint.config.js`](eslint.config.js)
- [`index.html`](index.html)
- [`package.json`](package.json)
- [`src/`](src/)
- [`vercel.json`](vercel.json)
- [`vite.config.js`](vite.config.js)

---

[Back to my GitHub profile](https://github.com/Rspinelli93)
