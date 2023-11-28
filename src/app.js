import React, {lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
// import {AppLayout} from './components/AppLayout';
import About from './components/About'
// import Contact from './components/Contact';
import Error from './components/Error';
import Header from './components/Header'
import Body from './components/Body';
import ResInfo from './components/ResInfo';
import UserContext from './utils/UserContext';
import appStore from './utils/redux/appStore';
import Cart from './components/Cart';



//Dynamic import
// code optimization
const Contact = lazy(() => import('./components/Contact'))

export const AppLayout = () =>  {

const [userName, setUserName] = useState();

useEffect(() => {
    //API to fetch the data
    const response = {
        userName: 'Update Name Vinil',
    }
    setUserName(response.userName);
}, [])
    
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{ userName: userName, setUserName }}>
        <div className="conatiner">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
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
                path:'/cart',
                element: <Cart/>
            },
            {
                path:'/contact',
                element: <Suspense fallback={
                    <h1>Loading..............</h1>
                }><Contact/></Suspense>
            },
        ],
        errorElement: <Error/>
    },
    
])



const renderRoot = ReactDOM.createRoot(document.getElementById("root"));
renderRoot.render(<RouterProvider router = {appRouter} />); 