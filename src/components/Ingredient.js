import React from 'react'
import IngredientList from './IngredientList'

export default function Ingredient({ name, amount }) {
  return (
    <>
        <span>{name}</span>
        <span>{amount}</span>
    </>
  )
}
