import { useState } from 'react';
import './App.css'
import Card from './Card';

function App() {
  const [count, setCount] = useState(0);

  function Counter() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>React First Project</h1>
      <Card name="ABC" desg="MERN Stack Lead" />
      <Card name="Aniruddha" desg="Software Developer" />
      <Card name="XYZ" desg="MEAN Stack Developer" />
      <Card name="PQR" desg="Python Developer" />
      <Card name="STU" desg="Software Engineer" />
      <Card name="GHI" desg="Developer" />
      <button onClick={Counter}>Count is {count}</button>
    </>
  )
}

export default App
