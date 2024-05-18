import { Link } from "react-router-dom";

const Options = () => {
  const userOptions = [
      { name: "Search", symbol: "Monsters" },
      { name: "All", symbol: "Spells" },
  ];
  
  return (
    <div className="optionsPageContainer">
        <h2 className="optionsTitle">Pick your Poison</h2>
        <div className="optionsDescr">Below you will find a list of current options implemented in the site.</div>
        <ul className="optionsList">
          {userOptions.map((picked, i) => {
            const { name, symbol } = picked;          
            return (
                <li className="optionListitem1">
                    <Link to={`/${symbol.toLowerCase()}/${name.toLowerCase()}`} key={i}>
                      <span className="optionLink1">{name} {symbol}</span>
                    </Link>
                </li>
            );
          })}
          <li className="optionListItem2">
            <span className="optionLink2">
              More Options will be coming soon!
            </span>
          </li>
        </ul>
    </div>
  )
}
export default Options