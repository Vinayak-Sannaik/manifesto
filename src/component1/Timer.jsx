import React from 'react'
import '../../src/index.css'
import img from '../assets/voice.png'
import Upload from './Upload'

const Timer = () => {
  return (
    <div className='container' >
        <div className='timer'>00:00.00</div>
        <div className='mic'><img src={img} alt="mic"/></div>
        <div>
            <button className='start-button'>Start</button>
            <button className='pause-button'>Pause</button>
        </div>
        <div className="line">------------------------- OR ------------------------</div>
        <Upload />
        
    </div>
  )
}

export default Timer