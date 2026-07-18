type Props = {
    score: number;
    distance: number;
};

export default function ScoreCard({ score, distance }: Props) {
    return (
        <div className="score-card">
            <div className="score">{score.toLocaleString()}</div>

            <div className="distance">📍 {distance.toFixed(1)} km away</div>
        </div>
    );
}
