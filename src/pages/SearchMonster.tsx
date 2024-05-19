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
  const [searchInput, setSearchInput] = useState("");

  const getSearch = () => {
    
  }

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("search button clicked")
    event.preventDefault()
  }

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
  const namesArray = []

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const loaded = () => {
    const filterMonsters = monsters?.results.filter(
      monster => monster.name.toLowerCase().includes(searchInput.toLowerCase())
    ).slice(0, 10) || [];
    console.log(filterMonsters)

    return (
      <div className="apiContainer">
        <form onSubmit={submitForm} action="">
          <label htmlFor="searchName">Enter a Monsters Name: </label>
          <input list="monsterNames" name="searchName" value={searchInput} onChange={inputChange}/>
          <datalist id="monsterNames">
            {filterMonsters?.map((monster) => (
              <option key={monster.slug} value={monster.name}></option>
            ))}
          </datalist>
          <br/>
          <button onClick={getSearch}>Submit</button>
        </form>
        <h1></h1>
      </div>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>;
  }

  return monsters ? loaded() : loading(); 
}

export default SearchMonster