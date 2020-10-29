import React from 'react'
import "./Header.css"
// import {useState, useEffect} from "react"

function Header() {
    // const [expanded, setExpanded] = useState(false)
    // const [byType, setByType] = useState(false);

    // function searchByType() {
    //     setByType(true);
        
    // }

    // useEffect(() => {

    //   searchByType()
       
    // }, [byType])

    // function expand(){
    //     setExpanded(!expanded)
    // }

    return (
            <header>
                {/* className={expanded? "show" : null} */}
                {/* <div className="row-1"> */}
                    {/* <input type="text" name="" id="" placeholder="Search Pokemon"/> */}
                    <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/500px-International_Pok%C3%A9mon_logo.svg.png" alt=""/>
                    {/* <h4 onClick={expand}>Sort By Types</h4> */}
                {/* </div> */}
                {/* <div className="types">
                    <h4 id="normal" onClick ={searchByType}>Normal</h4>
                    <h4 id="grass">Grass</h4>
                    <h4 id="fire">Fire</h4>
                    <h4 id="water">Water</h4>
                    <h4 id="fighting">Fighting</h4>
                    <h4 id="flying">flying</h4>
                    <h4 id="poison">poison</h4>
                    <h4 id="ground">ground</h4>
                    <h4 id="rock">rock</h4>
                    <h4 id="bug">bug</h4>
                    <h4 id="ghost">ghost</h4>
                    <h4 id="electric">electric</h4>
                    <h4 id="psychic">psychic</h4>
                    <h4 id="ice">ice</h4>
                    <h4 id="dragon">dragon</h4>
                    <h4 id="dark">dark</h4>
                    <h4 id="steel">steel</h4>
                    <h4 id="fairy">fairy</h4>
                </div> */}
            </header>
    )
}

export default Header
