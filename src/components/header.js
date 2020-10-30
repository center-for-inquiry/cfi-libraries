import React, { useState } from "react";
import { Link } from "gatsby";
import useMenu from "../hooks/useMenu";

const Header = () => {

    const [spanExpand, setSpan] = useState("");
    const [menuButton, setMenu] = useState("MENU");

    function handleNavClick(e){
        e.preventDefault();

        let navIconButton = document.getElementById("nav-icon3");

        if ( navIconButton.getAttribute("aria-expanded") === "true" ){
            setSpan("open");
            setMenu ("CLOSE");
        } else {
            setSpan("");
            setMenu("MENU");
        }
    }

    return (
        <>  
            <nav className="navbar">
                <a className="navbar-brand" href="/">
                        <img id="logo" className="d-none d-md-block" src="https://centerforinquiry.org/libraries/wp-content/uploads/sites/40/2020/07/cfi-libraries-white.png" alt="CSICon Logo"></img>
                        <img id="logo" className="d-md-none d-block" src="https://centerforinquiry.org/libraries/wp-content/uploads/sites/40/2020/07/cfi-libraries-white.png" alt="CSICon Logo"></img>
                </a>

                <ul className="navbar-nav ml-lg-auto d-none d-lg-inline">
                    <li className="nav-item mx-auto mr-lg-3 d-inline-block">
                        <Link className="nav-link" to="/search" id="catalogue-link">Catalog</Link>
                    </li>
                    <li className="nav-item mx-auto ml-lg-3 d-inline-block">
                        <a className="btn white-button" target="_blank" rel="noreferrer" href="https://centerforinquiry.org/support/">For Donors</a>
                    </li>
                </ul>

                <div id="menu-button" onClick={handleNavClick} role="button" tabIndex="-1">
                  <div id="menu-text" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">{menuButton}</div>
                  <div id="nav-icon3" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
                      <span className={spanExpand}></span>
                      <span className={spanExpand}></span>
                      <span className={spanExpand}></span>
                      <span className={spanExpand}></span>
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