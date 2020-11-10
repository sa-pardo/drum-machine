import React from 'react'

export default function App() {
  return (
    <div id="app-container">
      <div id="drum-machine">
        <p id="display"></p>
      </div>
    </div>
  )
}

export function DrumPad(props) {
  return (
    <div id={props.id} className="drum-pad">
      
    </div>
  )
}
