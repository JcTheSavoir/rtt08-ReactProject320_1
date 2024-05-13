import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

interface ISpell {
}
interface IPicked {

}

const EachSpell = () => {
  const params = useParams();
  const symbol = params.symbol
  const url = `https://www.dnd5eapi.co/api/spells/${symbol?.toLowerCase()}`

  const [picked, setPicked] = useState<IPicked | null>(null);

  const getSpell = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPicked(data) 
      console.log(data)
    } catch(e) {
      console.error(e)
    }
  };
  useEffect(() => {
    getSpell();
  }, [])

  const loaded = () => {
    console.log(picked)
    return (
      <div className="underConstruction">
        <div className="underConstructionImage"></div> 
      </div>
    )
  }
const loading = () => {
  return <h1>Loading...</h1>;
};

  return picked ? loaded() : loading();
}
export default EachSpell;