# Quiz Hunt

# Getting Started with Create React App

## Live Server Link: https://dashing-dieffenbachia-eb3297.netlify.app/

## I use here

- Html
- Tailwind Css
- Daisy Ui
- Sweetalert 2
- Toast
- React

# First I am create react app and..

- creact-react-app my-file
- npm i react-router-dom
- npm start
- import createBrowserRouter() in app.js
- set- <RouterProvider router={router}></RouterProvider>
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- Add the paths to all of your template files in your tailwind.config.js file. == /** @type {import('tailwindcss').Config} \*/
  module.exports = {
  content: [
  "./src/**/\*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {},
  },
  plugins: [],
  }
-
- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file. == @tailwind base;
  @tailwind components;
  @tailwind utilities;
* npm run start