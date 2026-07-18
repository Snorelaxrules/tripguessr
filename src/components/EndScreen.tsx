type Props = {
    totalScore: number;
    onRestart: () => void;
};

function getRank(score: number) {
    if (score >= 24000) return "🌍 World Class";
    if (score >= 20000) return "✈️ Expert Traveler";
    if (score >= 15000) return "🧭 Explorer";
    if (score >= 10000) return "📍 Tourist";

    return "🚶 Getting Started";
}

export default function EndScreen({ totalScore, onRestart }: Props) {
    return (
        <main className="end-screen">
            <div className="end-card">
                <div className="end-icon">🌍</div>

                <h1>Trip Complete</h1>

                <p className="subtitle">Thanks for exploring the world.</p>

                <div className="final-score">
                    <span>{totalScore.toLocaleString()}</span>
                    <small>Total Points</small>
                </div>

                <div className="rank">{getRank(totalScore)}</div>

                <button className="guess-button" onClick={onRestart}>
                    Play Again
                </button>
            </div>
        </main>
    );
}
