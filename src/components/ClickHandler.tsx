import { useMapEvents } from "react-leaflet";

type Guess = {
    lat: number;
    lng: number;
};

type ClickHandlerProps = {
    enabled: boolean;
    onClick: (guess: Guess) => void;
};

export default function ClickHandler({ enabled, onClick }: ClickHandlerProps) {
    useMapEvents({
        click(e) {
            if (!enabled) return;

            onClick({
                lat: e.latlng.lat,
                lng: e.latlng.lng,
            });
        },
    });

    return null;
}
