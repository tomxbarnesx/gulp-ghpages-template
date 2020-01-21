let mapInit, modalVis = false, data = {
	fields: {
		detour_map_center_lat: 36.307035,
		detour_map_center_lng: -86.707002,
		detour_map_zoom: 4,
		layers: true,
	},
}

let geoJSONlayers = {}

let modalData = {
	fields: {
		modal_header: "Environmental Risks",
		modal_body: "<p>As our climate continues to change, we may see environmental and economic disruption on a scale unseen in modern history. This map details some of the highest risk areas for several climate-related disasters around the U.S. based on data collected from the McHang Institute. </p><p style='text-decoration: underline'><strong>How To:</strong></p><p>Tap on the map's layers to learn more.</p><p>Show/hide layers using the toggles in the bottom right corner.</p>"
	}
}

let disasterData = [
	{
	  "type": "FeatureCollection",
	  "features": [
	    {
	      "type": "Feature",
	      "properties": {
	      	"risk": "Floods",
	      	"popupContent": "The eastern seaboard is 2,000 feet lower than the Western seaboard. Increasingly turbulent noreastern winds will make severe flooding far more devestating as global temperatures increase.",
	      	"show_on_map": true,
	        "stroke": "#555555",
	        "stroke-width": 1,
	        "stroke-opacity": 1,
	        "fill": "#2099ac",
	        "fill-opacity": 0.5
	      },
	      "geometry": {
	        "type": "Polygon",
	        "coordinates": [
	          [
	            [
	              -67.18139648437499,
	              45.034714778688596
	            ],
	            [
	              -67.40112304687501,
	              45.04247805089152
	            ],
	            [
	              -67.5,
	              45.460130637920926
	            ],
	            [
	              -67.8076171875,
	              45.62940492064498
	            ],
	            [
	              -68.84033203125,
	              44.731125592643195
	            ],
	            [
	              -69.97192382812499,
	              44.174324837518846
	            ],
	            [
	              -72.4658203125,
	              42.30981541568661
	            ],
	            [
	              -74.0478515625,
	              41.82045509614029
	            ],
	            [
	              -78.79394531249999,
	              36.932330061503116
	            ],
	            [
	              -83.18847656250001,
	              33.72433966174758
	            ],
	            [
	              -84.9462890625,
	              33.10074540514422
	            ],
	            [
	              -86.7041015625,
	              32.54681317351517
	            ],
	            [
	              -89.47265625000001,
	              32.175612478499325
	            ],
	            [
	              -91.7578125,
	              31.80289258670676
	            ],
	            [
	              -95.75683593750004,
	              31.48489338689006
	            ],
	            [
	              -98.0419921875,
	              30.524413269923986
	            ],
	            [
	              -98.87695312499999,
	              29.84064389983441
	            ],
	            [
	              -99.404296875,
	              29.22889003019423
	            ],
	            [
	              -99.580078125,
	              28.22697003891834
	            ],
	            [
	              -99.37133789062503,
	              26.637638886645895
	            ],
	            [
	              -98.426513671875,
	              26.05678288577881
	            ],
	            [
	              -97.53662109375001,
	              25.819671943904044
	            ],
	            [
	              -97.218017578125,
	              25.928407032694118
	            ],
	            [
	              -97.33886718750001,
	              27.03955660216317
	            ],
	            [
	              -97.16308593750001,
	              27.58619785769259
	            ],
	            [
	              -96.67968750000001,
	              28.062285999812136
	            ],
	            [
	              -96.009521484375,
	              28.39140037581778
	            ],
	            [
	              -94.79003906250004,
	              29.132970130878586
	            ],
	            [
	              -93.86718750000001,
	              29.44916482692468
	            ],
	            [
	              -93.31787109375003,
	              29.496987596535742
	            ],
	            [
	              -92.82348632812501,
	              29.324720161511003
	            ],
	            [
	              -91.68090820312503,
	              29.094577077511826
	            ],
	            [
	              -90.48339843750001,
	              28.97931203672236
	            ],
	            [
	              -89.84619140625001,
	              28.7869180854202
	            ],
	            [
	              -89.02221679687503,
	              28.950475674847983
	            ],
	            [
	              -88.89038085937501,
	              29.544787796199465
	            ],
	            [
	              -88.857421875,
	              30.145127183376076
	            ],
	            [
	              -86.2646484375,
	              30.126124364224452
	            ],
	            [
	              -85.31982421875001,
	              29.420460341013108
	            ],
	            [
	              -84.82543945312501,
	              29.525670426175775
	            ],
	            [
	              -84.30908203125001,
	              29.888280933159265
	            ],
	            [
	              -84.034423828125,
	              29.93589521337242
	            ],
	            [
	              -83.419189453125,
	              29.31514119318728
	            ],
	            [
	              -82.880859375,
	              28.815799886487298
	            ],
	            [
	              -82.880859375,
	              28.536274512989916
	            ],
	            [
	              -83.00170898437501,
	              28.246327971048842
	            ],
	            [
	              -82.95776367187501,
	              27.58619785769264
	            ],
	            [
	              -81.9140625,
	              25.977798955464333
	            ],
	            [
	              -81.44165039062503,
	              25.591994180254687
	            ],
	            [
	              -81.32080078124999,
	              25.12539261151198
	            ],
	            [
	              -81.71630859375,
	              24.68695241199913
	            ],
	            [
	              -81.93603515625001,
	              24.367113562651223
	            ],
	            [
	              -80.57373046874999,
	              24.776759933219115
	            ],
	            [
	              -80.20019531249999,
	              25.20494115356904
	            ],
	            [
	              -80.04638671875001,
	              26.263862280111066
	            ],
	            [
	              -80.035400390625,
	              26.765230565697433
	            ],
	            [
	              -80.44189453124999,
	              27.78077164334817
	            ],
	            [
	              -80.57373046874999,
	              28.101057958669397
	            ],
	            [
	              -80.56274414062499,
	              28.516969440401006
	            ],
	            [
	              -81.10107421874999,
	              29.535229562948416
	            ],
	            [
	              -81.38671875,
	              30.581179257386932
	            ],
	            [
	              -80.8154296875,
	              31.76553740948435
	            ],
	            [
	              -80.26611328125,
	              32.222095840502305
	            ],
	            [
	              -79.69482421875,
	              32.528289364825234
	            ],
	            [
	              -78.72802734375,
	              33.422272258865966
	            ],
	            [
	              -77.98095703125001,
	              33.71520164474082
	            ],
	            [
	              -77.65136718749999,
	              34.03445260967637
	            ],
	            [
	              -77.39868164062503,
	              34.32529192442723
	            ],
	            [
	              -76.91528320312503,
	              34.551811369170466
	            ],
	            [
	              -76.453857421875,
	              34.56990638085625
	            ],
	            [
	              -75.77270507812504,
	              34.94899072578219
	            ],
	            [
	              -75.41015625000003,
	              35.12889434101045
	            ],
	            [
	              -75.311279296875,
	              35.496456056584115
	            ],
	            [
	              -75.90454101562501,
	              36.77409249464188
	            ],
	            [
	              -74.79492187500001,
	              38.70265930723788
	            ],
	            [
	              -74.16870117187501,
	              39.461643642055414
	            ],
	            [
	              -73.94897460937503,
	              39.85072092501592
	            ],
	            [
	              -73.83911132812499,
	              40.28790661250733
	            ],
	            [
	              -71.80664062500001,
	              40.83043687764913
	            ],
	            [
	              -69.93896484375,
	              41.087632124679104
	            ],
	            [
	              -69.96093750000001,
	              41.96765920367808
	            ],
	            [
	              -70.77392578125,
	              42.204107493733154
	            ],
	            [
	              -70.55419921875001,
	              42.52069952914961
	            ],
	            [
	              -70.718994140625,
	              42.83569550641449
	            ],
	            [
	              -70.048828125,
	              43.40504748787025
	            ],
	            [
	              -66.92871093750001,
	              44.63739123445574
	            ],
	            [
	              -67.18139648437499,
	              45.034714778688596
	            ]
	          ]
	        ]
	      }
	    }
	  ]
	}, {
	  "type": "FeatureCollection",
	  "features": [
	    {
	      "type": "Feature",
	      "properties": {
	      	"risk": "Earthquakes",
	      	"popupContent": "Earthquakes will also become more common as global temperatures rise. I'm not entirely sure why right now. But I'll find out.",
	      	"show_on_map": true,
	        "stroke": "#555555",
	        "stroke-width": 1,
	        "stroke-opacity": 1,
	        "fill": "#c80013",
	        "fill-opacity": 0.5
	      },
	      "geometry": {
	        "type": "Polygon",
	        "coordinates": [
	          [
	            [
	              -88.505859375,
	              37.77071473849609
	            ],
	            [
	              -89.01123046875,
	              37.71859032558816
	            ],
	            [
	              -89.47265625,
	              37.56199695314352
	            ],
	            [
	              -90.9228515625,
	              36.27970720524017
	            ],
	            [
	              -91.03271484375,
	              35.85343961959182
	            ],
	            [
	              -90.90087890624999,
	              35.585851593232356
	            ],
	            [
	              -90.72509765625,
	              35.37113502280101
	            ],
	            [
	              -90.46142578125,
	              35.17380831799959
	            ],
	            [
	              -90.19775390625,
	              35.02999636902566
	            ],
	            [
	              -89.82421875,
	              35.02999636902566
	            ],
	            [
	              -89.40673828125,
	              35.04798673426734
	            ],
	            [
	              -88.9013671875,
	              35.31736632923788
	            ],
	            [
	              -88.6376953125,
	              35.51434313431818
	            ],
	            [
	              -88.39599609375,
	              35.8356283888737
	            ],
	            [
	              -88.22021484375,
	              36.421282443649496
	            ],
	            [
	              -88.06640625,
	              37.10776507118514
	            ],
	            [
	              -88.0224609375,
	              37.78808138412046
	            ],
	            [
	              -88.505859375,
	              37.77071473849609
	            ]
	          ],
	          [
	            [
	              -123.55224609375,
	              48.23930899024907
	            ],
	            [
	              -124.03564453125,
	              48.23930899024907
	            ],
	            [
	              -124.56298828125001,
	              48.50204750525715
	            ],
	            [
	              -124.8486328125,
	              48.42920055556841
	            ],
	            [
	              -124.71679687499999,
	              47.97521412341618
	            ],
	            [
	              -124.1015625,
	              46.73986059969267
	            ],
	            [
	              -124.29931640625,
	              43.42100882994726
	            ],
	            [
	              -123.3544921875,
	              43.45291889355465
	            ],
	            [
	              -123.11279296875001,
	              43.59630591596548
	            ],
	            [
	              -122.9150390625,
	              43.8028187190472
	            ],
	            [
	              -122.431640625,
	              45.19752230305682
	            ],
	            [
	              -121.28906250000001,
	              46.07323062540835
	            ],
	            [
	              -121.1572265625,
	              46.33175800051563
	            ],
	            [
	              -120.84960937499999,
	              46.437856895024204
	            ],
	            [
	              -120.12451171875,
	              47.010225655683485
	            ],
	            [
	              -119.81689453125,
	              47.44294999517949
	            ],
	            [
	              -119.88281249999999,
	              47.724544549099676
	            ],
	            [
	              -120.69580078125001,
	              48.67645370777654
	            ],
	            [
	              -120.89355468749999,
	              48.922499263758255
	            ],
	            [
	              -121.13525390625,
	              49.023461463214126
	            ],
	            [
	              -123.22265625000001,
	              49.023461463214126
	            ],
	            [
	              -123.24462890625,
	              48.69096039092549
	            ],
	            [
	              -123.11279296875001,
	              48.4146186174932
	            ],
	            [
	              -122.80517578125,
	              48.3416461723746
	            ],
	            [
	              -123.00292968749999,
	              48.16608541901253
	            ],
	            [
	              -123.55224609375,
	              48.23930899024907
	            ]
	          ]
	        ]
	      }
	    }
	  ]
	}
]

