import React from "react";
import './style.css'

export function TimeLine({ steps, finished}){
    const lstSteps = []
    let renderFirstLine = false;
    for(let i=1; i <= steps; i++){
        lstSteps.push(i);
    }

    return(
        <div className="progressBar">
            {lstSteps.map((num) => (
                <>
                    {renderFirstLine? <div className={`line ${num<=finished? "backgroundLine":""}`}></div> : renderFirstLine=true}
                    <div className={`ball ${num<=finished? "backgroundBall":""}`} key={num}><p>{num}</p></div>
                </>
            ))}
        </div>
    )
}