import GoogleLogin from 'react-google-login';
import Backdrop from '../Backdrop';
import classes from './SignupModal.module.css';

interface Props {
    show: boolean;
    backdropClicked: () => void;
}

const SignupModal: React.FC<Props> = (props) => {
    const responseGoogle = () => { }
    return (
        props.show ?
            <>
                <div className={`flex justify-center items-center bg-grey rounded-2xl ${classes.Modal}`}>
                    <GoogleLogin
                        clientId="354994676457-gs5b15kpob96uae09m2ut46rl2lsqcvc.apps.googleusercontent.com"
                        buttonText="Signup with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy="single_host_origin"
                        className="self-center m-4 md:m-8 lg:m-12"
                    />
                </div>
                <Backdrop clicked={props.backdropClicked} />
            </> : null
    );
}

export default SignupModal;