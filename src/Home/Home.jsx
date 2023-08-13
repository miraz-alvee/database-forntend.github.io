import React from 'react';

const Home = () => {
    return (
        <>
            <div className="ml-44 mr-44 bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen flex justify-center items-center">
                <div className="max-w-3xl p-8 bg-white rounded-lg shadow-xl">
                    <h1 className="text-4xl font-bold text-purple-600 mb-4">
                        Welcome to <span className="text-pink-600">LankaBangla</span>
                    </h1>
                    <p className="text-gray-700 mb-6">
                        Your <span className="font-semibold">trusted partner</span> for{' '}
                        <span className="text-purple-600">financial solutions</span>.
                    </p>
                    <div className="flex space-x-4">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full shadow-md">
                            Explore Services
                        </button>
                        <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full shadow-md">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;