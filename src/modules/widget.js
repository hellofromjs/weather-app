import { get_weather_icon } from './helpers.js'
import { get_storage, set_storage } from './storage.js';
import { fetch_forecasts } from './forecasts.js';
import { get_datetime_string } from './helpers.js'

export const create_widget = (forecast, place_name) => {
	const widget_basic = document.querySelector('#widget-basic-template').content.firstElementChild.cloneNode(true);
	widget_basic.querySelector('.widget-basic__city').textContent = place_name;
	widget_basic.querySelector('[name=temperature]').textContent = `${forecast.airTemperature}°`;
	widget_basic.querySelector('[name=weather-icon]').src = get_weather_icon(forecast.conditionCode);
	widget_basic.querySelector('[name=weather-name]').textContent = forecast.conditionCode.replaceAll("-", " ");
	const time = new Date(Date.parse(forecast.forecastTimeUtc + '.000Z'));

	widget_basic.querySelector('[name=time]').textContent = `${time.getHours()}:${String(time.getMinutes()).padStart(2, "0")}`;

	widget_basic.querySelector('.widget-basic__remove').addEventListener('click', e => {
		const parent_root = widget_basic.closest('.widget-basic');
		const name = parent_root.querySelector('.widget-basic__city').textContent;
		parent_root.remove();

		set_storage(storage => storage.filter(place => place != name));
	})

	document.querySelector('.basic-widgets').appendChild(widget_basic);
}

export const load_widgets = async () => {
	if (get_storage().length > 0) {
		for (const place of get_storage()) {
			const forecasts = await fetch_forecasts(place);
			for (const forecastTimestamp of forecasts.forecastTimestamps) {
				if (forecastTimestamp.forecastTimeUtc == get_datetime_string(new Date(new Date().toUTCString().slice(0, -3)))) {
					create_widget(forecastTimestamp, place);
				}
			}
		}
	}
}
