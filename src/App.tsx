import "./App.css";
import { useState } from "react";
import Map from "./components/Map";
import { haversine } from "./utils/haversine";
import GuessButton from "./components/GuessButton";
import photos from "./photos.json";
import NextRoundButton from "./components/NextRoundButton";

type Guess = { lat: number; lng: number };

export default function App() {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [guess, setGuess] = useState<Guess | null>(null);
    const [distance, setDistance] = useState<number | null>(null);
    const [score, setScore] = useState<number | null>(null);
    const [roundOver, setRoundOver] = useState(false);

    const currentPhoto = photos[photoIndex];

    function confirmGuess() {
        if (!guess) return;

        const d = haversine(
            guess.lat,
            guess.lng,
            currentPhoto.latitude,
            currentPhoto.longitude,
        );

        setDistance(d);

        // Placeholder scoring
        const roundScore = Math.round(5000 * Math.exp(-d / 1500));
        setScore(roundScore);

        setRoundOver(true);
    }

    function nextRound() {
        setPhotoIndex((i) => (i + 1) % photos.length);

        setGuess(null);
        setDistance(null);
        setScore(null);
        setRoundOver(false);
    }

    return (
        <>
            <section id="center">
                <div className="game">
                    <div className="image-panel">
                        <img
                            src={`../images/${currentPhoto.file}`}
                            alt=""
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className="map-panel">
                        <Map
                            selectedGuess={guess}
                            onSelectGuess={setGuess}
                            targetLocation={
                                roundOver
                                    ? {
                                          lat: currentPhoto.latitude,
                                          lng: currentPhoto.longitude,
                                      }
                                    : null
                            }
                        />
                        {!roundOver ? (
                            <GuessButton
                                disabled={!guess}
                                onClick={confirmGuess}
                            />
                        ) : (
                            <NextRoundButton onClick={nextRound} />
                        )}
                        {distance !== null && (
                            <p>{distance.toFixed(2)} km away</p>
                        )}
                        {score !== null && (
                            <div className="score-card">
                                <h2>{score} points</h2>
                                <p>{distance?.toFixed(1)} km away</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <div className="ticks"></div>
            <section id="spacer"></section>
        </>
    );
}
