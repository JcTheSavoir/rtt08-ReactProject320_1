import { Details } from "../interfaces/searchMonstersInter";

const FormOutput = ({ theMon }: { theMon: Details | null }) => {
  //For calculating the ability score modifiers
  const calculateModifier = (score: number): number => {
    return Math.floor((score - 10) / 2);
  };

  // Adding incase "theMon" prop ends up being null
  if (!theMon) {
    return <h1>Data Error: Please try Again later</h1>
  } 
  
  // Array defining the labels for the ability score names
  const abilityNames = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
  // Array for defining the ability scores themselves
  const abilityScores = [
    theMon.strength,
    theMon.dexterity,
    theMon.constitution,
    theMon.intelligence,
    theMon.wisdom,
    theMon.charisma
  ];
  // variable for each ability score modifier
  const abilityModifiers = abilityScores.map(score => calculateModifier(score));


  //For the non-array objects inside of the monsters details {namely Speed and Skills}
  const getObjDetails = (obj: { [key: string]: number | boolean | undefined | null } | undefined, type: 'speed' | 'skills' | 'savingThrows'): string => {
    if (!obj) { // Check if the object is undefined and handle it
      return 'N/A';
    }
    const objDetails = [];
    for (const [key, value] of Object.entries(obj || {})) { 
      if (value === undefined) {
        // This will skip over any attributes that aren't in the data provided
        continue;
      }
      // all valid entries are then added
      switch (type) {
        case "skills":
          objDetails.push(`${key.charAt(0).toUpperCase() + key.slice(1)} +${value}`);
          break;
          
        case "speed":
          if (key === 'hover' && value) {
            // this is special conditioning if the data has the key "hover"
            objDetails.push('Hover');
          } else {
            objDetails.push(`${key.charAt(0).toUpperCase() + key.slice(1)} ${value} ft.`);
          }
          break;

        case "savingThrows":
          objDetails.push(`${key.charAt(0).toUpperCase() + key.slice(1, 3)} +${value || "0"}`);
          break;
      }  
    }
    return objDetails.length > 0 ? objDetails.join(', ') : 'N/A'; //N/A is incase the object is empty or has no values
  }

  const speedDetails = getObjDetails(theMon?.speed, "speed");
  const skillDetails = getObjDetails(theMon?.skills, "skills");
  const savingThrowsDetails = getObjDetails({
    strength_save: theMon?.strength_save,
    dexterity_save: theMon?.dexterity_save,
    constitution_save: theMon?.constitution_save,
    intelligence_save: theMon?.intelligence_save,
    wisdom_save: theMon?.wisdom_save,
    charisma_save: theMon?.charisma_save,
  }, "savingThrows")

  console.log(theMon)
  return (
    <div className="formOutputContainer">
      <div className="formInfoOneCon">
        <div className="infoForm1Title">{theMon?.name}</div>
        <div className="infoForm1Details">{theMon?.size} {theMon?.type}, {theMon?.alignment}</div>
      </div>

      <div className="formInfoTwoCon">
        <div className="infoForm2"><strong>Armor Class</strong> {theMon?.armor_class} ({theMon?.armor_desc})</div>
        <div className="infoForm2"><strong>Hit Points</strong> {theMon?.hit_points} ({theMon?.hit_dice})</div>
        <div className="infoForm2"><strong>Speed</strong> {speedDetails}</div>
      </div>

      <div className="formInfoThreeCon">
        {abilityNames.map((name, index) => (
          <div key={index} className="infoForm3Item">
            <div className="infoForm3Name">{name}</div>
            <div className="infoForm3Score">
              {abilityScores[index]} ({abilityModifiers[index] >= 0 ? '+' : ''}{abilityModifiers[index]})
            </div>
          </div>
        ))}
      </div>
      
      <div className="formInfoFourCon">
        <div className="infoForm4"><strong>Saving Throws</strong> {savingThrowsDetails}</div>
        <div className="infoForm4"><strong>Skills</strong> {skillDetails}</div>
        <div className="infoForm4"><strong>Damage Vulnerabilities </strong>{theMon?.damage_vulnerabilities || "N/A"}</div>
        <div className="infoForm4"><strong>Damage Resistances </strong>{theMon?.damage_resistances || "N/A"}</div>
        <div className="infoForm4"><strong>Damage Immunities</strong> {theMon?.damage_immunities || "N/A"}</div>
        <div className="infoForm4"><strong>Condition Immunities</strong> {theMon?.condition_immunities || "N/A"}</div>
        <div className="infoForm4"><strong>Senses</strong> {theMon?.senses || "N/A"}</div>
        <div className="infoForm4"><strong>Languages</strong> {theMon?.languages || "N/A"}</div>
        <div className="infoForm4"><strong>Challenge</strong> {theMon?.challenge_rating || "N/A"} ({theMon?.cr.toLocaleString()} XP)</div>
      </div>
      <div className="formInfoFourCon">

      </div>
      {theMon?.special_abilities && (
        <>
          {theMon?.special_abilities?.map((special, i) => {
            return(
              <div className="formInfoMapCon" key={i}>
                <div className="infoFormMap">
                  <strong><em>{special.name}.</em></strong>
                  <span className="infoFormMapSpan"> {special.desc}</span> 
                </div>
              </div>
            )
          })}
        </>
      )}
      {theMon?.actions && (
        <>
          <h2 className="formInfoMapTitle">Actions</h2>
          {theMon?.actions?.map((action, i) => {
            return(
              <div className="formInfoMapCon" key={i}>
                <div className="infoFormMap">
                  <strong><em>{action.name}.</em></strong>
                  <span className="infoFormMapSpan"> {action.desc}</span> 
                </div>
              </div>
            )
          })}
        </>
      )}
      {theMon?.reactions && (
        <>
          <h2 className="formInfoMapTitle">Reactions</h2>
          {theMon?.reactions?.map((reaction, i) => {
            return(
              <div className="formInfoMapCon" key={i}>
                <div className="infoFormMap">
                  <strong><em>{reaction.name}.</em></strong>
                  <span className="infoFormMapSpan"> {reaction.desc}</span> 
                </div>
              </div>
            )
          })}
        </>
      )}
      {theMon?.legendary_actions && (
        <>
          <h2 className="formInfoMapTitle">Legendary Actions</h2>
          <div className="formInfoMapDesc">{theMon?.legendary_desc}</div>
          {theMon?.legendary_actions?.map((legendary, i) => {
            return(
              <div className="formInfoMapCon" key={i}>
                <div className="infoFormMap">
                  <strong><em>{legendary.name}.</em></strong>
                  <span className="infoFormMapSpan"> {legendary.desc}</span> 
                </div>
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}
export default FormOutput