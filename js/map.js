window.addEventListener('load', function() {
  // Log AwesomeMarkers and its icon function to verify availability
  console.log("L.AwesomeMarkers:", L.AwesomeMarkers);
  console.log("L.AwesomeMarkers.icon:", L.AwesomeMarkers && L.AwesomeMarkers.icon);
  
  // Initialize the map, centered over the UK
  var map = L.map('map').setView([55.3781, -3.4360], 6);
  
  // Add OpenStreetMap tiles as the base layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © OpenStreetMap contributors'
  }).addTo(map);
  
  // Add a test marker at the center to verify the map is working
  //L.marker([55.3781, -3.4360]).addTo(map).bindTooltip("Test Marker: Center");
  
  // Function to add a marker using AwesomeMarkers
  function addMarker(name, lat, lng, message, color) {
    console.log("Adding marker:", name, lat, lng, message, color);
    var marker;
    try {
      // Force creation of an AwesomeMarkers icon
      var icon = L.AwesomeMarkers.icon({
        icon: 'map-marker',  // Use Font Awesome's map-marker icon
        markerColor: color,  // Expected values: red, blue, green, orange, purple, etc.
        prefix: 'fa'         // Use Font Awesome icons
      });
      marker = L.marker([lat, lng], { icon: icon }).addTo(map);
    } catch (e) {
      console.error("Error creating awesome marker:", e);
      // Fallback to default marker if an error occurs
      marker = L.marker([lat, lng]).addTo(map);
    }
    marker.bindTooltip(name + ": " + message);
  }
  // Create a legend control and add it to the map.
var legend = L.control({ position: 'topleft' });

legend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend');
  // Create a legend with colored squares and labels.
  div.innerHTML += '<i style="background: purple"></i> Community Led Support<br>';
  div.innerHTML += '<i style="background: red"></i> Commissioned Contract<br>';
  div.innerHTML += '<i style="background: light blue"></i> C(E)TR<br>';
  div.innerHTML += '<i style="background: gray"></i> Inactive<br>';
  // Add as many entries as you need.
  return div;
};

legend.addTo(map);

  // Fetch and parse the CSV file (markers.csv should be in the project root)
  fetch('markers.csv')
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.status);
      }
      return response.text();
    })
    .then(function(csvText) {
      csvText = csvText.trim(); // Remove extraneous whitespace
      console.log("CSV text loaded:", csvText);
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: function(results) {
          console.log("Parsed CSV data:", results.data);
          console.log("Parsed CSV data length:", results.data.length);
          results.data.forEach(function(row) {
            var lat = parseFloat(row.lat);
            var lng = parseFloat(row.lng);
            if (!isNaN(lat) && !isNaN(lng)) {
              addMarker(row.name, lat, lng, row.message, row.color);
            } else {
              console.warn("Skipping row with invalid coordinates:", row);
            }
          });
        }
      });
    })
    .catch(function(error) {
      console.error("Error loading markers.csv:", error);
    });
});
