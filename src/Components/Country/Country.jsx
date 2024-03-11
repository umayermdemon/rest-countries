import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
  console.log(country)
  const {name,flags,cca3,timezones,area}=country

  const [visited, setVisited]=useState(false);

  const handleVisited=()=>{
    setVisited(!visited)
  }
  return (
    <div className="country">
      <h2>Name: {name.common}</h2>
      <img src={flags.png} alt="" />
      <p>Area: {area}</p>
      <h3>Code:{cca3}</h3>
      <h3>Time Zone: {timezones[0]} </h3>
      <button onClick={handleVisited}>{visited? 'Visited':'Going'}</button>
      <br />
      <br />
      {visited ?'I have visited this country':''}
    </div>
  );
};

export default Country;