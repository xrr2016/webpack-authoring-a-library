import React from 'react'
import { randomColor } from '../utils'
console.log(randomColor())

const style = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: 60,
  margin: '12px 0px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #ebebeb'
}

const itemMid = {
  flex: 9
}
const itemRight = {
  flex: 1,
}
const contentStyle = {
  margin: 0,
  fontWeight: 'normal'
}

const VoiceItem = ({ voice }) => (
  <li style={style}>
    <div style={{
      width: 50,
      height: 50,
      lineHeight: 3.2,
      color: '#fff',
      fontSize: 16,
      marginRight: 12,
      borderRadius: '50%',
      textAlign: 'center',
      backgroundColor: randomColor()
    }}
    >{voice.author}</div>
    <div style={itemMid}>
      <h5 style={contentStyle}>{voice.content}</h5>
      <span>{voice.data}by{voice.author}</span>
    </div>
    <div style={itemRight}>
      {voice.like}
    </div>
  </li>
)

export default VoiceItem