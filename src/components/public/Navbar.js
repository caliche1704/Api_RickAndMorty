import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <span
          className="d-flex aling-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img className="App-logo" height="52" src="rickAndMorty.png" alt="" />
        </span>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link className="nav-link px-2 text-secondary" to={`/`}>Home</Link></li>
          <li><Link className="nav-link px-2 text-secondary" to={`/user-form`}>Formulario</Link></li>
        </ul>
      

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form>
        

    <div className="text-end">
      <button type="button" className="btn btn-outline-light me-2">Login</button>
      <button type="button" className="btn btn-outline-light me-2">Sign up</button>
    </div>
    </div>
  </div>
    
  </header>
  )
}
