import React from 'react'
import "./ProgressBar.css"

function ProgressBar({statName, width}) {
    return (
        <div className="bar">
            <p className="bar-name">{statName}</p>
            <div className="bar-wrap">
                <div className="points" style={{width :`${width*100/150}%`}}>
                    
                </div>
            </div>
    <span >{width}</span>
        </div>
    )
}

export default ProgressBar
