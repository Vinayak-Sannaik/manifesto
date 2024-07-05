import React from 'react';
import Timer from '../component1/Timer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
      <h1>MANIFEST MIRACLES</h1>
      <Timer />
      <Link to='/listen'>
        <button className='set-timer-button'>
          Next <span>→</span>
        </button>
      </Link>
    </div>
  );
}

export default Home;
