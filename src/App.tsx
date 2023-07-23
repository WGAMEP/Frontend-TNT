import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About'

const data : string[] = ["a","b","c","d","ttt","GGGG"]

function App() {
  //const [count, setCount] = useState(0)
  const [state, setstate] = useState<string>("test");

  return (
      <div className='main'>
        <h1>Hello react</h1>
        <About data={data} Fuc = {setstate} />
        <h1>{state}</h1>
        <input onChange={(e) => setstate(state + e.target.value)} />
        {/*{data.map((item,idx) => {
          if(item ==="a") return <h1 key={idx}>AAA</h1>;
          else return <h4 key={idx}>{item}</h4>
        })}*/}
      </div>
  );
}

export default App
