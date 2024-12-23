import { useState } from 'react'

import { useEffect } from 'react'

function MouseTracker() {
  const[mousePosition,setMousePosition]=useState({x:0,y:0})

  useEffect(()=>{
    function handleMouseMove(event){
      setMousePosition({x: event.clientX,y: event.clientY})
    };
    window.addEventListener('mousemove',handleMouseMove);
    //each time u move the mouse handle... func runs coz of window.addEventListener
    //recurrsive function

    return ()=>{
      window.removeEventListener('mousemove',handleMouseMove);
    };
  },[]);
  //when is unmounted then its not detecting it

  return (
      <div>
        <h1>Mouse Position</h1>
        <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
      </div>
  );
}

export default MouseTracker;
