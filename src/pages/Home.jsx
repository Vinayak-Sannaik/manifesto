import React from 'react'
import Timer from '../component1/Timer'

const Home = () => {
  return (
    <div className='container'>
      <h1>MANIFEST MIRACLES</h1>
    <Timer />
    <button className='set-timer-button'>Next <span>→</span></button>
    </div>
  )
}

export default Home