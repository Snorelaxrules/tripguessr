interface GuessButtonProps {
    disabled: boolean;
    onClick: () => void;
}

export default function GuessButton({ disabled, onClick }: GuessButtonProps) {
    return (
        <button disabled={disabled} onClick={onClick} className="guess-button">
            Confirm Guess
        </button>
    );
}
