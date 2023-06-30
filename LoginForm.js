import React, { useState } from 'react';
// import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "https://accounts.multitenant.slade360.co.ke/oauth2/token/";
        const data = {
            "grant_type": "password",
            "client_id": "AIFmpnjogAffTT5kS5PbWDjyG9UoXDaWXixNO8TL",
            "client_secret": "KAUdMS5ibxlW8GVMMztl6M2wMicI1W1w46efvL99qlKFY705A15qmQuWn2p0bAnvq6pC5pjPyJEH4ZBCc6VJpgTX8v3XFmwY9U73ssU7cc6t8D32R6lG9osA0bhcqVAU",
            username,
            password
        }
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
        try {
            const response = await fetch(url, {
                method: "POST",
                headers,
                body: JSON.stringify(data),
            })



            console.log(response.data); // Do something with the response data
            setError(''); // Clear any previous error
        } catch (error) {
            setError('Login failed. Please try again.'); // Set error message
            console.error(error); // Log the error
        }
    };
    export async function login(username, password) {
        const data = {
            "grant_type": "password",
            "client_id": "AIFmpnjogAffTT5kS5PbWDjyG9UoXDaWXixNO8TL",
            "client_secret": "77vejSg0ohd75U9TtAVcPrfg1WWfBNqrhIVzOYk7e...",
            username,
            password
        }
        const headers = {
            "Content-Type": "application/json"
        }

        const url = "https://accounts.multitenant.slade360.co.ke/oauth2/token/";

        const response = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(data),
        })

        try {
            const data = await response.json();

            // save token to localStorage for persistence
            const Authorization = data.token_type + " " + data.access_token
            localStorage.setItem("Authorization", Authorization)

            return data;
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl text-center font-bold mb-4">Login</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleSubmit}
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
};



export default LoginForm;



