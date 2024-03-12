import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
  const [countries, setCountries]=useState([]);
  const [visitedCountries,setVisitedCountries]=useState([]);
  const [visitedFlags, setVisitedFlags]=useState([])

  const handleVisitedCountries= country=>{
    const newVisitedCountries=[...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
  }

  const handleVisitedFlag=flag=>{
    const newVisitedFlag=[...visitedFlags, flag]
    setVisitedFlags(newVisitedFlag)
  }

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=> setCountries(data))
  },[])
  return (
    <div>
      <h3 className='align'>Countries: {countries.length}</h3>
      <div style={{display:'flex', flexDirection:'column'}}>
      <div>
        <h2 style={{marginLeft:'20px'}}>Visited Country: {visitedCountries.length}</h2>
        <ul>
          {
            visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>
      <div className="visited-flag">
        {
            visitedFlags.map((flag,idx)=><img key={idx} src={flag}></img>)
        }
      </div>
      </div>
      
      <div className="countries">
        {
          countries.map(country=><Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag} 
          country={country}></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;