import Backdrop from '../Utilities/Backdrop';
import classes from '../../scss/LoginModal.module.scss';
import Heading from '../Utilities/Heading';
import TextField from '../Utilities/TextField';
import SuccessButton from '../Buttons/SuccessButton';
import loginSchema from '../../schema/loginSchema';
import { authenticate } from '../../store/authSlice';
import { login } from '../../api/index';
import { useRef, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { toast, Flip } from 'react-toastify';

import { useDispatch } from 'react-redux';
import ErrorMessage from '../Utilities/ErrorMessage';

interface Props {
    show: boolean;
    backdropClicked: () => void;
}

const LoginModal: React.FC<Props> = props => {
    const [errorMessage, setErrorMessage] = useState<string>();
    const dispatch = useDispatch();
    const history = useHistory();
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        const { error } = loginSchema.validate({
            username,
            password
        });

        if (error) {
            setErrorMessage(error.message);
            return;
        } else {
            setErrorMessage(undefined);
            login({
                username,
                password
            })
                .then(res => {
                    dispatch(authenticate());
                    toast.success(res.data.message, {
                        onOpen: () => history.push('/'),
                        transition: Flip
                    })
                })
                .catch(err => {
                    console.log(err.response);
                    toast.error(err.response.data.message, { transition: Flip });
                });
        }
    }

    return (
        props.show ? <>
            <div className={`flex flex-col justify-center items-center bg-grey-lighter rounded-2xl ${classes.Modal}`}>
                <Heading>
                    Login
            </Heading>
                <form onSubmit={submitHandler} className="mt-4 my-2 flex flex-col flex-1">
                    <TextField
                        label="Email or Username"
                        placeholder="john.doe@example.com"
                        type="text"
                        icon="user"
                        inputRef={usernameRef}
                    />
                    <TextField
                        label="Password"
                        placeholder="Password"
                        type="password"
                        icon="password"
                        inputRef={passwordRef}
                    />
                    <div className="mt-4 flex justify-center align-center">
                        <SuccessButton type="submit">Login</SuccessButton>
                    </div>
                </form>
                <ErrorMessage>{errorMessage}</ErrorMessage>
            </div>
            <Backdrop clicked={props.backdropClicked} />
        </> : null
    );
}

export default LoginModal;