import {useState, useEffect, useRef} from "react";
import {useParams} from "react-router-dom"
import { IMonsters } from "../interfaces/searchMonstersInter";
import FormOutput from "../components/FormOutput";

const SearchMonster = () => {
  const params = useParams();
  const symbol = params.symbol
  // Different api for monster search; will still use the symbol from user when they navigated to this page. However
  // some parameters are prefilled in order to limit searchability; in order to limit amount of localstorage being used
  const url = `https://api.open5e.com/v1/${symbol?.toLowerCase()}/?document__slug=wotc-srd&format=json&limit=350`

  // ---------------------  states and refs 
  const [monsters, setMonsters] = useState<IMonsters | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const inputReference = useRef<HTMLInputElement>(null); 
  
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const getMonsters = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMonsters(data) 
    } catch(e) {
      console.error(e)
    }
  };
  
  useEffect(() => {
    getMonsters();
  }, [])
  
  // keeping track of the input as it's changed (by user typing or selecting an option)
  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchInput(value);
  };
  
  //Array to hold the different "monster names" returned by the api
  let namesArray: string[] = []
  
  const loaded = () => {
    
    // Add's all of the monster names to the namesArray
    const allMonsterNames = monsters?.results.map((monster) =>
      namesArray.push(monster.name)
    )

    const filterMonsters = monsters?.results.filter(
      monster => monster.name.toLowerCase().includes(searchInput.toLowerCase())
    ).slice(0, 10) || [];

    const getSearch = () => {
      if (inputReference.current) {
        const currentMonster = inputReference.current.value;
        if (namesArray.includes(currentMonster)) {
          const foundMonster = filterMonsters.find(Details => Details.name === currentMonster)
          return(foundMonster)
        }
      };
      return null; //If no monster is found from the users input
    }

    // set this to the return of getSearch, will be passed as a prop
    const searchedMonster = getSearch()

    return (
      <div className="apiContainer">
        <form onSubmit={submitForm} className="apiFormContainer">
          <label htmlFor="searchName">Enter a Monsters Name: </label>
          <input list="monsterNames" name="searchName" ref={inputReference} value={searchInput} onChange={inputChange}/>
          <datalist id="monsterNames">
            {filterMonsters?.map((monster) => {
              return(
              <option key={monster.slug} value={monster.name}></option>
            )})}
          </datalist>
          <button onClick={getSearch} className="apiFormButton">Submit</button>
        </form>
          {searchedMonster ? (
              <FormOutput theSearchedMonster={searchedMonster} />
            ) : (
              <h2>No monster found by that name, try searching again.  You can try "Zombie" as a known working option</h2>
            )
          }
      </div>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>;
  }

  return monsters ? loaded() : loading(); 
}

export default SearchMonster