let detourContainer = document.getElementById("detour-master-container");
let initButton = 	document.getElementById("init-button");
let vw = window.innerWidth * 0.01;
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vw', `${vw}px`);
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    // Same script as before on resize
    vw = window.innerWidth * 0.01;
    vw = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function layerFilter(targetLayer){
	// let activeLayers = geoJSONlayers.getLayers()
	// for (layer in activeLayers) {
	// 	mapInit.removeLayer(layer);
	// }

	if (geoJSONlayers[targetLayer.features[0].properties.risk].getLayers().length !== 0){
		geoJSONlayers[targetLayer.features[0].properties.risk].clearLayers()
	} else {
		geoJSONlayers[targetLayer.features[0].properties.risk].addData(targetLayer)
	}

	// L.geoJSON(disasterData, {
	//     filter: function(feature, layer) {
	//         return feature.properties.show_on_map;
	//     },
	//     style: function(feature) {
	//         switch (feature.properties.risk) {
	//             case 'flood': return {color: feature.properties.fill};
	//             case 'fire':   return {color: feature.properties.fill};
	//         }
	//     }
	// }).addTo(mapInit);
}

function createLayerToggles(layersContainer) {
	return disasterData.map((layer) => {
		let layerFragment = document.createDocumentFragment();
		let layerToggle = document.createElement("DIV");
		let layerIcon = document.createElement("DIV");
		let layerLabel = document.createElement("p");

		layerToggle.classList.add("layer-toggle");
		layerIcon.classList.add("layer-button");
		layerIcon.id = layer.features[0].properties.risk;
		layerIcon.style.background = layer.features[0].properties.fill;
		layerIcon.style.opacity = layer.features[0].properties["fill-opacity"];
		layerLabel.classList.add("layer-label");
		layerLabel.textContent = layer.features[0].properties.risk;

		layerToggle.addEventListener("click", function(e){
			currentVis = layer.features[0].properties.show_on_map;
			layer.features[0].properties.show_on_map = !currentVis;
			console.log(layer.features[0].properties.risk, layer.features[0].properties.show_on_map)
			layerFilter(layer)
		})

		layerToggle.appendChild(layerIcon)
		layerToggle.appendChild(layerLabel)
		layerFragment.appendChild(layerToggle)
		layersContainer.appendChild(layerFragment)
	});
}

