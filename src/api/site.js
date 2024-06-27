import axiosSite from "./axiosSite.js";

// const END_POINT = {
//     HOME: "home"
// }

const API_AUTH = "Auth";

const END_POINT = {
    SIGNUP_USER: `${API_AUTH}/SignUpUser`
}

export const postSignUpUser = (userInfo) => {
    return axiosSite.post(`${END_POINT.SIGNUP_USER}`, userInfo);
}