import React, { useState } from 'react'

export const Footer = () => {

    const [clicks, setclicks] = useState(0);

    const year = new Date().getFullYear();
    const companyName ="Caliche";
    
    const handleClick = ()=> {
        setclicks(clicks +1);
    }


  return (
    <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-body-secondary">&copy; {year} {companyName} Clicks={clicks}</p>

    <span onClick={handleClick}>
        <button type="button"className="btn btn-sm btn-outline-secondary">
        Click it
        </button>
        </span>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
  </footer>
</div>
  )
}
