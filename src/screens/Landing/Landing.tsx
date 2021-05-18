import HeroNavbar from '../../components/HeroNavbar/HeroNavbar';
import DiscussionIllustration from '../../assets/discussion-illustration.svg';
import classes from './Landing.module.css';
import DangerButton from '../../components/DangerButton';
import { useState } from 'react';
import SignupModal from '../../components/SignupModal/SignupModal';

const Landing: React.FC = () => {
    const [showSignupModal, setShowSignupModal] = useState(false);

    const backdropClickHandler = () => {
        setShowSignupModal(false);
    }
    const signupClickHandler = () => setShowSignupModal(true);

    return (
        <div className={`mt-0 pt-0 ${classes.HeroHeader}`}>
            <SignupModal show={showSignupModal} backdropClicked={backdropClickHandler} />
            <HeroNavbar signupOnClick={signupClickHandler} />

            <section className="flex flex-wrap justify-center h-1/2 md:h-3/4">
                <div className="flex flex-grow flex-col flex-wrap w-full md:max-w-1/2 justify-center items-center md:items-start text-center md:text-left text-white mx-8 lg:mx-16 xl:mx-20 my-4 text-left">
                    <h1 className="text-4xl md:text-6xl text-red lg:text-8xl font-logo my-4 lg:my-7">Backdoor</h1>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-display mb-8 md:mb-16">A cybersecurity discussion forum.</p>
                    <DangerButton>Get Started</DangerButton>
                </div>
                <div className="flex flex-grow flex-col flex-wrap w-full md:max-w-1/3 justify-center items-center text-white mx-8 md:mx-12 my-20 max-w-xs xl:max-w-sm">
                    <img src={DiscussionIllustration} alt="Post Illustration" />
                </div>
            </section>
        </div>
    );
}

export default Landing;