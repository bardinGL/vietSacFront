//Dùng để định hướng trang, list ra những trang cần đăng nhập trong private

import { NoCompLayout } from "../component/Layout";

import Login from "../pages/Login";
import Signup from "../pages/Signup";

const publicRoutes = [
    { path: '/', component: Login, layout: NoCompLayout},
    { path: '/signup', component: Signup, layout: NoCompLayout},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
