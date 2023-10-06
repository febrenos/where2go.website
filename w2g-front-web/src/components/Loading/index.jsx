import React from "react";
import './style.css';
import loading from '../../img/logoGray.png';

export function Loading(){
    return(
        <div class="load">
        <img src={loading} alt="" />
    </div>
    )
}
