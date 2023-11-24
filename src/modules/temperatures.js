import { get_weather_icon, group_by_date, find_closest_temperature } from './helpers.js'

export const render_temperatures = (forecasts) => {
	const temperatures = document.querySelector('#temperatures');

	// remove all temperatures
	temperatures.replaceChildren();

	const grouped_forecasts = group_by_date(forecasts.forecastTimestamps);

	const closest_temps = find_closest_temperature(grouped_forecasts, new Date().getUTCHours());
	closest_temps[0].dayOfWeek = "Today";

	for (const temps of closest_temps) {
		const temperature_item = document.querySelector('#temperature-item-template').content.firstElementChild.cloneNode(true);

		temperature_item.querySelector('[name=day-of-week]').textContent = temps.dayOfWeek;
		temperature_item.querySelector('[name=weather-icon]').src = get_weather_icon(temps.conditionCode);
		temperature_item.querySelector('[name=temperature]').textContent = `${temps.airTemperature}°`;

		temperatures.appendChild(temperature_item);
	}

	return closest_temps[0];
}