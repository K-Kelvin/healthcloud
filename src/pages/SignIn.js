import axios from "axios";
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


function SignIn() {
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

        const data = {
            "grant_type": "password",
            "client_id": "TTxh4hr0NeyBR7HAlZnLSlO9CWXfwoHnIUaqWQli", // get from dashboard
            "client_secret": "77vejSg0ohd75U9TtAVcPrfg1WWfBNqrhIVzOYk7e...", // get from dashboard
            username,
            password
        }

        axios.post("https://accounts.multitenant.slade360.co.ke/oauth2/token/", data)
            .then(({ data }) => {
                // Upon successful login,
                // save the token to localStorage for persistence
                const Authorization = data.token_type + " " + data.access_token
                localStorage.setItem("Authorization", Authorization)

                // redirect to the page they came from or to home page
                navigate(from, { replace: true });
            }).catch(error => {
                // handle the errors
                console.log(error)
                setErrorMessage('Invalid Credentials')
            })
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 lg:pt-32">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-6">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="My Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Login
                </h2>
            </div>

            <p className='text-red-500 font-bold my-3'>{errorMessage}</p>

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                placeholder='Enter username...'
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-start">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            {/* <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div> */}
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder='Enter password...'
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <a href="#register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Register
                    </a>
                </p>
            </div>
        </div>
    )
}

export default SignIn;
