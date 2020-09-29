import React from 'react';
import { Link } from 'gatsby';
import useMenu from '../hooks/useMenu';

const Footer = () => {
    return(
        <div className="container-fluid d-block d-print-none">
            <footer id="site-footer" className="site-footer page-footer" role="contentinfo">
                <div id="footer-row" className="row contain-text m-5 mx-auto justify-content-center">
                    <div className="col-md-4 col-12 footer-left mr-4">
                        <a href="https://centerforinquiry.org"><img alt="CFI Logo" src="https://centerforinquiry.org/img/CFImark2017-on-blue.png" className="d-md-none footer-logo mb-3"></img></a>
                        <h3>Quick Links</h3>
                        <hr className="mb-4"></hr>
                        <div className="clearfix"></div>
                            <ul className="navbar-nav">
                                <div className="footer-menu">
                                    <ul id="menu-footer-menu" className="menu">
                                    <li className="nav-item" key="hOmELiNk">
                                        <Link className="nav-link mx-auto" to="/">Home</Link>
                                    </li>
                                    {useMenu().map(node => {
                                        let url = node.url
                                        let newUrl = url.split("/libraries").pop()

                                        return(
                                            <li className="nav-item" key={node.id}>
                                                <Link className="nav-link mx-auto" to={newUrl} id={`${node.label}-link`}>{node.label}</Link>
                                            </li>
                                        )
                                    }
                                )}
                            </ul>
                        </div>                        
                        </ul>
                        <h5 className="mt-5">FOLLOW US</h5>
                        <a href="https://www.facebook.com/centerforinquiry/" target="_blank" rel="noreferrer"><img alt="Facebook Logo" src="https://centerforinquiry.org/img/social/cfi-facebook.png" className="header-icon mr-2"></img></a>
                        <a href="https://twitter.com/center4inquiry" target="_blank" rel="noreferrer"><img alt="Twitter Logo" src="https://centerforinquiry.org/img/social/cfi-twitter.png" className="header-icon mr-2"></img></a>
                        <a href="https://www.youtube.com/user/centerforinquiry" target="_blank" rel="noreferrer"><img alt="YouTube Logo" src="https://centerforinquiry.org/img/social/cfi-youtube.png" className="header-icon mr-2"></img></a>
                    </div>

                    <div style={{borderLeft: "3px solid #FFF", height: "400px"}} className="d-none d-md-block mr-4">
                    </div>

                    <div className="col-md-4 col-12 footer-right">
                        <a href="https://centerforinquiry.org">
                            <img alt="CFI Logo" src="https://centerforinquiry.org/img/wordpress/CFI2017-on-blue.png" className="d-none d-md-block footer-logo mb-4"></img>
                        </a>
                        <span className="d-md-none">
                            <hr></hr>
                        </span>
                        <h6><strong>Center for Inquiry – Headquarters</strong></h6>
                        <p>
                            PO Box 741<br></br>
                            Amherst, NY 14226<br></br>
                            <a href="tel:7166364869">(716) 636-4869</a>
                        </p>
                        <br></br>
                        <h6><strong>Center for Inquiry – Executive Office</strong></h6>
                        <p>
                            1012 14th Street, NW, Suite 205<br></br>
                            Washington, DC 20005
                        </p>
                        <p>
                            <a href="https://centerforinquiry.org/terms-of-service/">
                                Terms</a> · <a href="https://centerforinquiry.org/privacy/">Privacy&nbsp;Statement
                            </a><br></br>
                            <a href="https://centerforinquiry.org">
                                Center&nbsp;for&nbsp;Inquiry,&nbsp;Inc</a>&nbsp;©&nbsp;2020 · All&nbsp;Rights&nbsp;Reserved.<br></br> 
                                Registered 501(c)(3). EIN: 22-2306795
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;