import React from "react";
import './style.css'

export function SelectButtons(){
return(
    <div class="container">
        <div class="tabs">
            <input type="radio" id="radio-1" name="tabs" checked />
            <label class="tab" for="radio-1">Upcoming<span class="notification">3</span></label>
            <input type="radio" id="radio-2" name="tabs" />
            <label class="tab" for="radio-2">Development</label>
            <input type="radio" id="radio-3" name="tabs" />
            <label class="tab" for="radio-3">Completed</label>
            <span class="glider"></span>
        </div>
    </div>
)
}