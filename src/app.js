import fetchPlaces from './modules/places.js';

await fetchPlaces();

const basic_widgets = document.querySelector('.basic-widgets');

for (let i = 0; i < 4; i++) {
    const widget_basic = document.querySelector('#widget-basic-template').content.firstElementChild.cloneNode(true);

    basic_widgets.appendChild(widget_basic)
    
}

