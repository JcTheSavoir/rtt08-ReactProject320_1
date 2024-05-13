import { Link } from "react-router-dom";

const Options = () => {
    const userOptions = [
        { name: "Search", symbol: "Monsters" },
        { name: "All", symbol: "Spells" },
      ];
    
      return (
        <div className="userOptions">
          {userOptions.map((picked, i) => {
            const { name, symbol } = picked;
    
            return (
              <Link to={`/${symbol.toLowerCase()}/${name.toLowerCase()}`} key={i}>
                <h2>{name} {symbol}</h2>
              </Link>
            );
          })}
        </div>
      )
    }
export default Options