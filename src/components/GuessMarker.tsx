import { Marker } from "react-leaflet";

type Guess = {
    lat: number;
    lng: number;
};

type GuessMarkerProps = {
    guess: Guess | null;
};

export default function GuessMarker({ guess }: GuessMarkerProps) {
    if (!guess) return null;

    return <Marker position={[guess.lat, guess.lng]} />;
}
