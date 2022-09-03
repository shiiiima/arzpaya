import "./Toggle.css"
import React,{useState}  from "react";
const ToggleButton = ({toggle,ThemeToggle }) => {


    return(
<div onClick={()=>ThemeToggle()}   className={`wrg-toggle ${toggle ? 'wrg-toggle--checked' : ''}`}>
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check">
                    <span>🌜</span>
                </div>
                <div className="wrg-toggle-uncheck">
                    <span>🌞</span>
                </div>
            </div>
            <div className="wrg-toggle-circle"></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
        </div>
    )
}

export default ToggleButton;