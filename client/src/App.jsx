import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
       setEventData(data.event)
      });
  }, []);

  return (
    <div>
      <h1>Events List</h1>
      <ul>
        {eventData.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
