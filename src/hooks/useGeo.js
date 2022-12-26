import { useState, useEffect } from "react";
import axios from 'axios'

function useGeo() {
    const [geo, setGeo] = useState('')

    const getGeoInfo = () => {
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
            setGeo(data.country_code)
            console.log('ladataes', data.country_code)
        }).catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        getGeoInfo();
    }, [])

    return geo;
}

export default useGeo;