import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
                <div className="container-fluid">
                <Link class="navbar-brand" href="#">
    <img src="https://png.pngtree.com/element_our/png/20180917/b-icon-design-vector-png_93146.jpg" width="60" height="30" alt=""/>
  </Link>
                    <a class="navbar-brand" href="#">Brugu</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav me-end  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/home"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Home
                                </span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">
                                    <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Register</span>

                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/user">
                                    <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">User</span> </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar ;