import React from 'react'
import { Link, NavLink, Route, Routes, useNavigate, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import "./App.css"
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4 from './components/Bai4'
import Bai5 from './components/Bai5'
import Home1 from './components/Bai6/Home1'
import Contact1 from './components/Bai6/Contact1'
import Home2 from './components/Bai7/Home2'
import Product from './components/Bai7/Product'
import Detail from './components/Bai7/Detail'
import Admin from './components/Bai8/Admin'
import Account from './components/Bai8/Account'
import Product1 from './components/Bai8/Product1'
import CustomLink from './components/Bai9/CustomLink';
import HomePage from './components/Bai9/HomePage';
import NotFound1 from './components/Bai9/NotFound1';
import ListUser from './components/Bai10/ListUser'
import UserDetail from './components/Bai10/UserDetail'


export default function App() {
  const navigate = useNavigate();
  const handleRedirect = () =>{
    navigate("/");
  }
  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav> */}

      <nav>
        {/* <NavLink to="/">Home</NavLink> */}
        <NavLink to="/about">About</NavLink>
        {/* <NavLink to="/contact">Contact</NavLink> */}
        <button onClick={handleRedirect}>Chuyển hướng về home</button>
        <button onClick={() => navigate(-1)}>Quay lại</button>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/notfound">Not Found</NavLink>
        <NavLink to="/home1">Home</NavLink>
        <NavLink to="/contact1">Contact</NavLink>
        <NavLink to="/home2">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/detail">Detail</NavLink>
        <NavLink to="/admin">Admin</NavLink>
        <NavLink to="/account">Account</NavLink>
        <NavLink to="/product1">Product</NavLink>
      </nav>
      {/*
        B1: sử dụng component browser router để cung cấp cho component app
        B2: trong component app, định nghĩa các router cho các trang  
       */}
       {/* khu vực định tuyến các router ko đc viết html trong này */}
      <Routes>
        {/* định nghĩa các router cho component */}
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path='/about' element={<About />}></Route>
        {/* <Route path='/contact' element={<Contact />}></Route> */}
        <Route path='/*' element={<NotFound />}></Route>
        <Route path='/' element={<Bai1 />}></Route>
        <Route path='/contact' element={<Bai2 />}></Route>
        <Route path='/login' element={<Bai3 />}></Route>
        <Route path='/register' element={<Bai4 />}></Route>
        <Route path='/notfound' element={<Bai5 />}></Route>
        <Route path='/home1' element={<Home1 />}></Route>
        <Route path='/contact1' element={<Contact1 />}></Route>
        <Route path='/home2' element={<Home2 />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/detail' element={<Detail />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/account' element={<Account />}></Route>
        <Route path='/product1' element={<Product1 />}></Route>
        <CustomLink />
        <Switch>
          <Route path="/home-page" exact component={<HomePage />} />
          <Route path="/not-found" component={<NotFound1 />} />
          <Redirect to="/not-found" />
        </Switch>
        <Route path='/listuser' element={<ListUser />}></Route>
        <Route path='/userdetal' element={<UserDetail />}></Route>

      </Routes>
    </div>
  )
}
