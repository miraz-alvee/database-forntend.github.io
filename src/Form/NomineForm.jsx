import React from 'react';

const NomineForm = () => {
    return (
        <div className='mt-5 ml-44 mr-44'>
            <div className="bg-green-200 shadow-md mt-5">
                <div className="max-w-7xl mx-auto px-4 py-2">
                    <h2 className='font-bold text-center text-3xl'> Account Nomination Form</h2>
                </div>
            </div>
            <div>
                <p className='mt-5 font-medium'>Please complete all details in CAPITAL letters. Please fill all names correctly. All communications shall be sent to the
                    correspondence address of only the First Named Account Holder as specified in BO Account Opening Form 02.</p>
            </div>
            <div className="bg-gray-300 shadow-md mt-5">
                <div className="max-w-7xl px-4 py-2">
                    <form>
                        <div className='flex justify-around mt-5'>
                            <div className="mb-4">
                                <label htmlFor="mobile" className="block mb-1 font-medium">
                                    Application No :
                                </label>
                                <input
                                    type="application"
                                    id="application"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Application no"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Date :
                                </label>
                                <input
                                    type="text"
                                    id="date"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter date"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="bg-pink-300 shadow-md mt-5">
                <div className="max-w-7xl px-4 py-2">
                    <h2 className='font-medium text-2xl'>1. Nominee.Heirs Details</h2>
                </div>
            </div>
            <div className="bg-green-200 shadow-md mt-5">
                <div className="px-4 py-2">
                    <h2 className='font-bold'>Nominee 1</h2>
                    <form>
                        <div className="mb-4 mt-4">
                            <label htmlFor="name" className="block mb-1 font-medium">
                                Full Name :
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                placeholder="Enter name"
                            />
                        </div>
                        <div className='grid grid-cols-2 justify-items-stretch gap-4 mt-5'>
                            <div className="mb-4">
                                <label htmlFor="fatherName" className="block mb-1 font-medium">
                                    Short Name (Insert full name starting with Title Mr./Mrs./Ms/Dr,abbreviate only if over 30 characters)
                                </label>
                                <input
                                    type="text"
                                    id="sortName"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter father's/husband's name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="fatherName" className="block mb-1 font-medium">
                                    Title i.e. Mr./Mrs./Ms
                                </label>
                                <input
                                    type="text"
                                    id="Name"
                                    className="w-full px-3 py-2 mr-20 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter father's/husband's name"
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 justify-items-stretch gap-4 mt-5'>
                            <div className="mb-4">
                                <label htmlFor="fatherName" className="block mb-1 font-medium">
                                    Relationship with Nomine
                                </label>
                                <input
                                    type="text"
                                    id="sortName"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter nomine name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="fatherName" className="block mb-1 font-medium">
                                    Percentage %
                                </label>
                                <input
                                    type="text"
                                    id="Name"
                                    className="w-full px-3 py-2 mr-20 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Percentage"
                                />
                            </div>
                        </div>
                        <div className="mb-4 mt-4">
                            <label htmlFor="name" className="block mb-1 font-medium">
                                Address
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                placeholder="Enter Address"
                            />
                        </div>
                        <div className='grid grid-cols-5 gap-4 mt-5'>
                            <div className="mb-4">
                                <label htmlFor="mobile" className="block mb-1 font-medium">
                                    City :
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter city name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Post Code :
                                </label>
                                <input
                                    type="text"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter post code"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    State/Division :
                                </label>
                                <input
                                    type="text"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter devision"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter country name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Telephone
                                </label>
                                <input
                                    type="tel"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter telephone number"
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-3 justify-items-stretch gap-4 mt-5'>
                            <div className="mb-4">
                                <label htmlFor="mobile" className="block mb-1 font-medium">
                                    Mobile Phone
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter phone number"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Fax
                                </label>
                                <input
                                    type="tel"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter Fax"
                                />
                            </div>
                            <div className="mb">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter your Email"
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-4 gap-4 mt-5'>
                            <div className="mb-4">
                                <label htmlFor="mobile" className="block mb-1 font-medium">
                                    Passport No :
                                </label>
                                <input
                                    type="text"
                                    id="mobile"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter Passport No"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Issue Place :
                                </label>
                                <input
                                    type="text"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter Issue Place"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Issue Date :
                                </label>
                                <input
                                    type="text"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter Issue Date"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Expiry Date :
                                </label>
                                <input
                                    type="text"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter Expiry Date :"
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-3 justify-items-stretch gap-4 mt-5'>
                            <div className="mb-4">
                                <label className="block mb-1 font-medium">Residency</label>
                                <div>
                                    <label className="inline-flex items-center mr-4">
                                        <input
                                            type="radio"
                                            name="Residence"
                                            value="male"
                                            className="mr-1"
                                        />
                                        Residence
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="Non Residence"
                                            value="female"
                                            className="mr-1"
                                        />
                                        Non Residence
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Nationality
                                </label>
                                <input
                                    type="tel"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter Nationality"
                                />
                            </div>
                            <div className="mb">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Date of Birth
                                </label>
                                <input
                                    type="text"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter your Birth"
                                />
                            </div>
                        </div>
                        <h2 className='font-bold'>Guardian's Details (If Nominee is a Minor)</h2>
                        <div className="mb-4 mt-4">
                            <label htmlFor="name" className="block mb-1 font-medium">
                                Full Name :
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                placeholder="Enter name"
                            />
                        </div>
                        <div className='grid grid-cols-1 justify-items-stretch gap-4 mt-5'>
                            <div className="mb-4">
                                <label htmlFor="fatherName" className="block mb-1 font-medium">
                                    Short Name (Insert full name starting with Title Mr./Mrs./Ms/Dr,abbreviate only if over 30 characters)
                                </label>
                                <input
                                    type="text"
                                    id="sortName"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter father's/husband's name"
                                />
                            </div>
                        </div>
                        <div className="mb-4 mt-4">
                            <label htmlFor="name" className="block mb-1 font-medium">
                                Address
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                placeholder="Enter Address"
                            />
                        </div>
                        <div className='grid grid-cols-5 gap-4 mt-5'>
                            <div className="mb-4">
                                <label htmlFor="mobile" className="block mb-1 font-medium">
                                    City :
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter city name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Post Code :
                                </label>
                                <input
                                    type="text"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter post code"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    State/Division :
                                </label>
                                <input
                                    type="text"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter devision"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter country name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Telephone
                                </label>
                                <input
                                    type="tel"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter telephone number"
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-3 justify-items-stretch gap-4 mt-5'>
                            <div className="mb-4">
                                <label htmlFor="mobile" className="block mb-1 font-medium">
                                    Mobile Phone
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter phone number"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Fax
                                </label>
                                <input
                                    type="tel"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter Fax"
                                />
                            </div>
                            <div className="mb">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter your Email"
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-4 gap-4 mt-5'>
                            <div className="mb-4">
                                <label htmlFor="mobile" className="block mb-1 font-medium">
                                    Passport No :
                                </label>
                                <input
                                    type="text"
                                    id="mobile"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter Passport No"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Issue Place :
                                </label>
                                <input
                                    type="text"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter Issue Place"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Issue Date :
                                </label>
                                <input
                                    type="text"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter Issue Date"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Expiry Date :
                                </label>
                                <input
                                    type="text"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter Expiry Date :"
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-3 justify-items-stretch gap-4 mt-5'>
                            <div className="mb-4">
                                <label className="block mb-1 font-medium">Residency</label>
                                <div>
                                    <label className="inline-flex items-center mr-4">
                                        <input
                                            type="radio"
                                            name="Residence"
                                            value="male"
                                            className="mr-1"
                                        />
                                        Residence
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="Non Residence"
                                            value="female"
                                            className="mr-1"
                                        />
                                        Non Residence
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Nationality
                                </label>
                                <input
                                    type="tel"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter Nationality"
                                />
                            </div>
                            <div className="mb">
                                <label htmlFor="tel" className="block mb-1 font-medium">
                                    Date of Birth
                                </label>
                                <input
                                    type="text"
                                    id="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter your Birth"
                                />
                            </div>
                        </div>
                        {/* Other fields go here */}
                        <div className="flex justify-center mb-6">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="bg-gray-200 shadow-md mt-5 mb-8">
                <p className='font-mono text-2xl'>Declaration : It is hereby declared that all the above mentioned information in customer account information form are true & valid.
                </p>
                <div className="max-w-7xl px-4 py-2">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Signature With Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>First Account Holder</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Second Account Holder</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Officer/Manager/Branch In-charge</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NomineForm;