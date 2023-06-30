import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const LOGIN_URL = "https://accounts.multitenant.slade360.co.ke/oauth2/token/";

const getLoginData = (username, password) => ({
    "grant_type": "password",
    "client_id": process.env.CLIENT_ID, // environment variables in .env
    "client_secret": process.env.CLIENT_SECRET,
    username,
    password
});

const getRefreshData = () => ({
    "grant_type": "refresh_token",
    "client_id": process.env.CLIENT_ID,
    "client_secret": process.env.CLIENT_SECRET,
    "refresh_token": localStorage.getItem('refresh_token'),
});

const axiosConfig = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

// hook to abstract login logic
export default function useLogin() {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    // check to see if the user has been redirected to login from another route
    // if not, set redirect after login to '/home' route
    let from = location.state?.from?.pathname || "/home";

    const handleLogin = (event) => {
        event.preventDefault() // prevent the page from reloading on form submission (default behaviour)
        setErrorMessage('') // clear the previous errors

        const formData = new FormData(event.currentTarget);
        const username = formData.get("username"); // get the username from the submitted form
        const password = formData.get("password"); // get the password from the submitted form

        axios.post(LOGIN_URL, getLoginData(username, password), axiosConfig)
            .then(({ data }) => {
                // Upon successful login,
                // save the token to localStorage for persistence
                const Authorization = data.token_type + " " + data.access_token
                localStorage.setItem("Authorization", Authorization)
                localStorage.setItem("refresh_token", data.refresh_token) // save the refresh_token locally

                console.log(data)
                // redirect to the page they came from or to home page
                navigate(from, { replace: true });
            }).catch(error => {
                // handle the errors
                console.log(error)
                setErrorMessage('Invalid Credentials')
            })
    }

    return { handleLogin, errorMessage }
}
