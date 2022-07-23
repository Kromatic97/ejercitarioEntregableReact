import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import users from"./json/users.json"
import CardUsers from './components/CardUsers'
import colors from './utils/colors'

function App() {
  

  const getRandomElement = arr =>{
      const indexRandom=Math.floor(Math.random() * arr.length)
      return arr[indexRandom]
    }
    
    const userRandom=getRandomElement(users)
    const colorRandom=getRandomElement(colors)

    const [randomUsers, setRandomUsers] = useState(userRandom)
    const [randomColors, setRandomColors] = useState(colorRandom)
    console.log(randomUsers, randomColors);

 const objStyle = {
  backgroundColor: randomColors
 }

 const getRandomAll = () => {
  const userRandom=getRandomElement(users)
    const colorRandom=getRandomElement(colors)

    setRandomUsers(userRandom)
    setRandomColors(colorRandom)
 }


  return (
    <div className="App" style={objStyle}>
      <CardUsers 
      randomUsers={randomUsers} 
      randomColors={randomColors} getRandomAll={getRandomAll}/>

      
    </div>
  )
}

export default App
