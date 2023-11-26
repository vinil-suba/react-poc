import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
// import {AppLayout} from './components/AppLayout';
import About from './components/About'
import Contact from './components/Contact';
import Error from './components/Error';
import Header from './components/Header'
import Body from './components/Body';
import ResInfo from './components/ResInfo';

export const AppLayout = () =>  {
    return (
        <div className="conatiner">
            <Header/>
            <Outlet/>
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        children: [
            {
                path:'/',
                element: <Body/>
            },
            {
                path:'/res-info/:res_id',
                element: <ResInfo/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
        ],
        errorElement: <Error/>
    },
    
])



const renderRoot = ReactDOM.createRoot(document.getElementById("root"));
renderRoot.render(<RouterProvider router = {appRouter} />); 