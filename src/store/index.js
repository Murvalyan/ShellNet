import axios from "axios";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { API_URL } from "../http";
import AuthServices from "../services/AuthServices";
import UserServices from "../services/UserServices";

const userState = {
    user: {},
    users: [],
    isAuth: false
}

const SET_AUTH = 'SET_AUTH'
const SET_USER = 'SET_USER'
const GET_USER = 'GET_USER'
const DELETE_USER = 'DELETE_USER'
const LOGIN = 'LOGIN'

window.user = userState.user;
window.isAuth = userState.isAuth;
const reducer = (state = userState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {...state, isAuth: action.payload};
        case SET_USER:
            return {...state, user: action.payload};
        case GET_USER:
            return {...state, users: action.payload};
        case LOGIN: 
            return {...state, isAuth: action.payload, user: action.payload}
        case DELETE_USER:
            return {...state, user: {}}
        
        default:
            return state;
    }
}

export const isAuth = (payload) => ({type: SET_AUTH, payload});
export const setUser = (payload) => ({type: SET_USER, payload});
export const getUsers = (payload) => ({type: GET_USER, payload});
export const deleteUser = (payload) => ({type: DELETE_USER, payload})
export const asyncLogin = (email, password) => {
    return async function login (dispatch) {
        try {
            const response = await AuthServices.login(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            dispatch(isAuth(true));
            dispatch(setUser(response.data.user));
        } catch (error) {
            console.log(error)
        }
    }
}
export const asyncReg = (email, password) => {
    return async function reg (dispatch) {
        try {
            const response = await AuthServices.reg(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            dispatch(isAuth(true));
            dispatch(setUser(response.data.user));
        } catch (error) {
            console.log(error)
        }
    }
}
export const asyncLogout = () => {
    return async function logout (dispatch) {
        try {
            const response = await AuthServices.logout();
            console.log(response)
            localStorage.removeItem('token', response.data.accessToken);
            dispatch(isAuth(false));
            dispatch(deleteUser());
        } catch (error) {
            console.log(error)
        }
    }
}

export const checkAuth = () => {
    return async function auth (dispatch) {
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            console.log(response)
            dispatch(isAuth(true));
            dispatch(setUser(response.data.user));
        } catch (error) {
            console.log(error)
        }
    }
}

export const requestUsers = () => {
    return async function users (dispatch) {
        try {
            const response = await UserServices.users();
            console.log(response)
            dispatch(getUsers(response.data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const store = new createStore(reducer, applyMiddleware(thunk));

