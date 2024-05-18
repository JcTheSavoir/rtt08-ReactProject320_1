import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import { Speed, Skills, Actions, Details, IMonsters } from "../interfaces/searchMonstersInter";

const SearchMonster = () => {
  const params = useParams();
  const symbol = params.symbol
  // Different api for monster search; will still use the symbol from user when they navigated to this page. However
  // some parameters are prefilled in order to limit searchability; in order to limit amount of localstorage being used
  const url = `https://api.open5e.com/v1/${symbol?.toLowerCase()}/?document__slug=wotc-srd&format=json&limit=350`

  const [monsters, setMonsters] = useState<IMonsters | null>(null);

  const getMonsters = async () => {
    try {
      console.log("Getting Monsters")
      const response = await fetch(url);
      const data = await response.json();
      setMonsters(data) 
      console.log(data)
    } catch(e) {
      console.error(e)
    }
  };
  
  useEffect(() => {
    getMonsters();
  }, [])


  const loaded = () => {
    console.log("hello")
    return (
      <div className="apiContainer">
        <h1>{monsters?.count}</h1>
      </div>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>;
  }

  return monsters ? loaded() : loading(); 
}

export default SearchMonster