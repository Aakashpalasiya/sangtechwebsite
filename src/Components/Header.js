import React from 'react'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#"><b>SANGTECH TECHNOLOGIES </b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#">Product</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#">Career</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#">Clients</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#">Contact Us</a>
          </li>
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">info@sangtechtechnologies.in</a>
          </li>
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">+91-9667251810</a>
          </li>
        </ul>
    </div>
  </div>
</nav>
  )
}

export default Header