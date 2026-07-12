type Props = {
    score: number;
    distance: number;
};

export default function ScoreCard({ score, distance }: Props) {
    return (
        <div className="score-card">
            <h1>{score.toLocaleString()}</h1>

            <p>{distance.toFixed(1)} km away</p>
        </div>
    );
}
