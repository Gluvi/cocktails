import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import CocktailDetails from './CocktailDetails';

export default function CocktailList({cocktails}) {
    return(
        <>
            <h1>Popis koktela</h1>
            {(cocktails) ? 
            (cocktails.map((cocktail) => (
            <>
                <Routes  key={cocktail.idDrink}>
                    <Route 
                        path={"/" + cocktail.idDrink} 
                        element={
                        <CocktailDetails 
                            idCocktail={cocktail.idDrink} 
                            cocktailDetails={cocktail} 
                        />
                        } 
                    />
                </Routes>
                <Link to={"/" + cocktail.idDrink}><p className='cocktailNavigationLink'>{cocktail.strDrink}</p></Link>
            </>
            )))
            : (<p>Ne postoji traženi koktel</p>)
            }
        </>
    );
}