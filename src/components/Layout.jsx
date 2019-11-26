import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// {children en este caso es lo que encapsulo este componente en app.js}

const Layout = ({ children }) => (
  <div className="App">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
