import React from 'react'
//Import Components
import Nomination from './Nomination'

const NominationList = ({ nominations, setNominations, openPopup }) => {
  console.log(nominations.length)
  return (
    <div className='nomination-container'>
      {nominations.length < 5 ? (
        <h2>Nomination List ({5 - nominations.length} left)</h2>
      ) : (
        <h2>Nomination List (Completed)</h2>
      )}
      <ul className='nomination-list'>
        {nominations.map((nomination) => (
          <Nomination
            nomination={nomination}
            setNominations={setNominations}
            nominations={nominations}
            openPopup={openPopup}
            key={nomination.id}
            title={nomination.title}
            id={nomination.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default NominationList
