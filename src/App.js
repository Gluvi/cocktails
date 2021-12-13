import React, { useState, useEffect } from 'react';
import CocktailList from './components/CocktailList';
import SearchCoctail from './components/SearchCocktail';
import Navigacija from './components/Navigacija';
import './App.css';

export default function App() {
  const [data, setData] = useState(null);
  let link = '';

  const handleSearchCocktail = (event) => {
    link = event.target.value;

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + link)
      .then(response => response.json())
      .then(cocktailData => setData(cocktailData))
      .catch(error => error)
}

useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + link)
      .then(response => response.json())
      .then(cocktailData => setData(cocktailData))
      .catch(error => error)
  }, []);

  if (!data) {
    return(
      <div className='app'>
        <SearchCoctail 
          searchCocktail={handleSearchCocktail} 
        />
        <h1>Učitavanje koktela...</h1>
      </div>
    );
  }
return(
  <div className='app'>
    <Navigacija />
    <SearchCoctail 
      searchCocktail={handleSearchCocktail} 
    />
    <CocktailList 
      cocktails={data.drinks} 
    />
  </div>

  );
}