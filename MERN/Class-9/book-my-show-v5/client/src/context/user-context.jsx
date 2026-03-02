import React, { createContext, useState } from 'react'
import useHttp from '../hooks/useHttp';
import { loginUser } from '../lib/apis';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { fetchProfile } from '../lib/apis';

const UserContext = createContext({
    user: null,
    isAuthenticated: false,
    login: () => { },
    logout: () => { }
})

export const UserContextProvider = (props) => {

    const {data, isLoading, error, sendRequest: loginRequestHandler} = useHttp(loginUser, false);
    const {data: profileData, isLoading: profileIsLoading, error: profileError, sendRequest: profileRequestHandler} = useHttp(fetchProfile, false);

    const [user, setUser] = useState(null);
    const navigate = useNavigate();
   
    const loginHandler = async (values) => {
        await loginRequestHandler(values);
    }

    useEffect(() => {
        profileRequestHandler();
    }, []);

    useEffect(() => {
        if (!profileIsLoading && profileData) {
            setUser(profileData.payload);
        }
    }, [profileData, profileIsLoading]);

    useEffect(() => {
        if (!isLoading && data) {
            localStorage.setItem('token', data.payload.token);
            navigate('/');
            profileRequestHandler();
        }
    }, [data, isLoading]);

    const logoutHandler = () => {
        setUser(null);
        localStorage.removeItem('token');
    }

    const contextValue = {
        user: user,
        isAuthenticated: !!user,
        login: loginHandler,
        logout: logoutHandler
    }

    return (
        <UserContext.Provider value = {contextValue}>
            { props.children }
    </UserContext.Provider >
  )
}

export default UserContext