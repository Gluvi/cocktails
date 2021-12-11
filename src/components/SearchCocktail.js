import React from 'react';

export default function SearchCoctail({searchCocktail}) {
    return(
        <div className='cocktailSearch'>
            <h1>Traži koktel</h1>
            <input 
                className='searchInput'
                type='text' 
                onChange={searchCocktail} 
                placeholder='Naziv koktela' 
            />
        </div>
    );
}