import React from "react";
import "./style.scss"
 const Header = () => {
    return (
        <React.Fragment>
            <header className="header" data-test="header"><span className="header-content" data-test="header-content">Welcome to header</span></header>
        </React.Fragment>
    )
}

export default Header;