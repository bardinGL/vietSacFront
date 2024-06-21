import axiosSite from "./axiosSite.js";

// const END_POINT = {
//     HOME: "home"
// }

const END_POINT = {
    PRODUCTS_ALL: "get-products-all",
    PRODUCTS_DETAIL: "get-product-detail"
}
export const getProductsAllAPI = () => {
    // return axiosSite.get(`${END_POINT.HOME}`)
    return axiosSite.get(`${END_POINT.PRODUCTS_ALL}`);
}
export const getProductDetailAPI = () => {
    // return axiosSite.get(`${END_POINT.HOME}`)
    return axiosSite.get(`${END_POINT.PRODUCTS_DETAIL}`);
}