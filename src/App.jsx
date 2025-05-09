import React, { useEffect, useState } from 'react'
import Background from "./Components/Background/Background"
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';



const App = () => {

  let heroData = [
    {text1: "Experience", text2: "the future of driving"},
    {text1: "Unmatched", text2: "performance with zero emissions"},
    {text1: "Drive with", text2: "cutting-edge technology"},
  ];

  const [heroCount,setHeroCount] = useState(2);
  const [playStatus,setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 5000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>      
      <Navbar/>
      <Hero 
        setPlayStatus ={setPlayStatus}
        heroData ={heroData[heroCount]}
        heroCount = {heroCount}
        setHeroCount= {setHeroCount}
        playStatus = {playStatus}
      />
    </div>
  )
}

export default App
