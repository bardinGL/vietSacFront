//Dùng để định hướng trang, list ra những trang cần đăng nhập trong private

import { DefaultLayout, NoCompLayout } from "../component/Layout";
import TransHeaderLayout from "../component/Layout/TransHeaderLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProductDetail from "../pages/ProductDetail";

const publicRoutes = [
    { path: '/', component: Login, name: 'Login', layout: NoCompLayout},
    { path: '/signup', component: Signup, name: 'Signup', layout: NoCompLayout},
    { path: '/home', component: Home, name: 'Home', layout: TransHeaderLayout},
    { path: '/shop', component: Shop, name: 'Shop', layout: DefaultLayout},
    { path: '/shop/:id', component: ProductDetail, name: 'Product Detail', layout: DefaultLayout},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
