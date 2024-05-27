"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box } from "@mui/material";
import { DeviceLocation } from "../interfaces/Device";
import L from "leaflet";

const Map = ({
  lastKnownLocation,
}: {
  lastKnownLocation: Partial<DeviceLocation>;
}) => {
  const customIcon = L.icon({
    iconUrl: "/map-marker.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <MapContainer
        center={[
          lastKnownLocation.global?.lat || 0,
          lastKnownLocation.global?.lon || 0,
        ]}
        zoom={13}
        style={{ height: "300px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[
            lastKnownLocation.global?.lat || 0,
            lastKnownLocation.global?.lon || 0,
          ]}
          icon={customIcon}
        >
          <Popup>{lastKnownLocation.summary}</Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default Map;
