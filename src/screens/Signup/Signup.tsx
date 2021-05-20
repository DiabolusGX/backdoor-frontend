import Navbar from '../../components/Navbar/Navbar';
import classes from './Signup.module.css';
import TextField from '../../components/TextField';
import SuccessButton from '../../components/SuccessButton';
import Illustration from '../../components/Illustration';
import Heading from '../../components/Heading';
import SecureloginIllustration from '../../assets/securelogin-illustration.svg';
import Joi from 'joi';
import axios from 'axios';
import { toast, Flip } from 'react-toastify';
import { useState, useRef, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

const Signup: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState<string>();
    const history = useHistory();

    const complexityCheck = (value: string, helpers: object) => {
        // Check for lowercase characters
        if (!/[a-z]/.test(value)) throw new Error()
        // Check for uppercase characters
        if (!/[A-Z]/.test(value)) throw new Error();
        // Check for digits
        if (!/\d/.test(value)) throw new Error();

        return value;
    }

    const usernameValidation = (value: string, helpers: object) => {
        if (!/^[a-zA-Z]/.test(value)) throw new Error();
    }
    const registrationSchema = Joi.object({
        email: Joi.string()
            .email({
                // Maybe whitelist domains to ['com', 'ru', 'org', 'dev', 'net', 'in']
                tlds: { allow: false }
            })
            .required(),
        username: Joi.string()
            .alphanum()
            .min(4)
            .max(50)
            .custom(usernameValidation, 'username validation')
            .required()
            .messages({
                'any.custom': "Username must start with an uppercase or lowercase letter."
            }),
        password: Joi.string()
            .min(12)
            .max(64)
            .custom(complexityCheck, 'complexity check')
            .required()
            .messages({
                'any.custom':
                    "Password must have at least one lowercase character, one uppercase character and one number."
            }),
        confirmPassword: Joi.string()
            .valid(Joi.ref('password'))
            .required()
            .messages({
                'any.only': 'Passwords do not match'
            })
    });

    const emailRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
        const email = emailRef.current?.value;
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const confirmPassword = confirmPasswordRef.current?.value;

        e.preventDefault();

        const { error } = registrationSchema.validate({
            email,
            username,
            password,
            confirmPassword
        });

        if (error) {
            setErrorMessage(error.message);
        } else {
            setErrorMessage(undefined);
            axios.post('/user/signup', {
                email,
                username,
                password
            })
                .then(res => {
                    toast.success(res.data.message, {
                        onOpen: () => history.push('/'),
                        transition: Flip
                    });
                })
                .catch(err => {
                    toast.error(err.response.data.message, { transition: Flip });
                });

        }
    }

    return (
        <>
            <Navbar />
            <section className="flex flex-wrap w-screen h-screen box-border pt-16">
                <div className="h-full hidden xl:block xl:w-3/12 px-5 bg-yellow flex flex-col items-start">
                    <h2 className="font-logo text-xl text-red text-left pt-28 mx-2 my-4">Backdoor</h2>
                    <p className="font-body text-2xl tracking-wider text-grey-darker text-left mx-2 mt-4 xl:mb-24 2xl:mb-96">
                        Engage in meaningful cybersecurity discussions.
                </p>
                    <Illustration src={SecureloginIllustration} />
                </div>

                <div className="flex flex-1 justify-center items-center">
                    <div className={`w-11/12 md:w-3/5 m-4 py-10 md:py-18 xl:px-12 backdrop-filter backdrop-blur-3xl
        bg-grey-lighter rounded-3xl ${classes.Signup} flex flex-col justify-start items-center`}>
                        <Heading>
                            {/* Get your access to <span className="font-logo text-5xl text-red">Backdoor</span> */}
                        Get your access to Backdoor
                        </Heading>
                        <form onSubmit={submitHandler} className="w-full mt-12 mb-4 mx-4 flex flex-col items-center">
                            <TextField placeholder="Email" type="email" name="email" required
                                inputRef={emailRef} />
                            <TextField placeholder="Username" type="text" name="username" required
                                inputRef={usernameRef} />
                            <TextField placeholder="Password" type="password" name="password" required
                                inputRef={passwordRef} />
                            <TextField placeholder="Confirm Password" type="password" required
                                inputRef={confirmPasswordRef} />
                            <SuccessButton type="submit">Sign Up</SuccessButton>
                        </form>
                        <p className="font-display text-red text-center text-md mx-2">{errorMessage}</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Signup;