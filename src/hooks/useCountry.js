
import {useState, useEffect} from 'react';

const useCountry = (name) => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchCountryInfo = async (name) => {
      try {
        setLoading(true);
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        if (response.status === 404) throw new Error('Could not find the country you are looking for, Try again!');
        const data = await response.json();
        setCountry(data);
      } catch (err) {
        console.log(err);
        setError("We couldn't find that country");
      } finally {
          setLoading(false);
      };
    }
    fetchCountryInfo();
  }, [])

  return {
    loading, 
    error, 
    country
  }
}

export default useCountry;