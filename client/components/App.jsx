import React, { useState } from 'react'
import Form from './Form'
import PokemonList from './PokemonList'

function App() {
  const [list, setList] = useState([])

  function handleAddItem(newItem) {
    setList([...list, { name: newItem, isActive: false }])
  }

  function handleDelete(itemIWantToDelete) {
    console.log(itemIWantToDelete)
    const newList = list.filter((item) => item.name !== itemIWantToDelete)
    setList(newList)
  }

  function handleListChange(newList) {
    setList(newList)
  }

  return (
    <>
      <div className="main">
        <div className="page-container">
          <img className="header-img" src="images/pokemon.png" />
          <Form handleAddItem={handleAddItem} />
          <PokemonList
            onDelete={handleDelete}
            list={list}
            onListChange={handleListChange}
          />
        </div>
      </div>
    </>
  )
}

export default App
