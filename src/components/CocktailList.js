import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import CocktailDetails from './CocktailDetails';

export default function CocktailList({cocktails}) {
    return(
        <>
            <h1>Popis koktela</h1>
            {(cocktails) ? 
            (cocktails.map((cocktail) => (
            <div key={cocktail.idDrink}>
                <Routes>
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
            </div>
            )))
            : (<p>Ne postoji traženi koktel</p>)
            }
        </>
    );
}