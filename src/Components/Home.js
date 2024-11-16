import './Home.css';
import React from 'react';
import Lottie from "lottie-react";
import animation from './ani.json';
import { Link } from 'react-router-dom'; 
import Navigation from './Navigation';
const Home = () => {
  return (
   <main className="home">
        <Navigation/>
        <div className='home-content'>
      <h1 className="head">NEXUS VERSE</h1>
      <div className="content-container">
      <p >Have you ever been captivated by the thrill of solving a jigsaw puzzle?Imagine a world where every clue leads to a new mystery, and each answer unlocks a piece of a grand puzzle. That's Nexus Verse, a mind-bending trivia event brought to you by <b>RADIO NITroz</b>-The Official Entertainment Club of NIT Durgapur.</p>
      <Lottie 
          animationData={animation} 
          loop={true} 
          className="responsive-lottie" 
        />
      </div>
      <button><Link to="/login">Login</Link></button>
    </div>
    </main>
  );
};

export default Home;
