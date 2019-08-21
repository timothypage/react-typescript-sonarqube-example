import React, {useState} from 'react';
import './App.css';

import {FancyDie} from './models'
import DieComponent from './Die'
import Mice from './Mice'

const initialDice: Array<FancyDie> = [
  {sides: 20, value: null},
  {sides: 6, value: null},
  {sides: 8, value: null, color: '#ffff00'}
]

const App: React.FC = () => {
  const [dice, setDice] = useState(initialDice)

  return (
    <div className="App">
      {dice.map((die, index) => <DieComponent key={index} {...die} />)}

      <div className="roll">
        <button onClick={() => {
          setDice(
            dice.map(die => ({
              ...die,
              value: Math.floor(Math.random() * die.sides) + 1
            }))
          )
        }}
        >
          Roll!
        </button>
      </div>
      <Mice />
    </div>
  );
}

export default App;
