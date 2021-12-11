import React from 'react';

export default function CocktailDetail({cocktailDetails}) {
    return(
        <div className='cocktailDetails'>
            <h3>{cocktailDetails.strDrink}</h3>
            <img 
                src={cocktailDetails.strDrinkThumb}
                className='cocktailSlika'
                alt={cocktailDetails.strDrink}
            />
            <h6>{cocktailDetails.strGlass}</h6>
            <p>{cocktailDetails.strCategory}</p>
            <h4>{cocktailDetails.strInstructions}</h4>
        </div>
    );
}