import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";
import "../css/styles.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.css";


const Layout = ({ children }) => {
  return (
    <>
      <Header />
          <main className="container-fluid">
              {children}
          </main>
      <Footer />
    </>
  );
}

//put footer in space under main

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
