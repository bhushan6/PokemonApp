import React from 'react'
import "./Header.css"
import {useState} from "react"

function Header() {
    const [expanded, setExpanded] = useState(false)

    function expand(){
        setExpanded(!expanded)
    }

    return (
        <header className={expanded? "show" : null}>
            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/500px-International_Pok%C3%A9mon_logo.svg.png" alt=""/>
            <h4 onClick={expand}>Expand</h4>
        </header>
    )
}

export default Header
