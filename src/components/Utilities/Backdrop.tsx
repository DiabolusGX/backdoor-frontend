interface Props {
    clicked: () => void;
}

const Backdrop: React.FC<Props> = (props) => (
    <div
        className="bg-black bg-opacity-50 fixed w-screen h-screen z-40 fixed top-0 left-0"
        onClick={props.clicked}
    />
);

export default Backdrop;