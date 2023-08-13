import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-2">
                <div className="flex justify-between items-center">
                    <div className="text-purple-600 font-semibold text-3xl">
                        LankaBangla
                    </div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link className='text-2xl font-medium ' to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className='text-2xl font-medium' to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link className='text-2xl font-medium' to='/register'>Register</Link>
                        </li>
                        {/* <li>
                            <Link className='text-2xl font-medium' to='/form'></Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;