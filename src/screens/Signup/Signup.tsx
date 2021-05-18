import Navbar from '../../components/Navbar/Navbar';
import classes from './Signup.module.css';
import TextField from '../../components/TextField';
import SuccessButton from '../../components/SuccessButton';
import Illustration from '../../components/Illustration';
import Heading from '../../components/Heading';
import SecureloginIllustration from '../../assets/securelogin-illustration.svg';
import { useEffect } from 'react';
import axios from 'axios';

const Signup: React.FC = () => {
    const sendRegistrationData = () => {
        axios.post('/user/signup', {
            email: 'someuser1@gmail.com',
            username: 'someuser1234',
            password: 'password'
        }).then(res => {
            console.log(res);
        }).catch(err => console.log(err.response.data.message));
    }

    useEffect(() => {
        sendRegistrationData();
    }, []);
    return (
        <>
            <Navbar />
            <section className="flex flex-wrap w-screen h-screen box-border">
                <div className="h-full hidden xl:block xl:w-3/12 px-5 bg-yellow flex flex-col items-start">
                    <h2 className="font-logo text-xl text-red text-left pt-28 mx-2 my-4">Backdoor</h2>
                    <p className="font-body text-2xl tracking-wider text-grey-darker text-left mx-2 mt-4 xl:mb-24 2xl:mb-96">
                        Engage in meaningful cybersecurity discussions.
                </p>
                    <Illustration src={SecureloginIllustration} />
                </div>

                <div className="flex flex-1 justify-center items-center">
                    <div className={`w-11/12 md:w-3/5 m-4 py-10 md:py-18 backdrop-filter backdrop-blur-3xl
        bg-grey-lighter rounded-3xl ${classes.Signup} flex flex-col justify-start items-center`}>
                        <Heading>
                            {/* Get your access to <span className="font-logo text-5xl text-red">Backdoor</span> */}
                        Get your access to Backdoor
                    </Heading>
                        <form action="/user/signup" method="post" className="w-full mt-12 mb-4 mx-4 flex flex-col items-center">
                            <TextField placeholder="Email" type="text" name="email" />
                            <TextField placeholder="Username" type="text" name="username" />
                            <TextField placeholder="Password" type="password" name="password" />
                            <TextField placeholder="Confirm Password" type="password" />
                            <SuccessButton type="submit">Sign Up</SuccessButton>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Signup;