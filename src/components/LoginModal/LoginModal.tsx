import Backdrop from '../Utilities/Backdrop';
import classes from '../../scss/LoginModal.module.scss';
import Heading from '../Utilities/Heading';
import TextField from '../Utilities/TextField';
import SuccessButton from '../Buttons/SuccessButton';

interface Props {
    show: boolean;
    backdropClicked: () => void;
}

const LoginModal: React.FC<Props> = props => (
    props.show ? <>
        <div className={`flex flex-col justify-center items-center bg-grey-lighter rounded-2xl ${classes.Modal}`}>
            <Heading>
                Login
            </Heading>
            <form action="/user/login" method="post" className="mt-4 my-2 flex flex-col flex-1">
                <TextField
                    label="Email or Username"
                    placeholder="john.doe@example.com"
                    type="text"
                    icon="user"
                />
                <TextField
                    label="Password"
                    placeholder="Password"
                    type="password"
                    icon="password"
                />
                <div className="mt-4 flex justify-center align-center">
                    <SuccessButton type="submit">Login</SuccessButton>
                </div>
            </form>
        </div>
        <Backdrop clicked={props.backdropClicked} />
    </> : null
);

export default LoginModal;