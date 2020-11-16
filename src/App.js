import React, { useEffect, useState } from 'react'
import './index.css';

export default function App() {
  const [sound, setSound] = useState("Drum Machine")
  const [bank, setBank] = useState(bankOne);

  const handleActivate = (sound) => {
    setSound(sound);
  }

  return (
    <div id="app-container">
      <div id="drum-machine">
        <p id="display">{sound}</p>
        <div className="pads-container">
          {bank.map((element) => {
            return (
              <DrumPad key={element.keyTrigger} sound={element} handleActivate={handleActivate} />
            );
          })}
        </div>
      </div>
    </div>
  )
}


const activeStyle = {
  backgroundColor: 'orange',
  boxShadow: '0 3px orange',
  height: 77,
};

const inactiveStyle = {
  backgroundColor: 'grey',
  boxShadow: '3px 3px 5px black'
};


export function DrumPad(props) {
  const [style, setStyle] = useState(inactiveStyle);
  const handlePress = () => {
    const sound = document.getElementById(props.sound.keyTrigger);
    sound.currentTime = 0;
    sound.play()
    setStyle(activeStyle);
    setTimeout(() => setStyle(inactiveStyle), 100);
    props.handleActivate(props.sound.id.replace(/-/g, " "));
  }

  const handleKeyDown = (event) => {
    if (event.keyCode === props.sound.keyCode) {
      handlePress();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => { document.removeEventListener("keydown", handleKeyDown) }
  });

  return (
    <div id={props.sound.id} style={style} className="drum-pad" onClick={handlePress}>
      <audio src={props.sound.url} className="clip" id={props.sound.keyTrigger}></audio>
      {props.sound.keyTrigger}
    </div>
  )
}

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];
