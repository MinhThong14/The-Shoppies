import React from 'react'

import Result from './Result'

function Results({ results, openPopup, nominations, setNominations }) {
  return (
    <section className='results'>
      {results.map((result) => (
        <Result
          key={result.imdbID}
          result={result}
          openPopup={openPopup}
          nominations={nominations}
          setNominations={setNominations}
        />
      ))}
    </section>
  )
}

export default Results
