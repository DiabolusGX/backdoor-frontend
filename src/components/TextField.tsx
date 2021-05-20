interface Props {
    placeholder: string;
    type: string;
    label?: string | undefined;
    name?: string;
    required?: boolean;
    inputRef?: React.RefObject<HTMLInputElement>;
}

const TextField: React.FC<Props> = props => {
    const labelText = props.label ?
        <label
            className="mx-2 font-body text-syntax-orange text-xl uppercase tracking-widest">
            {props.label}
        </label>
        : undefined

    return (
        <div className="w-full border-box m-0 p-0 flex justify-center items-center">
            {labelText}
            <input type={props.type} className="w-full mx-8 my-4 py-3 px-12 rounded-xl bg-grey-darker font-body text-lg
    placeholder-syntax-orange text-terminal-yellow font-body border-2 border-transparent focus:border-red outline-none"
                placeholder={props.placeholder} required={props.required} ref={props.inputRef} />
        </div>
    )

}

export default TextField;