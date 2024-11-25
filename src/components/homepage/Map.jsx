

import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const locations = [
  {
    name: "Auckland",
    lat: -36.8485,
    lng: 174.7633,
    image: "https://via.placeholder.com/150?text=Auckland", 
  },
  {
    name: "Wellington",
    lat: -41.2865,
    lng: 174.7762,
    image: "https://via.placeholder.com/150?text=Wellington",
  },
  {
    name: "Christchurch",
    lat: -43.5321,
    lng: 172.6362,
    image: "https://via.placeholder.com/150?text=Christchurch",    
  },
  {
    name: "Hamilton",
    lat: -37.7833,
    lng: 175.2833,
    image: "https://via.placeholder.com/150?text=Hamilton",  
  },
  {
    name: "Dunedin",
    lat: -45.8788,
    lng: 170.5028,
    image: "https://via.placeholder.com/150?text=Dunedin",
  },
];

const Map = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  };

  const cardContainerStyle = {
    width: "100%",
    height: "500px",
    overflowY: "auto",
    padding: "30px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    backgroundColor: "#fff",
  };

  const [currentLocation, setCurrentLocation] = useState(locations[0]);
  const [filteredLocations] = useState(locations);

  const handleFilter = (city) => {
    const selectedLocation = locations.find((loc) => loc.name.toUpperCase() === city.toUpperCase()) || locations[0];
    setCurrentLocation(selectedLocation);
  };

  return (
    <div className="relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-transparent to-transparent z-10"></div>

      {/* Main Map Content */}
      <div className="flex justify-center px-[15%] p-4 gap-6 relative z-20">
        <div className="flex flex-col w-full border-b-2 border-gray-300 pb-4">
          <h3 className="text-xl p-3">Explore</h3>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-5xl p-3 font-bold">Our Network</h1>
    
            <div className="flex gap-4">
              <button className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition-all">
                LENS Live
              </button>
              <button className="px-4 py-2 rounded-lg bg-white border border-black text-black hover:bg-gray-100 hover:text-white hover:border-transparent hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                View All Locations
              </button>
            </div>
          </div>
    
          <div className="flex justify-start mb-4">
            {["ALL", "AUCKLAND", "HAMILTON", "TAURANGA", "WELLINGTON", "CHRISTCHURCH"].map((city, index) => (
              <div
                key={index}
                className="cursor-pointer text-lg font-medium px-4 py-2 rounded-lg hover:bg-red-200 hover:text-red-600 transition-all"
                onClick={() => handleFilter(city)}
              >
                {city}
              </div>
            ))}
          </div>

          <div className="flex gap-6">
            <div className="w-[70%] h-[500px] rounded-lg overflow-hidden shadow-lg">
              <LoadScript googleMapsApiKey="AIzaSyAvqnpvVPE5nQ__URXURpzWCRlXjvs346U">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={{ lat: currentLocation.lat, lng: currentLocation.lng }}
                  zoom={5}
                >
                  <Marker
                    position={{ lat: currentLocation.lat, lng: currentLocation.lng }}
                    title={currentLocation.name}
                  />
                </GoogleMap>
              </LoadScript>
            </div>
    
            {/* Scrollable Cards Container */}
            <div
              id="card-container"
              style={cardContainerStyle}
            >
              {filteredLocations.map((item, index) => (
                <div
                  key={index}
                  className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 cursor-pointer"
                  onClick={() => setCurrentLocation(item)}  
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600">Latitude: {item.lat}</p>
                  <p className="text-sm text-gray-600">Longitude: {item.lng}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
