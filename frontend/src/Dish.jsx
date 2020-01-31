import React , { useState, useEffect } from 'react'

export default function Dish () {
	

const [name, setName] = useTitleInput ('')
  

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <h3>{name}</h3>
      <form
       onSubmit = {e => {
         e.preventDefault()
         formSubmit(name,setName)
      }}
      >
        <input data-testid = "dish"  
           type="text" onChange={e => setName(e.target.value)}
           value={name} 
         />
        <button id = "submitDish" >Submit</button>
       </form>
    </div>
  )
}

const formSubmit = (value, setValue) => {
    fetch('https://localhost:4598',{
       method: 'POST', 
       headers: { 'Content-Type': 'application/json'},
       body: {value}
     })
     setValue('')
}

function useTitleInput (initialValue) {
    const [value, setValue] = useState('');
    useEffect(() => {
    document.title = value
  })
  return [value,setValue]

 } 