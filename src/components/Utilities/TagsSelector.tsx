interface Props {
    tags?: [string];
    label?: string;
}

const TagsSelector: React.FC<Props> = props => {
    return (
        <div className="field w-full my-4 mx-4 lg:mx-4 xl:mx-0">
            <div className="field">
                <label className="label font-normal">{props.label}</label>
                <p className="control has-icons-right">
                    <input className="input rounded-xl px-4 cursor-pointer relative" type="text" readOnly />
                    <span className="icon is-small is-right flex justify-center items-center mx-2">
                        {props.children}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default TagsSelector;