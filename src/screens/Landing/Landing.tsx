import HeroNavbar from '../../components/HeroNavbar/HeroNavbar';
import Illustration from '../../components/Illustration';
import classes from './Landing.module.css';
import DangerButton from '../../components/DangerButton';
import DiscussionIllustration from '../../assets/discussion-illustration.svg';

const Landing: React.FC = () => {

    return (
        <div className={`mt-0 pt-0 ${classes.HeroHeader}`}>
            <HeroNavbar />
            {/* <Route path="/login">
                <LoginModal />
            </Route> */}

            <section className="flex flex-wrap justify-center h-1/2 md:h-3/4">
                <div className="flex flex-grow flex-col flex-wrap w-full md:max-w-1/2 justify-center items-center md:items-start text-center md:text-left text-white mx-8 lg:mx-16 xl:mx-20 my-4 text-left">
                    <h1 className="text-4xl md:text-6xl text-red lg:text-8xl font-logo my-4 lg:my-7">Backdoor</h1>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-display mb-8 md:mb-16">A cybersecurity discussion forum.</p>
                    <DangerButton>Get Started</DangerButton>
                </div>
                <Illustration src={DiscussionIllustration} />
            </section>
        </div>
    );
}

export default Landing;