import Map, { Marker, type MapRef } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useContext, useEffect, useRef, useState } from "react";
import { SelectionContext } from "./SelectionContext";

interface GlobeSectionProps {
  className?: string;
}

export default function GlobeSection(props: GlobeSectionProps) {
  const { selection } = useContext(SelectionContext);
  const { className } = props;
  const [viewState, setViewState] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 2,
  });

  const mapRef = useRef<MapRef>(null);

  useEffect(() => {
    if (selection.longitude && selection.latitude) {
      mapRef.current?.flyTo({
        center: [selection.longitude - 0.35, selection.latitude],
        zoom: 10,
        duration: 20000,
        essential: true,
      });
    }
  }, [selection]);

  return (
    <div className={className}>
      <Map
        initialViewState={viewState}
        ref={mapRef}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="https://tiles.stadiamaps.com/styles/alidade_smooth.json"
        projection="globe"
        mapLib={import("maplibre-gl")}
        scrollZoom={false}
        dragPan={false}
        dragRotate={false}
        icon-allow-overlap={false}
        text-allow-overlap={false}
      >
        {selection.longitude && selection.latitude && (
          <Marker
            longitude={selection.longitude}
            latitude={selection.latitude}
            anchor="bottom"
            color="green"
          />
        )}
      </Map>
    </div>
  );
}
