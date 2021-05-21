const ErrorMessage: React.FC = props => (
    <p className="font-display text-red text-center text-md mx-2">
        {props.children}
    </p>
);

export default ErrorMessage;