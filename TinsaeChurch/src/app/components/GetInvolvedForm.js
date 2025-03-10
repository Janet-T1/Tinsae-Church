'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

const GetInvolvedForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("https://formspree.io/f/xaneyqdl", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Your involvement request has been submitted!");
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
        <div className="w-screen flex items-center justify-center bg-[#2b2b2b]">
            <div className="md:w-3/4 lg:w-2/3 bg-[#121211] p-12 mt-24 mb-12">
                <h1 className="text-5xl font-bold mb-6 text-white">Find Where You Belong</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input {...register("firstName", { required: "First Name is required" })} type="text" placeholder="First Name" className="p-2 border bg-gray-100 text-black flex-1 input-placeholder" />
                        {errors.firstName && <p className="text-red-600">{errors.firstName.message}</p>}
                        <input {...register("lastName", { required: "Last Name is required" })} type="text" placeholder="Last Name" className="p-2 border bg-gray-100 text-black flex-1 input-placeholder" />
                        {errors.lastName && <p className="text-red-600">{errors.lastName.message}</p>}
                    </div>
                    <input {...register("phoneNumber", { required: "Phone Number is required", pattern: { value: /^[0-9]{10,15}$/, message: "Invalid phone number" } })} type="tel" placeholder="Phone Number" className="p-2 border bg-gray-100 text-black input-placeholder" />
                    {errors.phoneNumber && <p className="text-red-600">{errors.phoneNumber.message}</p>}
                    <input {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: "Invalid email address" } })} type="email" placeholder="Email" className="p-2 border bg-gray-100 text-black input-placeholder" />
                    {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                    <h1 className="font-bold mb-1 mt-3 text-white text-3xl">Pick the Ministry You'd like to Join</h1>
                    <div className="flex flex-col gap-2 text-xl font-semibold">
                        {['Usher', 'Choir', 'Prayer', 'Evangelism', 'Social Media', 'Teaching'].map(ministry => (
                            <label key={ministry} className="text-white flex items-center">
                                <input {...register("ministry", { required: "At least one ministry must be selected" })} type="checkbox" className="mr-2 h-6 w-6 accent-[#2b2b2b]" name="ministry" value={ministry.toLowerCase()} />
                                {ministry}
                            </label>
                        ))}
                    </div>
                    {errors.ministry && <p className="text-red-600">{errors.ministry.message}</p>}
                    <button type="submit" className="p-2 mt-4 bg-red-700 text-white font-semibold rounded hover:bg-red-800 transition-colors text-xl">Get Involved</button>
                </form>
            </div>
        </div>
    );
}

export default GetInvolvedForm;
