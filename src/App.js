import React, { useEffect, useState } from 'react'

export default function App() {
  const [sound, setSound] = useState("Drum Machine")

  const handleKeyDown = (event) => {
    handlePress({ key: event.code.split("").pop() });
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {document.removeEventListener("keydown", handleKeyDown)}
  });

  const handlePress = (target) => {
    setSound(target.key);
  }

  return (
    <div id="app-container">
      <div id="drum-machine">
        <p id="display">{sound}</p>
        {clips.map((element) => {
          return (
            <DrumPad key={element.key} id={element.key} handlePress={handlePress} />
          );
        })}
      </div>
    </div>
  )
}

export function DrumPad(props) {

  const handleClick = (event) => {
    props.handlePress({ key: event.target.id });
  }

  return (
    <div id={props.id} className="drum-pad" onClick={handleClick}>
      <audio src={props.src} className="clip" id={props.id}></audio>
      {props.id}
    </div>
  )
}

const clips = [
  {
    key: 'Q',
    audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    key: 'W',
    audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    key: 'E',
    audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    key: 'A',
    audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    key: 'S',
    audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    key: 'D',
    audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    key: 'Z',
    audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    key: 'X',
    audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    key: 'C',
    audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];
