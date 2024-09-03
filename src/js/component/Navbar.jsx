import React from "react";
import PropTypes from "prop-types";


export const Navbar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-b navbar-dark bg-dark  ">
            <div className="container d-flex justify-content-between justify-md-content-between">
                <div className="d-flex justify-content-between w-100">
            
                        <a className="navbar-brand text-light" href="#">{props.icon}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex align-items-center">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{props.about}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{props.services}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{props.contact}</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>

    );
}

Navbar.propTypes = {
    icon: PropTypes.string,
    home: PropTypes.string,
    about: PropTypes.string,
    services: PropTypes.string,
    contact: PropTypes.string
}



export default Navbar;