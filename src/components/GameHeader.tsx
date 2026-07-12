type Props = {
    round: number;
    totalRounds: number;
    totalScore: number;
};

export default function GameHeader({ round, totalRounds, totalScore }: Props) {
    return (
        <header className="game-header">
            <div className="header-stat">
                <span>ROUND</span>
                <h2>
                    {round}/{totalRounds}
                </h2>
            </div>

            <div className="header-logo">🌏 TripGuessr</div>

            <div className="header-stat">
                <span>TOTAL</span>
                <h2>{totalScore.toLocaleString()}</h2>
            </div>
        </header>
    );
}
