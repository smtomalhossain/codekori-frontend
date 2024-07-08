import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
        <div className="header-wrapper">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-2">
                        <div className="main-logo">
                        <Link to="/"><img src="/images/Logo.svg" alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-10">
                    <div className="menu-links">
                  <div className="d-flex align-content-center gap-3  justify-content-end">
                    <NavLink to="/">Services</NavLink>
                    <NavLink to="/product">Academy</NavLink>
                    <NavLink to="/blogs">Career</NavLink>
                    <NavLink to="/contact">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <button className="button text-white d-flex">Schedule a Call</button>
                  </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header