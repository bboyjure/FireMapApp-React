import GoogleMapReact from 'google-map-react'
import LocationMarker from './Locationmarker'
import LocationInfo from './LocationInfo'

import { useState } from 'react'

const Map = ({center, zoom, eventData}) => {

    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(event => {
        if(event.categories[0].id === 8){
            return <LocationMarker 
            lat={event.geometries[0].coordinates[1]} 
            lng={event.geometries[0].coordinates[0]}
            onClick={()=> setLocationInfo({id: event.id, title: event.title, lng: event.geometries[0].coordinates[0], lat: event.geometries[0].coordinates[1]})}
            ></LocationMarker>
        }
        return null;
    })

    return (
        <div className='map'>
           <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyC4JugHAW8EjhvTPtuR1D6YLW2jdMvTXFg' }}
            defaultCenter={center}
            defaultZoom={zoom}
           >
               {markers}
           </GoogleMapReact>
           {locationInfo && <LocationInfo info={locationInfo}></LocationInfo>}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat:44.7,
        lng: -122.5
    },
    zoom: 6
}

export default Map
