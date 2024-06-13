import axiosSite from "./axiosSite.js";

// const END_POINT = {
//     HOME: "home"
// }

const END_POINT = {
    PRODUCTS_ALL: "get-products-all"
}
export const getProductsAllAPI = () => {
    // return axiosSite.get(`${END_POINT.HOME}`)
    return axiosSite.get(`${END_POINT.PRODUCTS_ALL}`);
}