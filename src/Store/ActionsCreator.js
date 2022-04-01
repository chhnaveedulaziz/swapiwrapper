import { SIGN_IN, SIGN_OUT } from "./Actions";

export const signIn = (user) => {
    return {
        type: SIGN_IN,
        user: user.userData,
        isLogin: user.isLogin,
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT,
        user: null,
        isLogin: false
    }
}