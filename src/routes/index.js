//Dùng để định hướng trang, list ra những trang cần đăng nhập trong private
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider";
import { ProtectedRoute } from "./ProtectedRoute";

import { DefaultLayout, NoCompLayout } from "../component/Layout";
import TransHeaderLayout from "../component/Layout/TransHeaderLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProductDetail from "../pages/ProductDetail";
import NoFooterLayout from "../component/Layout/NoFooterLayout";
import Profile from "../pages/Profile";
import FixedHeaderLayout from "../component/Layout/FixedHeaderLayout";
import Checkout from "../pages/Checkout";
import Thankyou from "../pages/Thankyou";

// const publicRoutes = [
//     { path: '/', component: Home, name: 'Home', layout: TransHeaderLayout},
//     { path: '/login', component: Login, name: 'Login', layout: NoCompLayout},
//     { path: '/signup', component: Signup, name: 'Signup', layout: NoCompLayout},
//     { path: '/home', component: Home, name: 'Home', layout: TransHeaderLayout},
//     { path: '/user', component: Profile, name: 'Profile', layout: NoFooterLayout},
//     { path: '/shop', component: Shop, name: 'Shop', layout: NoFooterLayout},
//     { path: '/shop/:id', component: ProductDetail, name: 'Product Detail', layout: NoFooterLayout},
//     { path: '/checkout', component: Checkout, layout: FixedHeaderLayout},
//     { path: '/thankyou', component: Thankyou, layout: NoFooterLayout},
// ];

// const privateRoutes = [];

const Routes = () => {
    const { token } = useAuth();
  
    // Define public routes accessible to all users
    const routesForPublic = [
      {
        path: "/",
        element: 
        <TransHeaderLayout>
          <Home/>
        </TransHeaderLayout>
      },
      {
        path: "/home",
        element: 
        <TransHeaderLayout>
          <Home/>
        </TransHeaderLayout>
      },
      {
        path: "/login",
        element: 
        <NoCompLayout>
          <Login/>
        </NoCompLayout>
      },
      {
        path: "/signup",
        element: 
        <NoCompLayout>
          <Signup/>
        </NoCompLayout>
      },
      {
        path: "/signup",
        element: 
        <NoCompLayout>
          <Signup/>
        </NoCompLayout>
      },
      {
        path: "/shop",
        element: 
        <NoFooterLayout>
          <Shop/>
        </NoFooterLayout>
      },
      {
        path: "/shop/:id",
        element: 
        <NoFooterLayout>
          <ProductDetail/>
        </NoFooterLayout>
      },
    ];
  
    // Define routes accessible only to authenticated users
    const routesForAuthenticatedOnly = [
      {
        path: "/",
        element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
        children: [
          {
            path: '/user',
            element: 
            <NoFooterLayout>
              <Profile/>
            </NoFooterLayout>
          },
          {
            path: '/checkout',
            element: 
            <FixedHeaderLayout>
              <Checkout/>
            </FixedHeaderLayout>
          },
          {
            path: '/user',
            element: 
            <NoFooterLayout>
              <Thankyou/>
            </NoFooterLayout>
          },
        ],
      },
    ];
  
    // Define routes accessible only to non-authenticated users
    const routesForNotAuthenticatedOnly = [
      
    ];
  
    // Combine and conditionally include routes based on authentication status
    const router = createBrowserRouter([
      ...routesForPublic,
      ...(!token ? routesForNotAuthenticatedOnly : []),
      ...routesForAuthenticatedOnly,
    ]);
  
    // Provide the router configuration using RouterProvider
    return <RouterProvider router={router} />;
};

export default Routes;
