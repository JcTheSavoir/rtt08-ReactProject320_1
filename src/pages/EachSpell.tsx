import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

interface IPicked {
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
      <div className="apiContainer">
            <div className="eachInfoContainer">
              <div className="topInfoContainer">
                <div className="topInfoTitle">{picked?.name}</div>
                <div className="topInfoEach"><em>Level {picked?.level} {picked?.school.name}</em></div>
                <div className="topInfoEach"><strong>Casting Time:</strong> {picked?.casting_time}</div>
                <div className="topInfoEach"><strong>Range:</strong> {picked?.range}</div>
                <div className="topInfoEach"><strong>Components:</strong> {picked?.components} ({picked?.material})</div>
                <div className="topInfoEach"><strong>Duration:</strong> {picked?.duration}</div>
              </div>
              <div className="bottomInfoContainer">

              </div>
            </div>
      </div>
    )
  }
const loading = () => {
  return <h1>Loading...</h1>;
};

  return picked ? loaded() : loading();
}
export default EachSpell;

const acidArrow = 
{
  "index": "acid-arrow",
  "name": "Acid Arrow",
  "desc": [
    "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn."
  ],
  "higher_level": [
    "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd."
  ],
  "range": "90 feet",
  "components": [
    "V",
    "S",
    "M"
  ],
  "material": "Powdered rhubarb leaf and an adder's stomach.",
  "ritual": false,
  "duration": "Instantaneous",
  "concentration": false,
  "casting_time": "1 action",
  "level": 2,
  "attack_type": "ranged",
  "damage": {
    "damage_type": {
      "index": "acid",
      "name": "Acid",
      "url": "/api/damage-types/acid"
    },
    "damage_at_slot_level": {
      "2": "4d4",
      "3": "5d4",
      "4": "6d4",
      "5": "7d4",
      "6": "8d4",
      "7": "9d4",
      "8": "10d4",
      "9": "11d4"
    }
  },
  "school": {
    "index": "evocation",
    "name": "Evocation",
    "url": "/api/magic-schools/evocation"
  },
  "classes": [
    {
      "index": "wizard",
      "name": "Wizard",
      "url": "/api/classes/wizard"
    }
  ],
  "subclasses": [
    {
      "index": "lore",
      "name": "Lore",
      "url": "/api/subclasses/lore"
    },
    {
      "index": "land",
      "name": "Land",
      "url": "/api/subclasses/land"
    }
  ],
  "url": "/api/spells/acid-arrow"
}