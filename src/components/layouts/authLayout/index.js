import React from "react";
import Footer from "./footer";
import Header from "./header";

function AuthLayout({ className, children }) {
  return (
    <div className={`auth-layout ${className}`}>
      <Header />
      <div className="auth-layout-wrap">{children}</div>
      <Footer />
    </div>
  );
}

export default AuthLayout;
