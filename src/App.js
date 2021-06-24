import React, { useState } from 'react';
// import Map from './components/Map/Map';
import Direction from './components/Map/Direction';

function App() {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  return (
    <div style={{textAlign: 'center'}}>
        {/* <Map></Map> */}
        <input type="text" placeholder="Starting From" onBlur={e => setOrigin(e.target.value)}/>
        <input type="text" placeholder="Going To" onBlur={e => setDestination(e.target.value)}/>
        <Direction origin={origin} destination={destination}></Direction>
    </div>
  );
}

export default App;

// get google map api key
// react google maps
// find my longitude and latitude
