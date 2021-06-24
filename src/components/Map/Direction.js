import React, { useState } from 'react';
import { GoogleMap, LoadScript,Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import {API_KEY} from './config'

const containerStyle = {
  width: '100%',
  height: '400px'
};

const location = {
  lat: 23.782753,
  lng: 90.339703
};

const onLoad = marker => {
    console.log('marker: ', marker)
  }

function Direction({origin, destination}) {
    const [directionResponse, setDirectionResponse] = useState(null)
  return (
    <LoadScript
      googleMapsApiKey={API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
        {
            origin !== '' && destination !== '' && <DirectionsService
            // required
            options={{ 
            //   destination: 'Gulshan 1 circle Dhaka Bangladesh',
            //   origin: 'Banani 11 city Bank Dhaka Bangledesh',
              destination: origin,
              origin: destination,
              travelMode: 'DRIVING'
            }}
            // required
            callback={res => {
                if(res !== null){
                  setDirectionResponse(res)
                }
            }}
          />
        }
        {
            directionResponse && <DirectionsRenderer
            // required
            options={{ 
                directions: directionResponse
            }}
            />
        }
        <Marker
            onLoad={onLoad}
            position={location}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Direction)