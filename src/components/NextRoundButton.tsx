type Props = {
    onClick: () => void;
    text?: string;
};

export default function NextRoundButton({
    onClick,
    text = "Next Round",
}: Props) {
    return (
        <button className="next-round-button" onClick={onClick}>
            {text}
        </button>
    );
}
