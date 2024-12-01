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
      });
    },
    [lng, lat, zoom]
  );

  return (
    <div className="col-start-2 col-span-1 p-5 bg-yellow-50">
      <div ref={initMap} className="w-full h-full" />
    </div>
  );
}
