import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
import NominationList from './components/NominationList'

function App() {
  const [state, setState] = useState({
    s: '',
    results: [],
    selected: {},
  })

  const [nominations, setNominations] = useState([])

  const apiurl = 'https://www.omdbapi.com/?i=tt3896198&apikey=36e35f30'

  // Runc Once when the app start
  useEffect(() => {
    getLocalNominations()
  }, [])
  // Use effect
  useEffect(() => {
    saveLocalNominations()
  }, [nominations])

  const search = (e) => {
    if (e.key === 'Enter') {
      axios(apiurl + '&s=' + state.s).then(({ data }) => {
        let results = data.Search
        console.log(results)
        if (typeof results === 'undefined') {
          alert('There are no results')
        } else {
          setState((prevState) => {
            return { ...prevState, results: results }
          })
        }
      })
    }
  }

  const handleInput = (e) => {
    let s = e.target.value
    setState((prevState) => {
      return { ...prevState, s: s }
    })
  }

  const openPopup = (result) => {
    console.log(result)
    axios(apiurl + '&t=' + result.Title).then(({ data }) => {
      let result = data
      console.log(result)
      setState((prevState) => {
        return { ...prevState, selected: result }
      })
    })
  }

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} }
    })
  }

  // Save to Local
  const saveLocalNominations = () => {
    localStorage.setItem('nominations', JSON.stringify(nominations))
  }

  const getLocalNominations = () => {
    if (localStorage.getItem('nominations') === null) {
      localStorage.setItem('nominations', JSON.stringify([]))
    } else {
      let nominationLocal = JSON.parse(localStorage.getItem('nominations'))
      setNominations(nominationLocal)
    }
  }
  return (
    <div className='App'>
      <header>
        <h1>The Shoppies</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <div className='row'>
          <div className='col-7'>
            <Results
              results={state.results}
              openPopup={openPopup}
              nominations={nominations}
              setNominations={setNominations}
            />

            {typeof state.selected.Title != 'undefined' ? (
              <Popup
                selected={state.selected}
                closePopup={closePopup}
                setNominations={setNominations}
                nominations={nominations}
              />
            ) : (
              false
            )}
          </div>
          <div className='col-5'>
            <NominationList
              setNominations={setNominations}
              nominations={nominations}
              openPopup={openPopup}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
