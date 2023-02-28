import React from "react";
import loader from '../assets/images/loader.gif'

export const Loader =() => (
    <div id="preloader">
        <div id="status">
            <img src={loader} id="preloader_image" alt="loader" />
        </div>
    </div>
)