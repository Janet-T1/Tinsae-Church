import React from 'react';

const GetInvolvedForm = () => {
    return (
        <div className="w-screen  flex items-center justify-center bg-[#2b2b2b] ">
            <div className="md:w-3/4 lg:w-2/3 bg-[#121211] p-12 mt-24 mb-12">
                <h1 className="text-5xl font-bold mb-6  text-white">Find Where You Belong</h1>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="p-2 border bg-gray-100 text-black flex-1 input-placeholder"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="p-2 border bg-gray-100 text-black flex-1 input-placeholder"
                        />
                    </div>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="p-2 border bg-gray-100 text-black input-placeholder"
                    />

                    <h1 className=" font-bold mb-1 mt-3 text-white text-3xl font-bold">Pick the Ministry You'd like to Join</h1>
                    <div className="flex flex-col gap-2 text-xl font-semibold ">
                        {['Usher', 'Choir', 'Prayer', 'Evangelism', 'Social Media', 'Teaching'].map(ministry => (
                            <label key={ministry} className="text-white flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2 h-6 w-6 accent-[#2b2b2b]"
                                    name="ministry"
                                    value={ministry.toLowerCase()}
                                />
                                {ministry}
                            </label>
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="p-2 mt-4 bg-red-700 text-white font-semibold rounded hover:bg-red-800 transition-colors text-xl"
                    >
                        Get Involved
                    </button>
                </form>
            </div>
        </div>
    );
}

export default GetInvolvedForm;

