import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState("male")
  const [answer, setAnswer] = useState(0)

  function laske(e) {
    e.preventDefault()
    
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let grams_left = grams - (burning * time)

    let bloodlevel = 0
    if (gender === "male") {
      bloodlevel = grams_left / (weight * 0.7)
    } else {
      bloodlevel = grams_left / (weight * 0.6)
    }

    if ( bloodlevel < 0) {
      bloodlevel = 0
    }

    setAnswer(bloodlevel)
  }

  return (

    <form onSubmit={laske}>
      <div>
        <h3>Calculating alcohol blood level</h3>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Bottles</label>
        <input type="number" value={bottles} onChange={e => setBottles(e.target.value)} />
      </div>
      <div>
        <label>Time</label>
        <input type="number" value={time} onChange={e => setTime(e.target.value)} />
      </div>
      <div>
        <label>Gender</label>
        <label><input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} />Male</label>
        <label><input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} />Female</label>
      </div>
      <div>
        <output>{answer.toFixed(1)}</output>
      </div>
      <div>
        <button onClick={laske}>Calculate</button>
      </div>
    </form>
  );
}

export default App;
