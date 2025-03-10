'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("https://formspree.io/f/maneyqbl", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Message sent successfully!");
                reset();
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error submitting form. Please check the console for details.");
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-[#2b2b2b]">
            <div className="w-full md:w-3/4 lg:w-2/3 bg-[#121211] p-10 mt-10">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">Contact Us</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            {...register("firstName", { required: "First Name is required" })}
                            type="text"
                            placeholder="First Name"
                            className="p-2 border bg-gray-100 text-black flex-1 input-placeholder"
                        />
                        {errors.firstName && <p className="text-red-600">{errors.firstName.message}</p>}
                        <input
                            {...register("lastName", { required: "Last Name is required" })}
                            type="text"
                            placeholder="Last Name"
                            className="p-2 border bg-gray-100 text-black flex-1 input-placeholder"
                        />
                        {errors.lastName && <p className="text-red-600">{errors.lastName.message}</p>}
                    </div>
                    <input
                        {...register("email", { 
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: "Invalid email address"
                            }
                        })}
                        type="email"
                        placeholder="Email"
                        className="p-2 border bg-gray-100 text-black input-placeholder"
                    />
                    {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                    <input
                        {...register("subject", { required: "Subject is required" })}
                        type="text"
                        placeholder="Subject"
                        className="p-2 border bg-gray-100 text-black input-placeholder"
                    />
                    {errors.subject && <p className="text-red-600">{errors.subject.message}</p>}
                    <textarea
                        {...register("message", { required: "Message is required" })}
                        placeholder="Message"
                        className="p-2 border bg-gray-100 text-black h-32 resize-none input-placeholder"
                    ></textarea>
                    {errors.message && <p className="text-red-600">{errors.message.message}</p>}
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
