import React from 'react';

export default function SearchCoctail({searchCocktail}) {
    return(
        <div>
            <h1>Traži koktel</h1>
            <input type='text' onChange={searchCocktail} placeholder='Unesi koktel' />
        </div>
    );
}