import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  
  const [fruits, setFruits] = useState([]);

  useEffect(()=>{

    const fetchData = async ()=>{
      const response = await axios.get('http://localhost:8080/fruits/');
      setFruits(response.data.fruits);
      console.log(response.data.fruits);
    }

    fetchData();
  }, [])

  return (
    <>
      <div>
       {fruits.map((fruit, index)=>(
        <div key={index}>{fruit}</div>
       ))}
      </div>
     
    </>
  )
}

export default App
