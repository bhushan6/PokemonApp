import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './component/Card';
import Header from './component/Header'
// import Pagination from './component/Pagination';

let pokeStartId = 1;

const App = () => {

  const [data, setData] = useState([]);
  let poke = [];
  const [startId, setStartId] = useState(pokeStartId)
  const [isLoading, setIsLoading] = useState(false)

  const nextPage = () => {
    if (pokeStartId <= 751) {
      pokeStartId+=50
      setStartId(pokeStartId);
      setIsLoading(false)
    } else{
      setStartId(1)
      setIsLoading(false)
    }
  }

  const previousPage = () => {
    if(pokeStartId >= 50){
      pokeStartId-=50
      setStartId(pokeStartId)
      setIsLoading(false)
    } else{
      setStartId(751)
      setIsLoading(false)
    }
  }

  

  useEffect(() => {

    nextPage()
    previousPage()

    const getData = async() => {
      for (let i = startId; i <= (startId+49); i++) {
        let result = await axios(` https://pokeapi.co/api/v2/pokemon/${i}`)
        poke.push(result.data)
        
      }
      setData(poke)
      setIsLoading(true)
      console.log(poke)
    }
    getData()
  }, [startId])



  if (isLoading) {
    return (<div className="container">
        <Header/>
        {data.map(item => (
          <Card key= {item.id}  name= {item.name} imgUrl={item.sprites.other["official-artwork"].front_default} rank={item.id} stats={item.stats} pokeType={item.types[0].type.name}/>
        ))}
          <footer>
              <button className="previous" onClick = {previousPage}>Previous</button>
              <button className="next" onClick={nextPage}>Next</button>
          </footer>
      </div>
    )} else{
      return(
        <div className="container">
          <Header/>
          <div className="loadingContainer">
            <div className="loader"></div>
          </div>
          <footer>
              <button className="previous" onClick = {previousPage}>Previous</button>
              <button className="next" onClick={nextPage}>Next</button>
          </footer>
        </div>
      )
    }
}

export default App;