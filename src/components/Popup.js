import React from 'react'

const Popup = ({ selected, closePopup, nominations, setNominations }) => {
  const submitNominationsHandler = (e) => {
    e.preventDefault()
    const checkContains = nominations.filter((el) => el.id === selected.imdbID)
    console.log(checkContains)
    if (nominations.length < 5 && checkContains.length === 0) {
      setNominations([
        ...nominations,
        { title: selected.Title, id: selected.imdbID },
      ])
    }
  }
  return (
    <section className='popup'>
      <div className='col-7'>
        <div className='content'>
          <h2>
            {selected.Title}
            <span>({selected.Year})</span>
          </h2>
          <p className='rating'>IMDB Rating: {selected.imdbRating}</p>
          <div className='plot'>
            <img src={selected.Poster} alt='text' />
            <div className='col-7'>
              <p>{selected.Plot}</p>
              <p>Realeased: {selected.Released}</p>
              <p>Runtime: {selected.Runtime}</p>
              <p>Director: {selected.Director}</p>
              <p>Actors: {selected.Actors}</p>
            </div>
          </div>
          <button className='close' onClick={closePopup}>
            Close
          </button>
          <button
            onClick={submitNominationsHandler}
            className='nomination-button'
            type='submit'
          >
            Nominate The Movie
          </button>
        </div>
      </div>
    </section>
  )
}

export default Popup
