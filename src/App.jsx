import React, { useState, useEffect } from 'react'
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'
import Scroll from './components/Scroll'
import './App.css'

export default function App() {
  const [state, setState] = useState({
    users: [],
    searchfield: ''
  })

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
    .then(response => response.json())
    .then(data => setState(prevState => {
      return {
        ...prevState,
        users: data.results
      }
    }) ) 
  }, [])

  const onSearchChange = event => {
    setState(prevState => {
      return {
        ...prevState,
        searchfield: event.target.value 
      }
    }) 
  } 

  const filteredUsers = state.users.filter(user => {
    const firstName = user.name.first.toLowerCase()
    const lastName = user.name.last.toLowerCase()
    const firstAndLastName = `${firstName} ${lastName}`
    const searchfieldInput = state.searchfield.toLowerCase()
    return firstAndLastName.includes(searchfieldInput)
  })
  
  return(
    <div className='app-container'>
      <h1>FIND-FRIENDS</h1>
      <SearchBox onSearchChange={onSearchChange}/>
      <Scroll>
        <div className="card-flex">
          {state.users.length === 0 ? <h1>Loading...</h1> : <CardList filteredUsers={filteredUsers}/>}
        </div>
      </Scroll>
    </div>
  )
}

