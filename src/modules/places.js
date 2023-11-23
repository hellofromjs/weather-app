import places_data from '../data/places';

const fetchPlaces = async () => {
    const places_datalist = document.querySelector('#places');

    try {
        // const places_response = await fetch("https://api.meteo.lt/v1/places");
        let places = places_data; // await places_response.json();
        for (const place of places) {
            const option = document.createElement('option');
            option.value = place.name;
            places_datalist.appendChild(option);
        }
    } catch (error) {
        //alert(error.message);
    }
}

export default fetchPlaces;