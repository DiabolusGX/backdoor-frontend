import { Link } from 'react-router-dom';

const HeroNavbar: React.FC = () => (
    <div className="flex flex-wrap justify-between items-center pt-8 mb-8 md:mx-40 lg:mx-72 font-display font-bold">
        <ul className="flex">
            <li className="transition-border duration-300 border-2 border-transparent hover:border-red py-4 px-8 text-lg text-syntax-yellow-darker rounded-full">
                <Link to="#" className="text-xl">Home</Link>
            </li>
        </ul>
        <ul className="hidden md:flex">
            <li className="transition-border duration-300 border-2 border-transparent hover:border-red py-4 px-7 text-lg text-syntax-yellow-darker rounded-full mx-3">
                <Link to="#" className="text-xl">Login</Link>
            </li>
            <li className="transition-border duration-300 border-2 border-transparent bg-grey-lighter hover:border-red py-4 px-8 text-lg text-syntax-yellow-darker rounded-full mx-5">
                <Link to="#" className="text-xl">Sign Up</Link>
            </li>
        </ul>
    </div>
);

export default HeroNavbar;