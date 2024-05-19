import { Details } from "../interfaces/searchMonstersInter";

const FormOutput = ({ theMon }: { theMon: Details | null }) => {

  //For the non-array objects inside of the monsters details {namely Speed and Skills}
  const getObjDetails = (obj: { [key: string]: number | boolean | undefined } | undefined): string => {
    if (!obj) { // Check if the object is undefined and handle it
      return 'N/A';
    }
    const objDetails = [];
    for (const [key, value] of Object.entries(obj || {})) { 
      if (value === undefined) {
        // This will skip over any attributes that aren't in the data provided
      } else if (key === 'hover' && value) {
        // this is special conditioning if the data has the key "hover"
        objDetails.push('Hover');
      } else {
        // all valid entries are then added
        objDetails.push(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value} ft.`);
      }
    }

    return objDetails.length > 0 ? objDetails.join(', ') : 'N/A'; //N/A is incase the object is empty or has no values
  };

  const speedDetails = getObjDetails(theMon?.speed);
  const skillDetails = getObjDetails(theMon?.skills);

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
        <div className="infoForm3"></div>
      </div>
      <div className="formInfoFourCon">
        <div className="infoForm4"><strong>Saving Throws</strong> </div>
        <div className="infoForm4"><strong>Skills</strong></div>
        <div className="infoForm4"><strong>Damage Immunities</strong></div>
        <div className="infoForm4"><strong>Condition Immunities</strong></div>
        <div className="infoForm4"><strong>Senses</strong></div>
        <div className="infoForm4"><strong>Languages</strong></div>
        <div className="infoForm4"><strong>Challenge</strong></div>
      </div>
      <div className="formInfoFourCon">

      </div>
      {theMon?.special_abilities?.map((special, i) => {
        return(
          <div className="formInfoMap1Con">
            <div className="infoFormMap1"><strong><em>{special.name}.</em></strong> {special.desc}</div>
          </div>
        )
      })}     

    </div>
  )
}
export default FormOutput