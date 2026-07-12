import { useState } from "react";
import Game from "./Game";
import "./Home.css";

export default function Home() {
    const [playing, setPlaying] = useState(false);

    if (playing) {
        return <Game />;
    }

    return (
        <main className="home">
            <div className="hero-card">
                <h1 className="hero-title">🌏 TripGuessr</h1>

                <p className="hero-subtitle">
                    Guess where each photo was taken.
                    <br />5 rounds. One unforgettable trip.
                </p>

                <button
                    className="play-button"
                    onClick={() => setPlaying(true)}
                >
                    ▶ Play Game
                </button>

                <div className="info-grid">
                    <div className="info-card">
                        <h3>📸 Photos</h3>
                        <p>Real photos from my travels.</p>
                    </div>

                    <div className="info-card">
                        <h3>🗺️ Guess</h3>
                        <p>Click anywhere on the map.</p>
                    </div>

                    <div className="info-card">
                        <h3>⭐ Score</h3>
                        <p>Closer guesses earn more points.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
