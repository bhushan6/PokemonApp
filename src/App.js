import React from 'react';
import {useState, useEffect} from 'react'
import './App.css';
import Card from '../src/Components/Card'
import Header from "../src/Components/Header"

let pokemon = [];
let inLim = 50;
let inOff = 0;


function App() {
  const [data, setData] = useState([]);
  const [lim, setLim] = useState(inLim);
  const [off, setOff] = useState(inOff);
  const [loading, setLoading] = useState(true)


useEffect(() => {

  async function getData(limit, off) {
    let resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${off}`)
    let data = await resp.json()
    let poke = data.results
    // console.log(poke)
    for (let index = 0; index < poke.length; index++) {
        const element = poke[index];
        let respSingle = await fetch(element.url)
        let singlePoke = await respSingle.json()
        pokemon.push(singlePoke)
    }
    setData(pokemon)
    setLoading(false)
}

window.addEventListener('scroll', function () {

  let scrolling = window.innerHeight + window.scrollY;
  let scrollable = document.body.offsetHeight * 0.9;

  if (scrolling >= scrollable){
    if(inLim === 50 && inOff === 0){
      inLim = 10;
    inOff += 50
    setOff(inOff)
    setLoading(true)
    console.log(loading)
    getData(inLim, inOff)
    console.log(loading)
    // console.log(inLim, inOff)
    } else{
      inLim = 10;
      inOff+=10
      // console.log(inLim, inOff)
      setOff(inOff)
      setLoading(true)
      console.log(loading)
      getData(inLim, inOff)
      console.log(loading)
    }
  
  }
  
})
    getData(inLim, inOff)
  }, [lim])



  return (
    <div className="container" >
      
         <Header/>
         {data.map(item => (
           <Card 
            key = {item.id}
           name= {item.name} 
           imgUrl={item.sprites.other["official-artwork"].front_default} 
           rank={item.id} 
           stats={item.stats} 
           pokeType={item.types[0].type.name}
           />
         ))}
    </div>
  );
}

export default App;