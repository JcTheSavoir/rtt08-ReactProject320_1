import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

interface IEachSpell {
  index: string;
  name: string;
  desc: string[];
  higher_level?: string[];
  range: string;
  components: string[];
  material?: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type?: string;
  damage?: {
    damage_type: {
      index: string;
      name: string;
      url: string;    
    };
    damage_at_slot_level: {
      [key: string]: string;
    }; 
  };
  school: {
    index: string;
    name: string;
    url: string;    
  };
  classes: {
    index: string;
    name: string;
    url: string;
  }[];
  subclasses?: {
    index: string;
    name: string;
    url: string;
  }[];
  url: string;
}

const EachSpell = () => {
  const params = useParams();
  const symbol = params.symbol
  const url = `https://www.dnd5eapi.co/api/spells/${symbol?.toLowerCase()}`

  const [spell, setSpell] = useState<IEachSpell | null>(null);

  const getSpell = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setSpell(data) 
      console.log(data)
    } catch(e) {
      console.error(e)
    }
  };
  useEffect(() => {
    getSpell();
  }, [])

  const loaded = () => {
    console.log(spell)
    return (
      <div className="apiContainer">
            <div className="eachInfoContainer">
              <div className="topInfoContainer">
                <div className="topInfoTitle">{spell?.name}</div>
                <div className="topInfoEach"><em>Level {spell?.level} {spell?.school.name}</em></div>
                <div className="topInfoEach"><strong>Casting Time:</strong> {spell?.casting_time}</div>
                <div className="topInfoEach"><strong>Range:</strong> {spell?.range}</div>
                <div className="topInfoEach"><strong>Components:</strong> {spell?.components.join(', ')} 
                {spell?.material && `(${spell?.material})`}</div>
                <div className="topInfoEach"><strong>Duration:</strong> {spell?.duration}</div>
              </div>
              <div className="bottomInfoContainer">
                <div className="bottomInfoEach">{spell?.desc.join(' ')}</div>
                <br></br>
                {spell?.higher_level && spell?.higher_level.length > 0 && (
                  <>
                    <div className="bottomInfoEach"><strong>At Higher Levels: </strong>{spell?.higher_level.join(' ')}</div>
                    <br></br>
                  </>
                )}
                <span className="bottomInfoEach"><strong>Class</strong>: {spell?.classes && spell?.classes.length > 0 ? spell?.classes.map((theClass) =>
                  <span className="bottomInfoEach">- <em>{theClass.name}</em> </span>
                ) : "N/A"}
                </span>
                <span className="bottomInfoEach"><strong>Subclass</strong>:  {spell?.subclasses && spell?.subclasses.length > 0 ? spell?.subclasses?.map((theSubClass) =>
                  <span className="bottomInfoEach">- <em>{theSubClass.name}</em> </span>
                ) : 'N/A'}
                </span>
              </div>
            </div>
      </div>
    )
  }
const loading = () => {
  return <h1>Loading...</h1>;
 };

  return spell ? loaded() : loading();
}
export default EachSpell;