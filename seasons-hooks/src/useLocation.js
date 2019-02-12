import { useState, useEffect } from 'react';

export default () => {
   const [lat, setLat] = useState(null);
   const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // get the location of the user
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setErrorMessage(err.message)
        );
    }, []);

    return [lat, errorMessage];
}