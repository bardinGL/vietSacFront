import axiosSite from "./axiosSite.js";

const END_POINT = {
    HOME: "home"
}

export const getHomeAPI = () => {
    return axiosSite.get(`${END_POINT.HOME}`)
}