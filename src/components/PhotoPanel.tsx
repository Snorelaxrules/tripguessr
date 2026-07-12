type Props = {
    file: string;
};

export default function PhotoPanel({ file }: Props) {
    return (
        <div className="photo-panel">
            <img src={`../images/${file}`} alt="" />
        </div>
    );
}
