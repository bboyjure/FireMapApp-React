const LocationInfo = ({ info }) => {
    return (
        <div className='location-info'>
            <h2>Event Location info</h2>
            <ul>
                <li>ID: <string>{ info.id }</string></li>
                <li>Tittle: <string>{ info.title }</string></li>
                <li>Coordinates: <string> <i>lng:</i> { info.lng }</string><string> <i>let:</i>  { info.lat }</string></li>
            </ul>
        </div>
    )
}

export default LocationInfo
