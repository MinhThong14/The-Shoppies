import React from 'react'

const Nomination = ({
  title,
  nomination,
  nominations,
  setNominations,
  openPopup,
}) => {
  const deleteHandler = () => {
    setNominations(nominations.filter((el) => el.id !== nomination.id))
  }
  const viewDetails = (e) => {
    e.preventDefault()
    openPopup(nomination.id)
  }
  return (
    <div className='nomination'>
      <li onClick={viewDetails}>{title}</li>
      <button onClick={deleteHandler} className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  )
}

export default Nomination
