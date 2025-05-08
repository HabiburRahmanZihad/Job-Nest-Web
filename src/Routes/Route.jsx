import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../Components/Home';
import Error from '../Components/Error';
import CompanyDetails from '../Pages/CompanyDetails';
import Loading from '../Components/Loading';
import MyProfile from '../Pages/MyProfile';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import ResetPass from '../Components/ResetPass';
import PrivateRoute from './PrivateRoute';
import About from '../Pages/About';
import UpdateProfile from '../Pages/UpdateProfile';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,


        children: [

            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json'),
                hydrateFallbackElement: <Loading></Loading>,
            },

            { path: 'about', element: <About></About> },

            {
                path: 'profile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },

            { path: 'signin', element: <SignIn></SignIn> },

            { path: 'signup', element: <SignUp></SignUp> },

            { path: 'reset', element: <ResetPass></ResetPass> },

            {
                path: 'companies/:id',
                element: <CompanyDetails></CompanyDetails>,
                loader: () => fetch('/data.json'),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: 'update-profile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
            }


        ]
    },
]);
