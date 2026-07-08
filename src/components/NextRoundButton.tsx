type NextRoundButtonProps = {
    onClick: () => void;
};

export default function NextRoundButton({ onClick }: NextRoundButtonProps) {
    return (
        <button className="next-round-button" onClick={onClick}>
            Next Round →
        </button>
    );
}
