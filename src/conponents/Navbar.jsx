import React from "react";
import logo from '../assets/logo.png'

const Navbar = () => {
    const navItem = [
        {link: "Home", path: "home"},
        {link: "Feature", path: "feature"},
        {link: "About", path: "about"},
        {link: "Pricing", path: "pricing"}
    ];


    return (
        <nav className="bg-secondary md:px-14 p-4 max-w-screen-2xl mx-auto">
            <div className="text-lg container ms auto flex justify-between items-center font-medium ">
                <div className="flex space-x-16 items-center">
                    <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
                        <img src={logo} alt="" className="w-10 inline-block items-center" /><span className="text-White">LOL</span>
                    </a>

                    <ul className='md:flex space-x-12 text-White  hidden'>
                        {
                            navItem.map(({ link, path }) => <a href={path} key={link} className='block hover:text-White'>{link}</a> )
                        }
                    </ul>

                </div>

                <div className="space-x-12 hidden md:flex items-center">
                    <button className="text-white bg-lastcolor py-2 px-4 transition-all duration-300 rounded">Sign UP</button>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;