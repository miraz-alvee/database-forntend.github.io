import React from 'react';

const AccountHolder = () => {
    return (
        <>
            <div className='mt-5 ml-44 mr-44'>
                <h2 className='mt-5 text-3xl font-medium text-center'>Corporate Member</h2>

                <p className='font-bold text-center'>haka Stock Exchange Limited-3.1/132/98-023, Chittagong Stock Exchange </p>
                <div className="bg-green-200 shadow-md mt-5">
                    <div className="max-w-7xl mx-auto px-4 py-2">
                        <h2 className='font-medium text-center'>CUSTOMER ACCOUNT INFORMATION FORM</h2>
                    </div>
                </div>
                <div className="bg-gray-200 shadow-md mt-5">
                    <div className="max-w-7xl px-4 py-2">
                        <h2 className='font-bold text-3xl'>First Account Holder</h2>
                        <form>
                            <div className="mb-4 mt-4">
                                <label htmlFor="name" className="block mb-1 font-medium">
                                    Name of the Customer
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="fatherName" className="block mb-1 font-medium">
                                    Father's/Husband's Name
                                </label>
                                <input
                                    type="text"
                                    id="fatherName"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter father's/husband's name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="motherName" className="block mb-1 font-medium">
                                    Mother's Name
                                </label>
                                <input
                                    type="text"
                                    id="motherName"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter mother's name"
                                />
                            </div>

                            <div className='flex justify-around'>
                                <div className="mb-4">
                                    <label htmlFor="dob" className="block mb-1 font-medium">
                                        Date of Birth
                                    </label>
                                    <input
                                        type="date"
                                        id="dob"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1 font-medium">Sex</label>
                                    <div>
                                        <label className="inline-flex items-center mr-4">
                                            <input
                                                type="radio"
                                                name="sex"
                                                value="male"
                                                className="mr-1"
                                            />
                                            Male
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                name="sex"
                                                value="female"
                                                className="mr-1"
                                            />
                                            Female
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="nationality" className="block mb-1 font-medium">
                                        Nationality
                                    </label>
                                    <input
                                        type="text"
                                        id="nationality"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter nationality"
                                    />
                                </div>
                            </div>
                            <div className='flex justify-around mt-5'>
                                <div className="mb-4">
                                    <label htmlFor="mobile" className="block mb-1 font-medium">
                                        Mobile
                                    </label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter mobile number"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="tel" className="block mb-1 font-medium">
                                        Tel #
                                    </label>
                                    <input
                                        type="tel"
                                        id="tel"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter telephone number"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="permanentAddress" className="block mb-1 font-medium">
                                    Permanent Address
                                </label>
                                <textarea
                                    id="permanentAddress"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter permanent address"
                                    rows="3"
                                />
                            </div>
                            <div class="flex justify-around">
                                <div className="mb-4">
                                    <label htmlFor="email" className="block mb-1 font-medium">
                                        Tel
                                    </label>
                                    <input
                                        type="tel"
                                        id="tel"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter Telephone"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block mb-1 font-medium">
                                        E-mail ID
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter e-mail ID"
                                    />
                                </div>
                            </div>
                            <div class="flex justify-around">
                                <div className="mb-4">
                                    <label htmlFor="occupation" className="block mb-1 font-medium">
                                        Occupation
                                    </label>
                                    <input
                                        type="text"
                                        id="occupation"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter occupation"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="eTin" className="block mb-1 font-medium">
                                        E-Tin #
                                    </label>
                                    <input
                                        type="text"
                                        id="eTin"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter E-Tin number"
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
                <div className="bg-gray-200 shadow-md mt-5">
                    <div className="max-w-7xl px-4 py-2">
                        <h2 className='font-bold text-3xl'>Joint Account Holder</h2>
                        <form>
                            <div className="mb-4 mt-4">
                                <label htmlFor="name" className="block mb-1 font-medium">
                                    Name of Joint Account Holder
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="fatherName" className="block mb-1 font-medium">
                                    Father's/Husband's Name
                                </label>
                                <input
                                    type="text"
                                    id="fatherName"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter father's/husband's name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="motherName" className="block mb-1 font-medium">
                                    Mother's Name
                                </label>
                                <input
                                    type="text"
                                    id="motherName"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter mother's name"
                                />
                            </div>

                            <div className='flex justify-around'>
                                <div className="mb-4">
                                    <label htmlFor="dob" className="block mb-1 font-medium">
                                        Date of Birth
                                    </label>
                                    <input
                                        type="date"
                                        id="dob"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1 font-medium">Sex</label>
                                    <div>
                                        <label className="inline-flex items-center mr-4">
                                            <input
                                                type="radio"
                                                name="sex"
                                                value="male"
                                                className="mr-1"
                                            />
                                            Male
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                name="sex"
                                                value="female"
                                                className="mr-1"
                                            />
                                            Female
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="nationality" className="block mb-1 font-medium">
                                        Nationality
                                    </label>
                                    <input
                                        type="text"
                                        id="nationality"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter nationality"
                                    />
                                </div>
                            </div>
                            <div className='flex justify-around mt-5'>
                                <div className="mb-4">
                                    <label htmlFor="mobile" className="block mb-1 font-medium">
                                        Mobile
                                    </label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter mobile number"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="tel" className="block mb-1 font-medium">
                                        Tel #
                                    </label>
                                    <input
                                        type="tel"
                                        id="tel"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter telephone number"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="permanentAddress" className="block mb-1 font-medium">
                                    Permanent Address
                                </label>
                                <textarea
                                    id="permanentAddress"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter permanent address"
                                    rows="3"
                                />
                            </div>
                            <div class="flex justify-around">
                                <div className="mb-4">
                                    <label htmlFor="email" className="block mb-1 font-medium">
                                        Tel
                                    </label>
                                    <input
                                        type="tel"
                                        id="tel"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter Telephone"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block mb-1 font-medium">
                                        E-mail ID
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter e-mail ID"
                                    />
                                </div>
                            </div>
                            <div class="flex justify-around">
                                <div className="mb-4">
                                    <label htmlFor="occupation" className="block mb-1 font-medium">
                                        Occupation
                                    </label>
                                    <input
                                        type="text"
                                        id="occupation"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter occupation"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="eTin" className="block mb-1 font-medium">
                                        E-Tin #
                                    </label>
                                    <input
                                        type="text"
                                        id="eTin"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter E-Tin number"
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
                <div className="bg-gray-200 shadow-md mt-5">
                    <div className="max-w-7xl px-4 py-2">
                        <h2 className='font-bold text-3xl'>Authorized Person Information</h2>
                        <form>
                            <div className="mb-4 mt-4">
                                <label htmlFor="name" className="block mb-1 font-medium">
                                    Name of Authorized Person Information
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="fatherName" className="block mb-1 font-medium">
                                    Father's/Husband's Name
                                </label>
                                <input
                                    type="text"
                                    id="fatherName"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter father's/husband's name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="motherName" className="block mb-1 font-medium">
                                    Mother's Name
                                </label>
                                <input
                                    type="text"
                                    id="motherName"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter mother's name"
                                />
                            </div>

                            <div className='flex justify-around'>
                                <div className="mb-4">
                                    <label htmlFor="dob" className="block mb-1 font-medium">
                                        Date of Birth
                                    </label>
                                    <input
                                        type="date"
                                        id="dob"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1 font-medium">Sex</label>
                                    <div>
                                        <label className="inline-flex items-center mr-4">
                                            <input
                                                type="radio"
                                                name="sex"
                                                value="male"
                                                className="mr-1"
                                            />
                                            Male
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                name="sex"
                                                value="female"
                                                className="mr-1"
                                            />
                                            Female
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="nationality" className="block mb-1 font-medium">
                                        Nationality
                                    </label>
                                    <input
                                        type="text"
                                        id="nationality"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter nationality"
                                    />
                                </div>
                            </div>
                            <div className='flex justify-around mt-5'>
                                <div className="mb-4">
                                    <label htmlFor="mobile" className="block mb-1 font-medium">
                                        Mobile
                                    </label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter mobile number"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="tel" className="block mb-1 font-medium">
                                        Tel #
                                    </label>
                                    <input
                                        type="tel"
                                        id="tel"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter telephone number"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="permanentAddress" className="block mb-1 font-medium">
                                    Permanent Address
                                </label>
                                <textarea
                                    id="permanentAddress"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Enter permanent address"
                                    rows="3"
                                />
                            </div>
                            <div class="flex justify-around">
                                <div className="mb-4">
                                    <label htmlFor="email" className="block mb-1 font-medium">
                                        Tel
                                    </label>
                                    <input
                                        type="tel"
                                        id="tel"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter Telephone"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block mb-1 font-medium">
                                        E-mail ID
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter e-mail ID"
                                    />
                                </div>
                            </div>
                            <div class="flex justify-around">
                                <div className="mb-4">
                                    <label htmlFor="occupation" className="block mb-1 font-medium">
                                        Occupation
                                    </label>
                                    <input
                                        type="text"
                                        id="occupation"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter occupation"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="eTin" className="block mb-1 font-medium">
                                        E-Tin #
                                    </label>
                                    <input
                                        type="text"
                                        id="eTin"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Enter E-Tin number"
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
                <div className="bg-gray-200 shadow-md mt-5">
                    <div className="max-w-7xl px-4 py-2">
                        <form>
                            <div className="mb-4 mt-4">
                                <label htmlFor="name" className="block mb-1 font-medium">
                                    Bank Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Bank name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="fatherName" className="block mb-1 font-medium">
                                    Branch Name
                                </label>
                                <input
                                    type="text"
                                    id="fatherName"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Branch name"
                                />
                            </div>

                            <div className='flex justify-around mt-5'>
                                <div className="mb-4">
                                    <label htmlFor="mobile" className="block mb-1 font-medium">
                                        Account Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Account number"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="tel" className="block mb-1 font-medium">
                                        Routing Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="tel"
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                                        placeholder="Routing number"
                                    />
                                </div>
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
        </>
    );
};

export default AccountHolder;