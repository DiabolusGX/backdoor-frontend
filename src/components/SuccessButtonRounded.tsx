interface Props {
    type?: "button" | "submit" | "reset" | undefined;
}

const SuccessButtonRounded: React.FC<Props> = props => (
    <button className="bg-green-darker hover:bg-green transition-colors duration-300 m-4
    rounded-full font-display text-grey font-bold text-lg md:text-xl py-2 px-4 md:py-3 md:px-5 xl:px-7"
        type={props.type}>
        {props.children}
    </button>
);

export default SuccessButtonRounded;