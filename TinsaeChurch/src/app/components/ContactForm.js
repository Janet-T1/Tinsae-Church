import React from 'react';

const ContactForm = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-[#2b2b2b]">
            <div className="w-full md:w-3/4 lg:w-2/3 bg-[#121211] p-10 mt-10">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">Contact Us</h1>
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
                        type="email"
                        placeholder="Email"
                        className="p-2 border bg-gray-100 text-black input-placeholder"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="p-2 border bg-gray-100 text-black input-placeholder"
                    />
                    <textarea
                        placeholder="Message"
                        className="p-2 border bg-gray-100 text-black h-32 resize-none input-placeholder"
                    ></textarea>
                    <button
                        type="submit"
                        className="p-2 bg-red-700 text-white font-semibold rounded hover:bg-red-800 transition-colors"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;



