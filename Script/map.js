var map = L.map('recycling-map').setView([-32.85, 151.55], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);

// Custom marker icons
var greenIcon = L.divIcon({
    className: '',
    html: '<div class="map-pin pin-green"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -12]
});

var blueIcon = L.divIcon({
    className: '',
    html: '<div class="map-pin pin-blue"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -12]
});

var orangeIcon = L.divIcon({
    className: '',
    html: '<div class="map-pin pin-orange"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -12]
});

// Recycling stations — Hunter Region NSW
var stations = [
    {
        name: "Summerhill Waste Management Centre",
        address: "25 Summerhill Rd, Summerhill NSW 2289",
        lat: -32.9308,
        lng: 151.6803,
        type: "green",
        accepts: "General recycling, green waste, e-waste, household chemicals, scrap metal",
        hours: "Mon–Sat: 7am–5pm, Sun: 8am–4pm"
    },
    {
        name: "Awaba Resource Recovery Centre",
        address: "Freemans Dr, Awaba NSW 2283",
        lat: -33.0200,
        lng: 151.5467,
        type: "green",
        accepts: "General recycling, green waste, e-waste, timber, mattresses",
        hours: "Mon–Sat: 7am–5pm, Sun: 8am–4pm"
    },
    {
        name: "Maitland Resource Recovery Centre",
        address: "Ravensworth Rd, Telarah NSW 2320",
        lat: -32.7270,
        lng: 151.5540,
        type: "green",
        accepts: "General recycling, green waste, e-waste, scrap metal, tyres",
        hours: "Mon–Fri: 8am–4:30pm, Sat–Sun: 8am–4pm"
    },
    {
        name: "Cessnock Resource Recovery Centre",
        address: "166 Mulbring St, Cessnock NSW 2325",
        lat: -32.8350,
        lng: 151.3540,
        type: "green",
        accepts: "General recycling, green waste, household chemicals, e-waste",
        hours: "Mon–Sat: 8am–5pm, Sun: 9am–4pm"
    },
    {
        name: "Muswellbrook Resource Recovery Centre",
        address: "Wybong Rd, Muswellbrook NSW 2333",
        lat: -32.2610,
        lng: 150.8920,
        type: "green",
        accepts: "General recycling, green waste, e-waste, scrap metal",
        hours: "Mon–Fri: 8am–4pm, Sat: 8am–3pm"
    },
    {
        name: "Salamander Bay Recycling Centre",
        address: "360 Soldiers Point Road, Salamander Bay NSW 2317",
        lat: -32.72253,
        lng: 152.07945,
        type: "green",
        accepts: "Paint, glass, car batteries, e-waste, scrap metal, cardboard, clothing",
        hours: "Mon-Sat: 9am-4pm, Sun: 9am-2:30pm"
    },
    {
        name: "Ace Recycling Group E-Waste",
        address:"8 Kommer Pl, St Marys, NSW 2760",
        lat: -33.765,
        lng: 150.771,
        type: "blue",
        accepts: "Computer, Laptops, Monitors, Printers, Hard drives, motherboards",
        hours:"Mon-Fri:8am-4pm, Sat-Sun: Closed"
    },
    {
        name: "Dungog Resource Recovery Centre",
        address: "Minimbah Rd, Dungog NSW 2420",
        lat: -32.3950,
        lng: 151.7420,
        type: "green",
        accepts: "General recycling, green waste, scrap metal",
        hours: "Wed, Fri, Sat: 8am–4pm"
    },
    {
        name: "Kurri Kurri Community Drop-Off",
        address: "Lang St, Kurri Kurri NSW 2327",
        lat: -32.8190,
        lng: 151.4830,
        type: "blue",
        accepts: "Paper, cardboard, glass, plastics (1–7), cans",
        hours: "Open 24/7 (drop-off cage)"
    },
    {
        name: "Belmont Recycling Centre",
        address: "56/60 Floraville Rd, Belmont North NSW 2280, Australia",
        lat:-33.01919,
        lng: 151.66284,
        type: "blue",
        accepts: "paint, oil, bottles, batteries, electronics",
        hours: "Mon-Fri: 8am-4pm, Sat-Sun: 9am-2pm"
    },
    {
        name: "Wallsend Community Recycling Centre",
        address: "Tyrell St, Wallsend NSW 2287",
        lat: -32.9010,
        lng: 151.6640,
        type: "blue",
        accepts: "Paper, cardboard, glass, cans, soft plastics",
        hours: "Mon–Fri: 9am–5pm, Sat: 9am–3pm"
    },
    {
        name: "Hamilton Community Drop-Off",
        address: "Beaumont St, Hamilton NSW 2303",
        lat: -32.9240,
        lng: 151.7490,
        type: "blue",
        accepts: "Paper, cardboard, glass, plastics, cans",
        hours: "Open 24/7 (drop-off cage)"
    },
    {
        name: "Newcastle E-Waste Drop-Off (Officeworks Kotara)",
        address: "Kotara Fair, Kotara NSW 2289",
        lat: -32.9450,
        lng: 151.6850,
        type: "orange",
        accepts: "Phones, tablets, laptops, printers, small appliances",
        hours: "Mon–Sat: 9am–5:30pm, Sun: 10am–4pm"
    },
    {
        name: "Maitland E-Waste Collection Point",
        address: "Stockland Maitland, Maitland NSW 2320",
        lat: -32.7310,
        lng: 151.5550,
        type: "orange",
        accepts: "Phones, tablets, TVs, computers, cables",
        hours: "Mon–Wed: 9am–5:30pm, Thu–Fri: 9am–9pm, Sat–Sun: 9am–5pm"
    },
    {
        name: "Lake Macquarie E-Waste Drop-Off (Charlestown)",
        address: "Charlestown Square, Charlestown NSW 2290",
        lat: -32.9620,
        lng: 151.6920,
        type: "blue",
        accepts: "TVs, monitors, computers, phones, batteries",
        hours: "Mon–Wed: 9am–5:30pm, Thu–Fri: 9am–9pm, Sat–Sun: 10am–5pm"
    }
];

function buildPopup(station) {
    var typeLabel = station.type === 'green'
        ? 'Resource Recovery Centre'
        : station.type === 'blue'
        ? 'Community Drop-Off Point'
        : 'E-Waste Collection';

    return '<div class="map-popup">'
        + '<h3>' + station.name + '</h3>'
        + '<span class="popup-tag tag-' + station.type + '">' + typeLabel + '</span>'
        + '<p><strong>Address:</strong> ' + station.address + '</p>'
        + '<p><strong>Accepts:</strong> ' + station.accepts + '</p>'
        + '<p><strong>Hours:</strong> ' + station.hours + '</p>'
        + '</div>';
}

stations.forEach(function(station) {
    var icon = station.type === 'green' ? greenIcon
             : station.type === 'blue'  ? blueIcon
             : orangeIcon;

    L.marker([station.lat, station.lng], { icon: icon })
        .addTo(map)
        .bindPopup(buildPopup(station), { maxWidth: 280 });
});
