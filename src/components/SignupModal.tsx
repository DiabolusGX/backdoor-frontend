import GoogleLogin from 'react-google-login';
import Backdrop from './Backdrop';

interface Props {
    show: boolean;
    backdropClicked: () => void;
}

const SignupModal: React.FC<Props> = (props) => {
    const responseGoogle = () => { }
    return (
        props.show ?
            <>
                <div className="min-w-1/2 w-11/12 md:w-auto h-1/6 md:h-1/5 m-5 md:m-auto 
                bg-grey rounded-3xl flex align-center justify-center fixed z-50 md:left-1/4 top-20">
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