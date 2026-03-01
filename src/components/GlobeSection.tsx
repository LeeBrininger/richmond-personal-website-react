import Map, { Marker, type MapRef } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useContext, useEffect, useRef, useState } from "react";
import { SelectionContext } from "./contexts/SelectionContext";
import isMobile from "./hooks/IsMobile";

interface GlobeSectionProps {
  className?: string;
}

export default function GlobeSection(props: GlobeSectionProps) {
  const { className } = props;
  const { selection } = useContext(SelectionContext);

  const [viewState, setViewState] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 2,
  });

  const mapRef = useRef<MapRef>(null);
  const mobile = isMobile();

  useEffect(() => {
    let long = selection.longitude;
    if (!mobile) {
      long = selection.longitude - 0.35;
    }
    if (selection.longitude && selection.latitude) {
      mapRef.current?.flyTo({
        center: [long, selection.latitude],
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
        cursor="default"
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
