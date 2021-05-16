import HeroNavbar from '../../components/HeroNavbar/HeroNavbar';
import PostIllustration from '../../assets/post-illustration.svg';
import classes from './Landing.module.css';
import PrimaryButton from '../../components/PrimaryButton';

const Landing: React.FC = () => (
    <div className={`mt-0 pt-0 ${classes.HeroHeader}`}>
        <HeroNavbar />

        <section className="flex flex-wrap h-1/2 md:h-3/4 mx-auto">
            <div className="flex flex-grow flex-col flex-wrap w-full md:max-w-1/2 justify-center items-start text-white mx-8 lg:mx-16 xl:mx-20 my-4 text-left">
                <h1 className="text-4xl md:text-6xl text-red lg:text-8xl font-logo my-4 lg:my-7">Backdoor</h1>
                <p className="text-2xl md:text-3xl lg:text-4xl font-display mb-8 md:mb-16">A cybersecurity discussion forum.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
            <div className="flex flex-grow flex-col justify-center items-left h-auto text-white mx-8 md:mx-12 my-20 max-w-xs xl:max-w-sm">
                <img src={PostIllustration} alt="Post Illustration"/>
            </div>
        </section>
    </div>
);

export default Landing;