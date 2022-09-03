import React from "react";
import Button from "../Button/Button";

import "./Header.css"
import {Link} from "react-router-dom";
function Header() {
    return (
        <div className="header-container">
                       <Link to="/">
                <Button title="Default" />
            </Link>
                <Link to="/defi">
                <Button title="Defi" /></Link>
                <Link to="/nft">
                <Button title="NFT" /></Link>
                <Link to="/metaverse">
                <Button title="Metaverse" /></Link>
                <Link to="/favorites">
            <Button title="Favorites" /></Link>
            
        </div>
    )
}
export default Header