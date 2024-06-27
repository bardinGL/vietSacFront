import axiosSite from "./axiosSite.js";

// const END_POINT = {
//     PRODUCTS_ALL: "get-products-all",
//     PRODUCTS_DETAIL: "get-product-detail"
// }
// export const getProductsAllAPI = () => {
//     // return axiosSite.get(`${END_POINT.HOME}`)
//     return axiosSite.get(`${END_POINT.PRODUCTS_ALL}`);
// }
// export const getProductDetailAPI = () => {
//     // return axiosSite.get(`${END_POINT.HOME}`)
//     return axiosSite.get(`${END_POINT.PRODUCTS_DETAIL}`);
// }

const API_VERSION = "v1"

const END_POINT = {
    PRODUCTS_ALL: `${API_VERSION}/Product`,
    CATEGORY_ALL: `${API_VERSION}/Category`,
    RELATED_PRODUCTS: `${API_VERSION}/Product/category`,
}

export const getProductsAllAPI = () => {
    // return axiosSite.get(`${END_POINT.HOME}`)
    return axiosSite.get(`${END_POINT.PRODUCTS_ALL}`);
    // { headers: {"Authorization" : `Bearer ${tokenStr}`} }
}

export const getProductDetailAPI = (productID) => {
    // return axiosSite.get(`${END_POINT.HOME}`)
    return axiosSite.get(`${END_POINT.PRODUCTS_ALL}/${productID}`);
}

export const getRelatedProductsAPI = (categoryID) => {
    // return axiosSite.get(`${END_POINT.HOME}`)
    return axiosSite.get(`${END_POINT.RELATED_PRODUCTS}/${categoryID}`);
}

export const getCategoryAllAPI = () => {
    // return axiosSite.get(`${END_POINT.HOME}`)
    return axiosSite.get(`${END_POINT.CATEGORY_ALL}`);
}