import fetchPlaces from './modules/places.js';
import fetchForecasts from './modules/forecasts.js';
import conditions from './data/conditions.js'

const basic_widgets = document.querySelector('.basic-widgets');
const places_input = document.querySelector('#places-input');
const save_location_btn = document.querySelector('#save-location-btn');
const temperature_item_template = document.querySelector('#temperature-item-template');
const temperatures = document.querySelector('#temperatures');
const temperatures_wrapper = document.querySelector('#temperatures-wrapper');

await fetchPlaces();

let storage = localStorage.getItem("my-places");
storage = JSON.parse(storage) || [];

if (storage.length > 0){
	await init();
}

function get_datetime_string(dateUTC)
{
	let year = dateUTC.getFullYear()
	let month = dateUTC.getMonth() + 1
	let day = dateUTC.getDate()
	let hours = dateUTC.getHours()  

	return `${year}-${month}-${day} ${hours}:00:00`;
}

async function init()
{
	for (const place of storage) {
		let forecasts = await fetchForecasts(place);
		for (const forecastTimestamp of forecasts.forecastTimestamps) {
			if (forecastTimestamp.forecastTimeUtc == get_datetime_string(new Date(new Date().toUTCString().slice(0, -3))))
			{
				create_widget(forecastTimestamp, place);
			}
		}
	}
}

function create_widget(forecast, place_name)
{
	const widget_basic = document.querySelector('#widget-basic-template').content.firstElementChild.cloneNode(true);
	widget_basic.querySelector('.widget-basic__city').textContent = place_name;
	widget_basic.querySelector('[name=temperature]').textContent = `${forecast.airTemperature}°`;
	widget_basic.querySelector('[name=weather-icon]').src = get_weather_icon(forecast.conditionCode);
	widget_basic.querySelector('[name=weather-name]').textContent = forecast.conditionCode.replaceAll("-"," ");
	let time = new Date(Date.parse(forecast.forecastTimeUtc + '.000Z'));


	widget_basic.querySelector('[name=time]').textContent = `${time.getHours()}:${String(time.getMinutes()).padStart(2, "0")}`;

	widget_basic.querySelector('.widget-basic__remove').addEventListener('click', e => {
		const parent_root = widget_basic.closest('.widget-basic');
		const name = parent_root.querySelector('.widget-basic__city').textContent;
		parent_root.remove();

		storage = storage.filter(place => place != name);
		localStorage.setItem("my-places", JSON.stringify(storage));
	})

	basic_widgets.appendChild(widget_basic);
}

function get_weather_icon(conditionCode)
{
	
	let weather_icon = conditions[conditionCode];

	if (weather_icon == undefined)
	{
		weather_icon = 'star.svg';
		console.error(`Condition code not found: ${conditionCode}`);
	}

	return `img/icons/${weather_icon}`
}

let is_selected_from_dropdown = false




let today_forecast;

save_location_btn.addEventListener('click', e => {
	e.preventDefault();

	
	create_widget(today_forecast, places_input.value);
	
	

	storage.push(places_input.value);
	localStorage.setItem("my-places", JSON.stringify(storage));

	
		
	
})

places_input.addEventListener('input', async (e) => {
	is_selected_from_dropdown = e.inputType == "insertReplacementText" || e.inputType == undefined ? true : false;


	if (is_selected_from_dropdown == true)
	{
		// remove all temperatures
		temperatures.replaceChildren();
		
		let forecasts = await fetchForecasts(places_input.value);

		const alert_wrapper = document.querySelector('#alert-wrapper');
		

		if (forecasts.error !== undefined)
		{
			temperatures_wrapper.classList.add('d-none');
			alert_wrapper.classList.remove('d-none');
			alert_wrapper.querySelector('.alert').textContent = `Weather service error: ${forecasts.error.message}`;
			return;
		}

		alert_wrapper.classList.add('d-none');
		temperatures_wrapper.classList.remove('d-none');
		save_location_btn.disabled = false;
		

		const group_by_date = (forecasts) =>
		{
			let forecast_date = (forecasts[0].forecastTimeUtc.split(' '))[0];

			const date_groups = [];

			const current_list = []

			for (let i = 0; i < forecasts.length; i++) {
			
				// if (forecast_date)
				const forecastTimeSplit = forecasts[i].forecastTimeUtc.split(' ');

				if (forecast_date !== forecastTimeSplit[0])
				{
					
					date_groups.push([]);
					date_groups[date_groups.length - 1].splice(0, 0, ...current_list);

					current_list.length = 0;
					forecast_date = forecastTimeSplit[0];
				}

				forecasts[i].hour = parseInt((forecastTimeSplit[1].split(':'))[0]);
				current_list.push(forecasts[i]);
				// if this is the last iteration
				if (i === forecasts.length - 1) {
					date_groups.push([]);
					date_groups[date_groups.length - 1].splice(0, 0, ...current_list);
				}
			}

			return date_groups;
		}

		const find_closest_temperature = (forecast_groups, hour) =>
		{
			const closest_forecasts = [];

			for (const forecast_group of forecast_groups) {

				let difference = Infinity;
				let currently_closest = [];

				for (const forecast of forecast_group) {
					if (Math.abs(forecast.hour - hour) < difference)
					{
						difference = Math.abs(forecast.hour - hour)
						currently_closest = forecast;
					}
				}

				var timestamp = Date.parse(currently_closest.forecastTimeUtc);
				var dateObject = new Date(timestamp);
		
				currently_closest.dayOfWeek = dateObject.toLocaleString('en-us', {weekday:'short'})
				closest_forecasts.push(currently_closest);
			}

			return closest_forecasts;

			
		}


		const grouped_forecasts = group_by_date(forecasts.forecastTimestamps);

		const closest_temps = find_closest_temperature(grouped_forecasts, new Date().getUTCHours());
		closest_temps[0].dayOfWeek = "Today";
		today_forecast = closest_temps[0];

		for (const temps of closest_temps) {

			const temperature_item = temperature_item_template.content.firstElementChild.cloneNode(true);
			temperature_item.querySelector('[name=day-of-week]').textContent = temps.dayOfWeek;
			temperature_item.querySelector('[name=weather-icon]').src = get_weather_icon(temps.conditionCode);
			temperature_item.querySelector('[name=temperature]').textContent = `${temps.airTemperature}°`;

			temperatures.appendChild(temperature_item);
		}

	} else {
		save_location_btn.disabled = true;
	}


});


