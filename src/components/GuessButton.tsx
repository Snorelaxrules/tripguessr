interface GuessButtonProps {
    disabled: boolean;
    onClick: () => void;
}

// A button that confirms the user's guess on the map.
export default function GuessButton({ disabled, onClick }: GuessButtonProps) {
    return (
        <button disabled={disabled} onClick={onClick} className="guess-button">
            Confirm Guess
        </button>
    );
}
