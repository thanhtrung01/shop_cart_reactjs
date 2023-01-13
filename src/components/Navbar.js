import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import logo from "../image/logo.webp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { statusCart } from "../redux/actions/cartActions";
import { useLogout } from '../hooks/useLogout'
import { useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import Cart from "../Pages/Cart";
import { BiBorderRadius } from "react-icons/bi";

const Navbar = () => {

  const isAdmin = localStorage.getItem('isAdmin')

  const isUser = useAuthContext()


  const { logout } = useLogout()



  const checkUser = () => {

    //   if(!isUser.user){
    //   setUser(false)
    //  } else{
    //   setUser(true)
    //  }


    // Check local storage for user and set user flag to true
    const token = localStorage.getItem('token')
    if (token && isUser) {
      console.log('Token is found, user is logged in')

    } else {
      console.log('Token is not found, user not logged in')
    }
  }

  useEffect(() => {
    checkUser()
  }, [])

  const dispatch = useDispatch()
  const status = useSelector(((state) => state.cartReducer.status))

  return (
    <div>
      <header className="border-b-2 border-gray-200 lg:py-0 py-6">
        <nav className="w-full smallTablet:w-full smallTablet:ml-3 md:w-4/5 mx-auto h-36 lg:h-20 flex justify-center md:justify-between flex-wrap items-center">
          <div className="logo">
            <Link to="/">
              <img alt="logo" src={logo}></img>
            </Link>
          </div>
          <div>
            <ul className="header-menu flex justify-between my-5">

              <Link to="/" className="pr-7">
                <li className="text-sm iphone5:text-xs md:text-base header-menu-item font-medium hover:text-yellow-500">
                  HOME
                </li>
              </Link>
              <Link to="/about" className="pr-7">
                <li className="text-sm iphone5:text-xs md:text-base header-menu-item font-medium hover:text-yellow-500">
                  ABOUT
                </li>
              </Link>
              <Link to="/shop" className="pr-7">
                <li className="text-sm iphone5:text-xs md:text-base header-menu-item font-medium hover:text-yellow-500">
                  SHOP
                </li>
              </Link>
              <Link to={"/blog"} className="pr-7">
                <li className="text-sm iphone5:text-xs md:text-base header-menu-item font-medium hover:text-yellow-500">
                  BLOG
                </li>
              </Link>
              <Link to={'/contact'}>
                <li className="text-sm iphone5:text-xs md:text-base header-menu-item font-medium hover:text-yellow-500">
                  CONTACT
                </li>
              </Link>
            </ul>
          </div>
          <div className="header-info flex justify-center md:justify-end items-center font-medium">
            <ul>
              {isAdmin === 'true' && (<>
                <Link className='pt-7' to={`/admin`}>
                  <li style={{ background: "#f4d34c", borderRadius: "5px", boxShadow: "2px 2px" }} className="text-sm iphone5:text-xs md:text-base header-menu-item bg-stone-500 font-medium hover:text-yellow-500">
                    ADMIN
                  </li>
                </Link>
              </>)}
            </ul>
          </div>
          <div className="header-info flex justify-center md:justify-end items-center font-medium">
            <div>
              {!isUser.user && (
                <>
                  <Link to={'/login'} className="login hover:text-yellow-500">
                    Login
                  </Link>
                  <span> / </span>
                  <Link to={'/register'} className="Register hover:text-yellow-500">
                    Register
                  </Link>
                </>)}
            </div>
            <div className="cart ml-5" onClick={() => dispatch(statusCart(true))}>
              <button>
                <BsFillCartPlusFill className="text-2xl hover:text-yellow-500" />
              </button>
            </div>
            <div className="cart ml-5" >
              {isUser.user && (
                <>
                  <Link to={'/profile'} className="login hover:text-yellow-500">
                    PROFILE
                  </Link>
                </>)}
            </div>
            <div className="cart ml-5" >
              {isUser.user && (
                <>
                  <button className='btn btn-ghost normal-case text-xl btn-warning' onClick={logout}>Logout</button>
                </>)}
            </div>
          </div>
        </nav>
      </header>

      {status ? <Cart /> : ''}
    </div>
  );
};

export default Navbar;
