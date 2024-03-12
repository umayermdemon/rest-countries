import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
  // console.log(country)
  const {name,flags,cca3,timezones,area}=country

  const [visited, setVisited]=useState(false);

  const handleVisited=()=>{
    setVisited(!visited)
  }
  const markVisitedCountries=()=>handleVisitedCountries(country)
  const markVisitedFlag=()=> handleVisitedFlag(country.flags.png)
  return (
    <div className={`country ${visited && 'visited'}`}>
      <h2>Name: {name.common}</h2>
      <img style={{width:'400px', height:'200px'}} src={flags.png} alt="" />
      <p>Area: {area}</p>
      <h3>Code:{cca3}</h3>
      <h3>Time Zone: {timezones[0]} </h3>
      <button onClick={markVisitedCountries}>Mark Visited</button>
      <button onClick={markVisitedFlag}>Add Flag</button>
      <button onClick={handleVisited}>{visited? 'Visited':'Going'}</button>
      <br />
      <br />
      {visited ?'I have visited this country':''}
    </div>
  );
};

export default Country;