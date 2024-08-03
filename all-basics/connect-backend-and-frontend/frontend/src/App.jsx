import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch('/api/jokes')
      .then((response) => response.json())
      .then((data) => setJokes(data))
      .catch(error => console.log(error))
  })

  return (
    <>
      <h1>Full stack Jokes App</h1>
      <div className="jokes-length">Jokes: {jokes.length}</div>
      {jokes.map(joke => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  )
}

export default App
