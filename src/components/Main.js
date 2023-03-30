import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

function Main() {
    return (<div>
         <Link to="/pizza">
                <button id="order-pizza">Pizza Time</button>
            </Link>
        Main Div reading from Main.js
        </div>)
};

export default Main;