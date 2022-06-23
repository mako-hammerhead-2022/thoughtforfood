import React from 'react'
import useFetch from './useFetch'

const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/cubone`)

const Modal = (props) => {
  if (!props.show) {
    return null
  }

  

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Modal title</h4>
        </div>
        <div className="modal-body">This is modal content</div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal




{/* <div className="App">
      <h1>pokemon</h1>
      <p>Name: {data.name}</p>
      <p>Weight: {data.weight}</p>
      <p>Base Experience: {data.base_experience}</p>
      <img src={data.sprites.front_default} alt="Pokemon"></img>
      <p>{data.types[0].type.name}</p>
    </div> */}
