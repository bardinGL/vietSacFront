import axiosSite from "./axiosSite.js";

// const END_POINT = {
//     HOME: "home"
// }

const API_AUTH = "Auth";
const API_USER = "User";

const END_POINT = {
    SIGNUP_USER: `${API_AUTH}/SignUpUser`,
    SIGNIN_USER: `${API_AUTH}/SignInUser`,
    USER_PROFILE: `${API_USER}/GetSingleID`
}

export const postSignUpUser = (userInfo) => {
    return axiosSite.post(`${END_POINT.SIGNUP_USER}`, userInfo);
}

export const postSignInUser = (userInfo) => {
    return axiosSite.post(`${END_POINT.SIGNIN_USER}`, userInfo);
}

export const getUserInfo = (userID) => {
    return axiosSite.get(`${END_POINT.USER_PROFILE}?id=${userID}`);
}