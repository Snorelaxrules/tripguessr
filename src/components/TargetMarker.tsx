import { Marker } from "react-leaflet";

type Guess = {
    lat: number;
    lng: number;
};

type TargetMarkerProps = {
    target?: Guess | null;
};

export default function TargetMarker({ target }: TargetMarkerProps) {
    if (!target) return null;

    return <Marker position={[target.lat, target.lng]} />;
}
