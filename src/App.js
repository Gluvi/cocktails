import React, { useState, useEffect } from 'react';

import CocktailList from './components/CocktailList';
import SearchCoctail from './components/SearchCocktail';
import './App.css';
let link = 'a';

export default function App() {
  const [data, setData] = useState(null);

  const handleSearchCocktail = (event) => {
    link = event.target.value;
    
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + link)
      .then(response => response.json())
      .then(cocktailData => setData(cocktailData))
}

useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + link)
      .then(response => response.json())
      .then(cocktailData => setData(cocktailData));
  }, []);

  if (!data) {
    return <div className='app'>Učitavam koktele</div>;
  }
return(
  <div className='app'>
    <SearchCoctail searchCocktail={handleSearchCocktail} />
    <CocktailList cocktails={data.drinks} />
  </div>

  );
}