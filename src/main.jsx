import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Home/Home.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import Main from './Main/Main.jsx';
import Form from './Form/Form.jsx';
import NomineForm from './Form/NomineForm.jsx';
import AccountHolder from './Form/AccountHolder.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:"/form",
        element: <Form></Form>,
      },
      {
        path:"/nomine",
        element: <NomineForm></NomineForm>,
      },
      {
        path:"/account",
        element: <AccountHolder></AccountHolder>
      }
    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
