import { useState, useEffect } from 'react';

const usePlanets = (defaultValue) => {
  const [planets, setPlanets] = useState(defaultValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchPlanets = async () => {
      const response = await fetch(
        'https://swapi-trybe.herokuapp.com/api/planets/',
      );
      const data = await response.json();
      setPlanets(data.results);
      setLoading(false);
    };
    fetchPlanets();
  }, []);

  return { planets, loading };
};

export default usePlanets;
