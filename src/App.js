import { useEffect, useState } from "react"
import "../src/styles/styles.css"
import url from "../src/api"

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getAdvice = () => {
    setLoading(true)
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        let advice = {
          id: data.slip.id,
          text: data.slip.advice,
        }
        return advice
      })
      .then(setData)
      .then(setLoading(false))
      .catch(setError)
  }
  if (error) return <h1> ERROR! Please try again later. </h1>
  // if (!data) return null
  return (
    <main className="app">
      <div className="app_container">
        <p className="app_container_heading">
          ADVICE #{data ? data.id : <h1> Loading </h1>}
        </p>
        <h1 className="app_container_quote">"{data ? data.text : null}"</h1>
        <span className="app_container_decoration"></span>
        <div className="app_container_dice_container">
          <a
            onClick={getAdvice}
            href="#"
            className="dice"
          ></a>
        </div>
      </div>
    </main>
  )
}

export default App
