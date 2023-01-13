import React, { useState } from 'react';
import logo from "../image/logo.webp";
import validator from 'validator'
import { useAuthContext } from '../hooks/useAuthContext'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const apiURL = process.env.REACT_APP_SERVER_API;
const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const { dispatch } = useAuthContext()

  const handleLogin = () => {

    if (validator.isEmail(email)) {
      axios
        .post(apiURL + `auth/login`, {
          email: email,
          password: password,
        })
        .then(function (response) {
          console.log(response)
          const token = response.data.token
          const isAdmin = response.data.user.role
          // Save user json data to localStorage

          localStorage.setItem('token', JSON.stringify(token))
          localStorage.setItem('isAdmin', JSON.stringify(isAdmin))
          // Update AuthContext

          dispatch({ type: 'LOGIN', payload: token })

          navigate("/")


        })
        .catch(function (error) {
          console.log(error)
          setErrorMessage('Thông tin không hợp lệ')
          setTimeout(() => {
            setErrorMessage('')
          }, 3500)
        })
    } else {
      setErrorMessage('Vui lòng nhập địa chỉ email hoặc mật khẩu hợp lệ')
      setTimeout(() => {
        setErrorMessage('')
      }, 3500)
    }
  }
  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen mb-16 login-page">
      <div className="container mx-auto py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img className="mx-auto object-cover" src={logo} alt="logo" />
                      <h4 className="text-xl font-semibold mt-1 mb-12 pb-1 mt-6">We are The Ashion shop</h4>
                    </div>

                    <p className="mb-4">Please login to your account</p>
                    <div className="mb-4">
                      <input
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="user-name"
                        type='email'
                        required
                        placeholder='Enter your email'
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                    <input
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id='password'
                      type='password'
                      required
                      placeholder='Enter your password'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                    
                    <h1 className='mx-auto mt-6 text-red-600 text-sm font-semibold text-center'>{errorMessage}</h1>
                    <div className="text-center pt-1 mb-12 pb-1">
                      <button type="submit" onClick={handleLogin} className="inline-block px-6 py-2.5 text-white bg-green-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        Log in
                      </button>
                      <a className="text-gray-500" href="#!">Forgot password?</a>
                    </div>
                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Don't have an account?</p>
                      <Link to='/register'>
                        <button type="button" className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">
                          Register
                        </button></Link>
                    </div>
                  </div>
                </div>
                <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none" style={{ background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' }}>
                  <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                    <h4 className="text-xl font-semibold mb-6">We are more than just a company</h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Login;
