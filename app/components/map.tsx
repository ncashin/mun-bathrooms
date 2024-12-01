import maplibregl from "maplibre-gl";
import { useCallback, useEffect, useRef } from "react";

export default function BathroomMap() {
  const map = useRef<maplibregl.Map | null>(null);
  const lng = -52.73524876547014;
  const lat = 47.57383107463892;
  const zoom = 14;

  const initMap = useCallback(
    (node: HTMLDivElement) => {
      if (!node || map.current) return; // stops map from intializing more than once

      map.current = new maplibregl.Map({
        container: node, // container id
        style:
          "https://api.maptiler.com/maps/06010d97-fcda-4e83-a576-71e1f3442a40/style.json?key=ujzdFuiMnJnX2oYBAMZp",
        center: [-52.73524876547014, 47.57383107463892], // starting position [lng, lat]
        zoom: 14, // starting zoom
        maplibreLogo: true,
        attributionControl: false,
      });
      map.current.resize();
    },
    [lng, lat, zoom]
  );

  return (
    <div
      className="w-60 h-full"
      onResize={() => {
        if (map.current) map.current.resize();
      }}>
      <div
        ref={initMap}
        className="min-w-0 min-h-0 w-full h-full max-w-full max-h-full container"
      />
    </div>
  );
}
