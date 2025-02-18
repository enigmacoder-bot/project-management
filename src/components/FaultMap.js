import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const FAULT_LOCATIONS = [
  { id: 'F001', position: [51.505, -0.09], faultType: 'Overheating' },
  { id: 'F002', position: [51.515, -0.1], faultType: 'Vibration' },
];

const FaultMap = () => {
  const position = [51.505, -0.09]; // Default center position for the map

  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      scrollWheelZoom={false} 
      className="h-80 rounded-lg border border-gray-700" // Adjust styles as needed
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {FAULT_LOCATIONS.map((fault) => (
        <Marker key={fault.id} position={fault.position}>
          <Popup>
            Fault Type: {fault.faultType} <br />
            ID: {fault.id}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default FaultMap;
