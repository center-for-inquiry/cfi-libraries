import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";

import useMenu from "../hooks/useMenu";

const Header = () => {

    return (
        
        <>
            <Helmet>
                <script src="https://centerforinquiry.org/js/new/src/nav-icon.js" type="text/javascript"></script>
                <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
            </Helmet>
            
            <nav className="navbar">
                <a className="navbar-brand" href="/">
                        <img id="logo" className="d-none d-md-block" src="https://centerforinquiry.org/libraries/wp-content/uploads/sites/40/2020/07/cfi-libraries-white.png" alt="CSICon Logo"></img>
                        <img id="logo" className="d-md-none d-block" src="https://centerforinquiry.org/libraries/wp-content/uploads/sites/40/2020/07/cfi-libraries-white.png" alt="CSICon Logo"></img>
                </a>

                <ul className="navbar-nav ml-lg-auto d-none d-lg-inline">
                    <li className="nav-item mx-auto mr-lg-2 d-inline-block">
                        <Link className="nav-link" to="/search" id="catalogue-link">Catalogue</Link>
                    </li>
                    <li className="nav-item mx-auto ml-lg-2 d-inline-block">
                        <a className="btn white-button" href="/">For Donors</a>
                    </li>
                </ul>

                <div id="menu-button">
                  <div id="menu-text" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">MENU</div>
                  <div id="nav-icon3" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
                </div>

                <div className="collapse navbar-collapse collapseNav" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {useMenu().map(node => {
                                let url = node.url
                                let newUrl = url.split("/libraries").pop()

                                return(
                                    <li className="nav-item nav-nav-item" key={node.id}>
                                        <Link className="nav-link mx-auto" to={newUrl} id={`${node.label}-link`}>{node.label}</Link>
                                    </li>
                                )
                            }
                        )}
                        
                    </ul>
                </div>
            </nav>
        </>

    );
}

export default Header;