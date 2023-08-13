import React from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
    return (
        <div className="ml-44 mr-44 bg-gradient-to-r from-purple-200 to-pink-200 min-h-screen flex justify-center items-center">
            <div className="max-w-3xl p-20 bg-white rounded-lg shadow-xl">
                <h1 className="text-4xl font-bold text-purple-600 mb-4">
                    Account <span className="text-pink-600">Form</span>
                </h1>
                <div className="flex space-x-10 mt-10">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full shadow-md">
                        <Link to='/nomine'>Nomine Form</Link>
                    </button>
                    <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full shadow-md">
                        <Link to='/account'>Account Holder</Link>
                    </button>
                </div>
             </div>
        </div>
    );
};

export default Form;