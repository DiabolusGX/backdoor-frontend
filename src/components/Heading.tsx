const Heading: React.FC = props => (
    <h3 className="font-display text-4xl xl:text-5xl text-center 
                text-syntax-yellow-darker my-4">
        {props.children}
    </h3>
)

export default Heading;