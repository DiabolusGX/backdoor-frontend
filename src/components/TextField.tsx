interface Props {
    placeholder: string;
    type: string;
    label?: string | undefined;
    name?: string;
}

const TextField: React.FC<Props> = props => (
    <fieldset className="w-full border-box m-0 p-0 flex justify-center">
        <legend className="font-body font-medium text-lg tracking-wider text-syntax-yellow">
            {props.label}
        </legend>
        <input type={props.type} className="w-full mx-8 my-4 py-3 px-12 rounded-xl bg-grey-darker font-body text-lg
    placeholder-syntax-orange text-terminal-yellow font-body border-2 border-transparent focus:border-red outline-none"
            placeholder={props.placeholder} />
    </fieldset>
);

export default TextField;