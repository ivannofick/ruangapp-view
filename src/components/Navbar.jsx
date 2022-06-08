/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Main = () => {
    return (
        <>
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm" id="mainNav"
            style={{height: '6rem'}}
            >
                <div className="container px-5">
                    <a className="navbar-brand fw-bold grad-color-white-purple" href="#page-top">
                        Ruangapp
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                            <li className="nav-item">
                                <a className="nav-link me-lg-3" href="#features">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-lg-3" href="#download">
                                    Products
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-lg-3" href="#download">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default Main;
