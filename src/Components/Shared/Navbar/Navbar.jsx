import React, { useState } from "react";
import Container from "../Container/Container";
import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react'

const Navbar = () => {

  const [isOpen, setOpen] = useState(false)

  const navOptions = <>
     <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active menu" : "menu"
  }
>
  login/register
</NavLink>
      <label htmlFor="my-drawer" className={`${isOpen && 'text-white'} drawer-button`}><Hamburger  toggled={isOpen} toggle={setOpen} direction="left" /></label>
  </>
  return (
    <div className=" fixed z-30 w-full top-0 bg-transparent backdrop-blur-2xl p">
      <div className="drawer ">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  
  <div className="drawer-content">
  <Container>
      <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-white text-2xl font-semibold ">Techo</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex items-center gap-12">
        {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <button className="text-white bg-[#e7422f] rounded-3xl px-10 py-3 text-thin hover:bg-[#c53525]">Shop</button>
  </div>
</div>
      </Container>
   
  </div> 
  <div className="drawer-side">
    <label onClick={() => setOpen(false)} htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-white rounded-sm bg-[#e7422f]" : "text-gray-400 rounded-sm"
  }
>
  <li className="flex items-center justify-center"><a className="w-full flex items-center justify-center">Home</a></li>
</NavLink>
      <NavLink
  to="/products"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-white text-center bg-[#e7422f] rounded-sm" : "text-gray-400 rounded-sm text-center"
  }
>
<li className="flex items-center justify-center w-full"><a className="w-full flex items-center justify-center">Products</a></li>
</NavLink>
      <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-white text-center bg-[#e7422f] rounded-sm" : "text-gray-400 rounded-sm text-center"
  }
>
<li className="flex items-center justify-center w-full"><a className="w-full flex items-center justify-center">Login</a></li>
</NavLink>
    </ul>
  </div>
</div>
     
    </div>
  );
};

export default Navbar;
