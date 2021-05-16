interface Props {
    children?: any;
}

const SuccessButtonRounded: React.FC<Props> = (props: Props) => (
    <button className="bg-green-darker hover:bg-green transition-colors duration-300 rounded-full font-display text-grey font-bold text-l md:text-xl p-2 md:p-3 xl:p-4">
        {props.children}
    </button>
);

export default SuccessButtonRounded;