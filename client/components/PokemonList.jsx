import React, { useState } from 'react'

//component imports
import Modal from './Modal'

let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`

export default function ShoppingList(props) {
  const [show, setShow] = useState(false)
  const [pokemonName, setPokemonName] = useState('')

  const handleClick = (name, e) => {
    const currentListItem = props.list.find((item) => item.name === name)

    const indexOfListItem = props.list.indexOf(currentListItem)
    currentListItem.isActive = !currentListItem.isActive

    const newList = [...props.list]
    newList[indexOfListItem] = currentListItem
    props.onListChange(newList)
  }

  const handlePokedexClick = (listItem) => {
    setShow(true)
    setPokemonName(listItem.name.toLowerCase())
  }

  const list = props.list.map((listItem, id) => {
    return (
      <div className="item-box" key={id}>
        <div
          onClick={() => handleClick(listItem.name)}
          className="list-item"
          name={listItem.name}
          style={
            listItem.isActive
              ? { backgroundColor: randomColor }
              : { backgroundColor: 'White' }
          }
        >
          <span>{listItem.name}</span>
        </div>
        <span>
          <button onClick={() => props.onDelete(listItem.name)}>X</button>
        </span>

        <div>
          <img
            className="pokedex-icon"
            alt="icon of a pokedex"
            src="/images/pokedex-icon.jpg"
            onClick={() => handlePokedexClick(listItem)}
          />
          <Modal
            pokemonName={pokemonName}
            onClose={() => setShow(false)}
            show={show}
          />
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="list-container">
        <div className="list-item-container">{list}</div>
      </div>
    </>
  )
}
