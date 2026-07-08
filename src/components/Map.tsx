import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { useMemo, useState } from "react";
import TargetMarker from "./TargetMarker";
import GuessLine from "./GuessLine";

type Guess = { lat: number; lng: number };

type MapProps = {
    interactive?: boolean;
    onSelectGuess?: (guess: Guess) => void;
    selectedGuess?: Guess | null;
    targetLocation?: Guess | null;
};

function ClickHandler({
    enabled,
    onClick,
}: {
    enabled: boolean;
    onClick: (guess: Guess) => void;
}) {
    useMapEvents({
        click(e: { latlng: { lat: number; lng: number } }) {
            if (!enabled) return;
            onClick({ lat: e.latlng.lat, lng: e.latlng.lng });
        },
    });
    return null;
}

export default function Map({
    interactive = true,
    onSelectGuess,
    selectedGuess,
    targetLocation,
}: MapProps) {
    const [localGuess, setLocalGuess] = useState<Guess | null>(null);
    const guess = selectedGuess ?? localGuess;

    const resolvedOnSelect = useMemo(() => {
        if (onSelectGuess) return onSelectGuess;
        return (g: Guess) => setLocalGuess(g);
    }, [onSelectGuess]);

    return (
        <div style={{ width: "100%", height: 420 }}>
            <MapContainer
                center={[38, -105]}
                zoom={3}
                scrollWheelZoom
                maxBounds={[
                    [-90, -180],
                    [90, 180],
                ]}
                style={{ width: "100%", height: "100%" }}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
                    noWrap
                />

                <ClickHandler
                    enabled={interactive}
                    onClick={resolvedOnSelect}
                />
                {guess && <Marker position={[guess.lat, guess.lng]} />}
                <TargetMarker target={targetLocation} />

                <GuessLine guess={guess} target={targetLocation} />
            </MapContainer>
        </div>
    );
}
