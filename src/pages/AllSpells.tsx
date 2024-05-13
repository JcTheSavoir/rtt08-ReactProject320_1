import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";


//creating interfaces for the api data
interface ISpell {
    index: string;
    name: string;
    level: number;
    url: string;
}
interface IPicked {
  count: number;
  results: ISpell[];
}


const AllSpells = () => {
  // get the parameter from the url (which is based on which url the user searched for)
  const params = useParams();
  const symbol = params.symbol
  // set url for api based on user picked option
  const url = `https://www.dnd5eapi.co/api/${symbol?.toLowerCase()}`

  // State to hold the option data
  const [picked, setPicked] = useState<IPicked | null>(null);

  const getSpells = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPicked(data) 
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
      <div className="infoAPIContainer">
        <div className="topInfo">Number Of Spells: {picked?.count}</div>
        {picked?.results.map((spell) => (
          <div className="eachInfoContainer">
            <div className="infoOne">{spell.name}</div>
            <div className="infoTwo">{spell.level}</div>
            <div className="infoThree">{spell.url}</div>
            <Link to={`${spell.url.slice(4)}`}>
              <div className="infoDeeper">Click For More Information</div>
            </Link>
          </div>
        ))}
      </div>
    )
  }
  
  // Function for when data doesn't exist.
const loading = () => {
  return <h1>Loading...</h1>;
};

  return picked ? loaded() : loading();
}
export default AllSpells;