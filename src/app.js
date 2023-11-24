import fetch_places from './modules/places.js';
import { check_forecast_errors, fetch_forecasts } from './modules/forecasts.js';
import { create_widget, load_widgets } from './modules/widget.js'
import { set_storage } from './modules/storage.js';
import { render_temperatures } from './modules/temperatures.js';

// global data
let today_forecast;

// global elements
const places_input = document.querySelector('#places-input');
const save_location_btn = document.querySelector('#save-location-btn');

// init state on page load
void async function init() {
	await fetch_places();
	load_widgets();
}();

// event listeners
save_location_btn.addEventListener('click', e => {
	e.preventDefault();
	create_widget(today_forecast, places_input.value);
	set_storage(storage => { storage.push(places_input.value); return storage })
})

places_input.addEventListener('input', async (e) => {
	const is_selected_from_dropdown = e.inputType == "insertReplacementText" || e.inputType == undefined ? true : false;

	if (is_selected_from_dropdown == true) {
		const forecasts = await fetch_forecasts(places_input.value);

		if (check_forecast_errors(forecasts)) {
			return;
		}

		today_forecast = render_temperatures(forecasts)

		save_location_btn.disabled = false;
	} else {
		save_location_btn.disabled = true;
	}
});
