const fetchForecasts = async (city) => {
    const places_datalist = document.querySelector('#places');

    try {
        const forecasts_response = await fetch(`https://api.meteo.lt/v1/places/${city}/forecasts/long-term`);
        let forecasts = await forecasts_response.json();

        for (const place of places) {
            const option = document.createElement('option');
            option.value = place.name;
            places_datalist.appendChild(option);
        }
    } catch (error) {
        alert(error.message);
    }
}

export default fetchForecasts;
