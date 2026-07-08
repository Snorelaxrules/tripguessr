import { Polyline } from "react-leaflet";

type Guess = {
    lat: number;
    lng: number;
};

type GuessLineProps = {
    guess?: Guess | null;
    target?: Guess | null;
};

export default function GuessLine({ guess, target }: GuessLineProps) {
    if (!guess || !target) return null;

    return (
        <Polyline
            positions={[
                [guess.lat, guess.lng],
                [target.lat, target.lng],
            ]}
            pathOptions={{
                color: "#ff4d4d",
                weight: 3,
            }}
        />
    );
}
