// Initialize the map and center it on the UK
var map = L.map('map').setView([55.3781, -3.4360], 6);

// Add OpenStreetMap tiles as the base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);

// Create individual markers with custom messages

// York marker
var yorkMarker = L.marker([53.959, -1.0815]).addTo(map);
yorkMarker.bindTooltip("York: NDT work here");

// Warrington marker
var warringtonMarker = L.marker([53.391, -2.592]).addTo(map);
warringtonMarker.bindTooltip("Warrington: NDT work here");

// Isle of Wight marker
var isleOfWightMarker = L.marker([50.696, -1.308]).addTo(map);
isleOfWightMarker.bindTooltip("Isle of Wight: NDT work here");

// South Ayrshire marker
var southAyrshireMarker = L.marker([55.458, -4.629]).addTo(map);
southAyrshireMarker.bindTooltip("South Ayrshire: NDT work here");

// Scottish Borders marker
var scottishBordersMarker = L.marker([55.67, -2.84]).addTo(map);
scottishBordersMarker.bindTooltip("Scottish Borders: NDT work here");

// Cheshire West marker
var cheshireWestMarker = L.marker([53.2, -2.8]).addTo(map);
cheshireWestMarker.bindTooltip("Cheshire West: NDT work here");

// Stoke on Trent marker
var stokeOnTrentMarker = L.marker([53.002, -2.179]).addTo(map);
stokeOnTrentMarker.bindTooltip("Stoke on Trent: NDT work here");

// Hartlepool marker
var hartlepoolMarker = L.marker([54.684, -1.210]).addTo(map);
hartlepoolMarker.bindTooltip("Hartlepool: NDT work here");

// Gateshead marker
var gatesheadMarker = L.marker([54.958, -1.600]).addTo(map);
gatesheadMarker.bindTooltip("Gateshead: NDT work here");

// Leeds marker
var leedsMarker = L.marker([53.8008, -1.5491]).addTo(map);
leedsMarker.bindTooltip("Leeds: NDT work here");
