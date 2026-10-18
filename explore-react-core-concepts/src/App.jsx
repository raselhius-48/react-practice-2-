import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>React + vita</h3>
      <Todo task="learn React" isDone={true}></Todo>
      <Todo task="Explore core concepts" isDone={false}></Todo>


      <Divice name="iphone" price="15000"></Divice>
      <Divice name="laptop" price="50000"></Divice>
      <Divice name="tab" price="8000"></Divice>
      <Divice name="botton" price="1400"></Divice>

      <Develop></Develop>
      <Parson></Parson>
      <Parson></Parson>
      <Parson></Parson>
      <Student grate="7" score="99"></Student>
      <Student grate="5" score="90"></Student>
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
const { grate, score } = { grate: '7', score: '90' };
function Student({ grate, score }) {
  return <div className='student'>
    <h3>This is student</h3>
    <p>class:{grate}</p>
    <p>score:{score}</p>
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

function Divice(props) {
  // console.log(props)
  return <h3>this is Divice:{props.name} price {props.price}</h3>
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
