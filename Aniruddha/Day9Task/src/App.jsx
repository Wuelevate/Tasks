import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~`!@#$%^&*-_=+\|;:<>/?,.(){}[]";

    for(let i=0; i<length; i++) {
      let char = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,80);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className="main">
        <h1>Password Generator</h1>
        <div className="input">
          <input type="text" value={password} className="" placeholder="password" readOnly ref={passwordRef}/>
          <button className=""
          onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className='parent'>
          <div className='child'>
            <input type="range" min={8} max={80} value={length} className=''
            onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className='child'>
            <input type="checkbox" defaultChecked={numAllowed} id='numberInput'
            onChange={() => {setNumAllowed((prev) => (!prev))}}/>
            <label>Numbers</label>
          </div>
          <div className='child'>
            <input type="checkbox" defaultChecked={charAllowed} id='charactersInput'
            onChange={() => {setCharAllowed((prev) => (!prev))}}/>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )

}

export default App;