const fetchForecasts = async (city) => {

    try {
        const forecasts_response = await fetch(`https://api.meteo.lt/v1/places/${city}/forecasts/long-term`);
        let forecasts = await forecasts_response.json();
		return forecasts;
    } catch (error) {
        //alert(error.message);
    }
}

export default fetchForecasts;
