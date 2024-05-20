import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";
import { IPicked } from "../interfaces/allSpellsInter";


const AllSpells = () => {
  // get the parameter from the url (which is based on which url the user searched for)
  const params = useParams();
  const symbol = params.symbol
  // set url for api based on user picked option
  const url = `https://www.dnd5eapi.co/api/${symbol?.toLowerCase()}`

  // State to hold the option data
  const [spells, setSpells] = useState<IPicked | null>(null);

  const getSpells = async () => {
    try {
      console.log("Getting spells")
      const response = await fetch(url);
      const data = await response.json();
      setSpells(data) 
      console.log(data)
    } catch(e) {
      console.error(e)
    }
  };

  // useEffect will run to get all spells when component mounts
  useEffect(() => {
    getSpells();
  }, [])

  // loaded function for loading elements once data has been fetched
  const loaded = () => {
    return (
      <div className="apiContainer">
        <h2 className="topInfo">Number Of Spells: {spells?.count}</h2>
        <div className="allInfoContainer">
          {spells?.results.map((spell) => {
            return(
          
            <div className="eachInfoMapContainer">
              <div className="infoOneTitle">Name:</div>
              <div className="infoOne">{spell.name}</div>
              <div className="infoTwoTitle">Level:</div>
              <div className="infoTwo">{spell.level}</div>
              <Link className="infoDeeper" to={`${spell.url.slice(4)}`}>
                <div>Spell Details</div>
              </Link>
            </div>
          )})}
        </div>  
      </div>
    )
  }
  
  // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return spells ? loaded() : loading();
}
export default AllSpells;