import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React + vita</h1>
      <Develop></Develop>
      <Parson></Parson>
      <Parson></Parson>
      <Parson></Parson>
      <Student></Student>
      <Calculation></Calculation>


    </>

  )
}


function Parson() {
  const age = 25;
  const money = 20;
  const parson = { name: 'sakib', age: 30 };

  return <h3> i am a parson with age: {age} and money : {money} tow add :{age + money} name is:{parson.name}  and age:{parson.age}</h3>

}

function Student() {
  return <div className='student'>
    <h3>This is student</h3>
    <p>Name:</p>
    <p>age:</p>
  </div>
}

function Calculation() {
  return (
    <div>
      <h1> hi,ki obosta </h1>
      <p>ki obosta mono</p>
      <h1>how are you</h1>

    </div>

  )
}

function Develop() {
  const DevelopStyle = {
    margin: '20px',
    border: '20px solid purple'
  }
  return (
    <div style={DevelopStyle}>
      <h1>dev</h1>
      <p>coding:</p>
    </div>
  )
}

export default App
