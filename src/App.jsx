import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { format } from "date-fns";

function App() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      //Format the time using date-fns
      setCurrentTime(format(now, 'PPpp'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    //Adds current time to the DOM dynamically
    <>
      <p id='time'>
        Current Time: {currentTime}
      </p>
    </>
  )
}

export default App;
