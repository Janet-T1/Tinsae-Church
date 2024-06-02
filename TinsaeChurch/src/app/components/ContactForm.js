import React from 'react';

const ContactForm = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-[#2b2b2b]">
            <div className="w-3/4 md:w-2/3 lg:w-1/2 bg-[#1c1c1c] p-10 mt-10">
                <h1 className="text-3xl font-bold mb-6 text-center text-white ">Contact Us</h1>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="p-2 border flex-1"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="p-2 border flex-1"
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-2 border"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="p-2 border"
                    />
                    <textarea
                        placeholder="Message"
                        className="p-2 border h-32 resize-none"
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

