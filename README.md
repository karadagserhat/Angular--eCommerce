# Hyper e-Commerce Project

> eCommerce project built with the MEAN stack & NgRx.

## Features

- Light / Dark mode
- State Management with NgRx and Service
- Full featured shopping cart
- Product reviews and ratings
- Product filter feature
- Product grid / list view
- Form Management with Reactive Forms
- Authentication / Authorization
- User profile
- Admin dashboard
- Admin product management
- Admin Order details page
- Admin CRUD operations

## Usage

### Env Variables

Create a .env file in backend folder and add the following

```
URL=http://localhost:5000
MONGO_URL=your mongo url
JWT_SECRET=your jwt secret
JWT_LIFETIME="1d"
```

### Install Dependencies (frontend & backend)

```
npm run setup-project
```

### Run

```
# Run frontend (:4200) & backend (:5000)
npm run dev

# Run backend only
npm run server

# Run fronted only
ng serve
```
