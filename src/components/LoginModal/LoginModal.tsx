import Backdrop from '../Backdrop';
import classes from './LoginModal.module.css';
import Heading from '../Heading';
import TextField from '../TextField';
import SuccessButton from '../SuccessButton';

interface Props {
    show: boolean;
    backdropClicked: () => void;
}

const LoginModal: React.FC<Props> = (props) => {
    return (
        props.show ?
            <>
                <div className={`flex flex-col justify-center items-center bg-grey rounded-2xl ${classes.Modal}`}>
                    <Heading>
                        Login
                    </Heading>
                    <form action="/user/login" method="post" className="my-8 flex flex-col flex-1">
                        <TextField placeholder="Username / Email" type="text" />
                        <TextField placeholder="Password" type="password" />
                        <SuccessButton type="submit">Login</SuccessButton>
                    </form>
                </div>
                <Backdrop clicked={props.backdropClicked} />
            </> : null
    );
}

export default LoginModal;