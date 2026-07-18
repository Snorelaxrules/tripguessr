import "./Game.css";

import { useMemo, useState } from "react";

import photos from "../photos.json";

import Map from "../components/Map";
import GuessButton from "../components/GuessButton";
import NextRoundButton from "../components/NextRoundButton";
import GameHeader from "../components/GameHeader";
import PhotoPanel from "../components/PhotoPanel";
import ScoreCard from "../components/ScoreCard";
import EndScreen from "../components/EndScreen";

import { haversine } from "../utils/haversine";
import { shuffle } from "../utils/shuffle";

type Guess = {
    lat: number;
    lng: number;
};

export default function Game() {
    const [gamePhotos, setGamePhotos] = useState(() =>
        shuffle(photos).slice(0, 5),
    );

    const [photoIndex, setPhotoIndex] = useState(0);

    const currentPhoto = gamePhotos[photoIndex];

    const [guess, setGuess] = useState<Guess | null>(null);

    const [distance, setDistance] = useState<number | null>(null);

    const [score, setScore] = useState<number | null>(null);

    const [totalScore, setTotalScore] = useState(0);

    const [roundOver, setRoundOver] = useState(true);

    const gameOver = roundOver && photoIndex === gamePhotos.length - 1;

    function confirmGuess() {
        if (!guess) return;

        const d = haversine(
            guess.lat,
            guess.lng,
            currentPhoto.latitude,
            currentPhoto.longitude,
        );

        const roundScore = Math.round(5000 * Math.exp(-d / 1500));

        setDistance(d);

        setScore(roundScore);

        setTotalScore((s) => s + roundScore);

        setRoundOver(true);
    }

    function nextRound() {
        setPhotoIndex((i) => i + 1);

        setGuess(null);

        setDistance(null);

        setScore(null);

        setRoundOver(false);
    }

    function restartGame() {
        setGamePhotos(shuffle(photos).slice(0, 5));

        setPhotoIndex(0);

        setGuess(null);

        setDistance(null);

        setScore(null);

        setTotalScore(0);

        setRoundOver(false);
    }

    if (gameOver) {
        return <EndScreen totalScore={totalScore} onRestart={restartGame} />;
    }

    return (
        <main className="game">
            <GameHeader
                round={photoIndex + 1}
                totalRounds={gamePhotos.length}
                totalScore={totalScore}
            />

            <div className="game-content">
                <section className="photo-panel">
                    <PhotoPanel file={currentPhoto.file} />
                </section>

                <aside className="sidebar">
                    <div className="map-card">
                        <div className="panel-header">
                            <h3>📍 Place your guess</h3>
                            <p>Click anywhere on the map.</p>
                        </div>

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
                    </div>

                    {score !== null && distance !== null && (
                        <ScoreCard score={score} distance={distance} />
                    )}

                    {!roundOver ? (
                        <GuessButton disabled={!guess} onClick={confirmGuess} />
                    ) : (
                        <NextRoundButton onClick={nextRound} />
                    )}
                </aside>
            </div>
        </main>
    );
}