function createPopUp(feature, layer) {
	if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

function layerCreate() {
	let layersContainer = document.createElement("DIV");
	layersContainer.classList.add("map-layer-container");
	detourContainer.appendChild(layersContainer);

	for (testLayer in disasterData) {
		let riskLayer = L.geoJSON(disasterData[testLayer], {
		    style: function(feature) {
		    	return {color: feature.properties.fill}
		    },
		    onEachFeature: createPopUp
		}).addTo(mapInit);
		geoJSONlayers[disasterData[testLayer].features[0].properties.risk] = riskLayer;
	}

	createLayerToggles(layersContainer);
}

const fadeModal = (mapModal) => {
	modalVis = !modalVis;
    let modal = document.getElementsByClassName("sign-up-modal")[0]
    modal.classList.add("fade-out");

    if (!mapModal) {
    	let blur = document.getElementsByClassName("blur-film")[0]
    	blur.classList.add("fade-out");
    	popUpActive = false;
	    let activeToRestart = document.getElementById(activePage);
	    // storyMaster.resumeCallback();
	    if (activeToRestart.children[0].children[0].children[0].tagName === "VIDEO") {
	        activeToRestart.children[0].children[0].children[0].play();
	    }
    }
    if (localStorage.getItem("promoSlug")) {
        localStorage.removeItem("promoSlug");
    }
    
    setTimeout(() => {
        modal.remove();
        if (!mapModal) {
        	blur.remove();
        }
    }, 600)
}

function modalCreateInfoButton(){
	let modalTriggerButton = document.createElement("DIV");
	modalTriggerButton.insertAdjacentHTML('beforeend', '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px"><title>58</title><path d="M50,5A45,45,0,1,0,95,50,45.05046,45.05046,0,0,0,50,5Zm0,82A37,37,0,1,1,87,50,37.0413,37.0413,0,0,1,50,87Z"/><rect x="46" y="41.31915" width="8" height="33.10638"/><rect x="46" y="25.57446" width="8" height="8"/></svg>')
    // modalTriggerButton.insertAdjacentHTML('beforeend', '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 202.978 202.978" style="enable-background:new 0 0 202.978 202.978;" xml:space="preserve"><g><g><g><g><path style="fill:#010002;" d="M100.942,0.001C44.9,0.304-0.297,45.98,0.006,102.031 c0.293,56.051,45.998,101.238,102.02,100.945c56.081-0.303,101.248-45.978,100.945-102.02 C202.659,44.886,157.013-0.292,100.942,0.001z M101.948,186.436c-46.916,0.234-85.108-37.576-85.372-84.492 c-0.244-46.907,37.537-85.157,84.453-85.411c46.926-0.254,85.167,37.596,85.421,84.483 C186.695,147.951,148.855,186.182,101.948,186.436z M116.984,145.899l-0.42-75.865l-39.149,0.254l0.078,16.6l10.63-0.059 l0.313,59.237l-11.275,0.039l0.088,15.857l49.134-0.264l-0.098-15.847L116.984,145.899z M102.065,58.837 c9.575-0.039,15.349-6.448,15.3-14.323c-0.254-8.07-5.882-14.225-15.095-14.186c-9.184,0.059-15.173,6.292-15.134,14.362 C87.185,52.555,93.028,58.906,102.065,58.837z"/></g></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>')
    modalTriggerButton.classList.add("modal-info-button");
    modalTriggerButton.addEventListener("click", () => {
    	if (modalVis) {
    		fadeModal(true)
    	} else {
    		modalTrigger()
    	}
    })
    detourContainer.appendChild(modalTriggerButton);
}

function modalTrigger(){
	modalVis = !modalVis
	let modalFragment = document.createDocumentFragment();
    let modal = document.createElement("DIV");
    let modalHeader = document.createElement("H1");
    let modalBody = document.createElement("DIV");
    let modalX = document.createElement("DIV");

    modalX.classList.add("modal-close");
    modalX.insertAdjacentHTML('beforeend', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>');
    modalX.addEventListener("click", () => {
    	fadeModal(true)
    })
    modal.classList.add("sign-up-modal", "inner-border", "map-modal");
    modalHeader.textContent = modalData.fields.modal_header;
    modalHeader.style.clear = "both";
    modalBody.insertAdjacentHTML('beforeend', modalData.fields.modal_body);
    modal.appendChild(modalX);
    modal.appendChild(modalHeader);
    modal.appendChild(modalBody);
    modalFragment.appendChild(modal)
    detourContainer.appendChild(modalFragment)

  	modal.classList.add("fade-in")
}

function mapCreate() {
	//LIKELY NEED SOME KIND OF IF STATEMENT TO TRIGGER MODAL
	// ==> ?
	modalTrigger();
	modalCreateInfoButton();

	initButton.style.display = "none";

    let spinner = document.createElement("DIV");
    spinner.classList.add("loader");
    detourContainer.appendChild(spinner);

    let map = document.createElement("DIV");
    map.id = "detourMap"
    detourContainer.appendChild(map);

    //Initialize map =>
    mapInit = L.map('detourMap').setView([data.fields.detour_map_center_lat, data.fields.detour_map_center_lng], data.fields.detour_map_zoom);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoidG9teGJhcm5lc3giLCJhIjoiY2p1OTJsZDEwMXI1ajN5bzJ4NDhhNzVkcCJ9.EV4112N91Zp7z0tOS-bazg'
    }).addTo(mapInit);

    if (data.fields.layers) {
    	layerCreate()
    }

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