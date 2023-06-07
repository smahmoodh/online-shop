import React, { useReducer } from "react";
export const AuthContext = React.createContext();
const AuthContextProvider = (props) => {

    const authReducer = (state, action) => {
        switch (action.type) {
            case 'register': {

                const userInfo = {
                    username: action.payload,
                    authenticate: true
                }
                localStorage.setItem('user', JSON.stringify(userInfo));
                return { authenticate: true };
            }
            case 'login': {

                const userInfo = {
                    username: action.payload,
                    authenticate: true
                }
                localStorage.setItem('user', JSON.stringify(userInfo));
                return { authenticate: true };
            }
            case 'logout':
                localStorage.removeItem('user');
                return{authenticate:false};
                break;
            default:
                return state;
        }
    }
    const [authenticate, dispatch] = useReducer(authReducer, false);


    return (
        <AuthContext.Provider value={{ authenticate, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;