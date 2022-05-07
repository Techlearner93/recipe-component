import React from 'react'
import Ingredient from './Ingredient'
import IngredientList from './IngredientList'
import RecipeList from './RecipeList'

export default function Recipe(props){
    const { 
            name, 
            cookTime, 
            servings, 
            instructions,
            ingredients
        } = props

    return (
        <>
            <div>
                <h3>{name}</h3>    
            </div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
            <div>
                <span>Cook Time:</span>
                <span>{cookTime}</span>
            </div>
            <div>
                <span>Servings:</span>
                <span>{servings}</span>
            </div>
            <div>
                <span>Instructions:</span>
                <div>{instructions}</div>
            </div>
            <div>
                <span>Ingredients:</span>
                <div>
                  <IngredientList ingredients = {ingredients} />
                </div>
            </div>
        </>
    )
}