import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  // BrowserRouter,
  Navigate,
  Routes,
  Route,
  // useParams,
} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import { useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";
import Details from "./Pages/Details";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";

function App() {
  // const [isAdmin, setIsAdmin] = useState(false)
  const admin = localStorage.getItem('isAdmin')
  if (admin === null || admin === 'false') {
    console.log('You are not admin')
  } else {
    // setIsAdmin(true)
  }
  const { user } = useAuthContext()
  // const { id } = useParams()
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/profile" element={user!==null ? <Profile /> : <Navigate to="/" />} />
        <Route path="/admin" element={admin==="true" ? <Admin /> : <Navigate to="/" />} />
        <Route path='/login' element={!user ? <Login /> :  <Navigate to="/" />} />
        <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
