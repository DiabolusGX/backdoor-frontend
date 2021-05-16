import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => (
    <nav className="flex px-1 bg-grey sticky top-0 mb-5 font-display font-medium" id="navbar">
        <div className="flex flex-1 flex-wrap lg:flex-nowrap justify-between items-center">
            <ul className="flex px-6">
                <li className="transition-border duration-300 border-b-4 border-transparent hover:bg-grey-lighter py-4 px-3 text-lg text-syntax-yellow-darker">
                    <Link to="#">Home</Link>
                </li>
            </ul>

            <label htmlFor="hamburger-menu-toggle" className="cursor-pointer lg:hidden px-6">
                <svg className="fill-current text-syntax-yellow-darker" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input className="hidden" type="checkbox" id="hamburger-menu-toggle" />

            <div className="hidden lg:flex lg-w-min lg:items-center lg:justify-end w-full px-6" id="hamburger-menu">
                <ul className="lg:flex items-center">
                    <li className="transition-border duration-300 border-b-4 border-transparent hover:bg-grey-lighter py-4 px-3 lg:px-5 lg:mx-3 text-lg text-syntax-yellow-darker">
                        <Link to="#">Sign Up</Link>
                    </li>
                    <li className="transition-border duration-300 border-b-4 border-transparent hover:bg-grey-lighter py-4 px-3 lg:px-5 lg:mx-3 text-lg text-syntax-yellow-darker">
                        <Link to="#">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;