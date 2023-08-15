import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user,logOut} = useContext(authContext);

    const handleLogOut = () =>{
        logOut ()
        .then()
        .catch(error => console.log(error));
    }

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

                        {user ?
                                <button onClick={handleLogOut} className="btn btn-error">Logout</button>
                                :
                            <Link className='text-2xl font-medium' to="/login">
                                <button className="btn btn-error">Login</button>
                            </Link>
                        }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;