type Props = {
    totalScore: number;
    onRestart: () => void;
};

export default function EndScreen({ totalScore, onRestart }: Props) {
    return (
        <div className="end-screen">
            <h1>Game Complete!</h1>

            <h2>{totalScore.toLocaleString()} pts</h2>

            <button className="play-button" onClick={onRestart}>
                Play Again
            </button>
        </div>
    );
}
