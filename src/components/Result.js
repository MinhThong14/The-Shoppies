import React from 'react'

function Result({ result, openPopup, nominations, setNominations }) {
  const checkContains = nominations.filter((el) => el.id === result.imdbID)
  const submitNominationsHandler = (e) => {
    e.preventDefault()
    console.log(checkContains)
    if (nominations.length < 5) {
      setNominations([
        ...nominations,
        { title: result.Title, id: result.imdbID },
      ])
    }
  }

  return (
    <div className='result'>
      <img src={result.Poster} alt='text' />
      <h3>{result.Title}</h3>
      <button
        onClick={() => openPopup(result)}
        className='nomination-button'
        type='submit'
      >
        Details
      </button>
      <button
        disabled={checkContains.length !== 0}
        onClick={submitNominationsHandler}
        className='nomination-button'
        type='submit'
      >
        Nominate The Movie
      </button>
    </div>
  )
}

export default Result
