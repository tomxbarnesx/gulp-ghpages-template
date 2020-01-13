let data = {
	fields: {
		detour_map_center_lat: 38.849480,
		detour_map_center_lng: -100.778206,
		detour_map_zoom: 10,
	},
}

let vw = window.innerWidth * 0.01;
document.documentElement.style.setProperty('--vw', `${vw}px`);

window.addEventListener('resize', () => {
    // Same script as before on resize
    vh = window.innerHeight * 0.01;
    vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
});

function mapCreate() {
    let spinner = document.createElement("DIV");
    spinner.classList.add("loader");
    detourContainers.appendChild(spinner);

    let map = document.createElement("DIV");
    map.id = "detourMap"
    detourContainers.appendChild(map);

    //Initialize map =>
    mapInit = L.map('detourMap').setView([data.fields.detour_map_center_lat, data.fields.detour_map_center_lng], data.fields.detour_map_zoom);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoidG9teGJhcm5lc3giLCJhIjoiY2p1OTJsZDEwMXI1ajN5bzJ4NDhhNzVkcCJ9.EV4112N91Zp7z0tOS-bazg'
    }).addTo(mapInit);

    // Filter out all the appropriate waypoint data
    // let filteredWaypointData = subData.filter(x => (x.fields.detour === data.pk))

    // if (filteredWaypointData.length !== 0) {
    // //     // If there's routing create the route
    // //     if (data.fields.detour_map_routing) {
    // //         let routingWaypoints = [];
    // //         filteredWaypointData.forEach(function(element){
    // //             routingWaypoints.push(L.latLng(element.fields.map_marker_lat, element.fields.map_marker_lng))
    // //         })

    // //         L.Routing.control({
    // //             waypoints: routingWaypoints,
    // //             show: false,
    // //             draggableWaypoints: false,
    // //             addWaypoints: false,
    // //             router: L.Routing.graphHopper('ff11f10c-8ba5-46f6-be7f-c5b1d2d24365'),
    // //             // router: L.Routing.mapbox('pk.eyJ1IjoidG9teGJhcm5lc3giLCJhIjoiY2p1OTJsZDEwMXI1ajN5bzJ4NDhhNzVkcCJ9.EV4112N91Zp7z0tOS-bazg'),
    // //         }).addTo(mapInit);
    // //     }
    //     // Create the markers and their pop ups. Currently, there must always be a popup.
    //     filteredWaypointData.forEach(function(element){
    //         L.marker([element.fields.map_marker_lat, element.fields.map_marker_lng]).addTo(mapInit).bindPopup(element.fields.subelement_text).on('click', function(e){
    //             console.log(e)
    //             mixpanel.track("Map Marker Click", {
    //                 "Story": storyTitle,
    //                 "Detour Title": detourTitle,
    //                 "Marker Text": `${e.sourceTarget._popup._content.slice(11,21)}...`
    //             })
    //         });
    //     })
    // }
}