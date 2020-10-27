import React from 'react'
import './Card.css'
import ProgressBar from './ProgressBar'
import Modal from './Modal'

function Card({imgUrl, name, rank, stats, pokeType}) {

    const bgColor = {
        normal: "#BDBDAF",
        grass : "#7eb998",
        fire:"#f09990",
        water: "#8ab7e2",
        fighting: "#cc8c7f",
        flying: "#78A1FF",
        poison: "#d183c8",
        ground: " #f1db90",
        rock : "#e4d699",
        bug: "#d9e086",
        ghost: "#9995e4",
        electric: "#f1e48e",
        psychic: "#e493bf",
        ice : "#a2dee7",
        dragon: "#9c8fe5",
        dark : "#d8a992",
        steel: "#a7a3d8",
        fairy: "#ebacf0"
    }
// let bg = "";
let color = "#000";
const keys = Object.keys(bgColor);
if(keys.includes(pokeType)) {
    color = bgColor[pokeType];
}

function clicked() {

}


    // console.log(bgColor.normal)

    return (
        <div className="card-container" onClick={clicked}>
            <div className="card">
                <div className="front-card" style = {{backgroundColor : color}}>
                    <div className="img-container">
                        <img src={imgUrl} alt=""/>
                    </div>
                    <h3 className="rank">#{rank}</h3>
                    <h3 className="name">{name}</h3>
                    <h3 className="type" >{pokeType}</h3>
                </div>
                <div className="back-card">
                    <div className="stats">
                        {stats.map(item => (
                            <ProgressBar 
                            key = {item.id}
                            width = {item.base_stat} 
                            statName= {item.stat.name}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
