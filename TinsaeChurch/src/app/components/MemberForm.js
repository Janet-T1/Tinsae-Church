'use client'
import React from 'react';
import { useForm } from 'react-hook-form'

const MemberForm = () => {
    const { register, handleSubmit, reset, formState : {errors }} = useForm(); 
    const onSubmit = data => {
        console.log(data); 
        reset(); 
    }
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-[#2b2b2b]">
            <div className="w-full md:w-3/4 lg:w-2/3 bg-[#121211] p-12 mt-10">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">Join Our Family</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            {...register("firstName", { required: "First Name is required" })}
                            type="text"
                            placeholder="First Name"
                            className="p-2 border bg-gray-100 text-black flex-1 input-placeholder"
                        />
                        {errors.firstName && <div className="text-red-600">{errors.firstName.message}</div>}
                        <input
                            {...register("lastName", { required: "Last Name is required" })}
                            type="text"
                            placeholder="Last Name"
                            className="p-2 border bg-gray-100 text-black flex-1 input-placeholder"
                        />
                        {errors.lastName && <div className="text-red-600">{errors.lastName.message}</div>}
                    </div>
                    <input
                        {...register("email", { required: "Email is required",
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
                        {...register("birthday", { required: "Birthday is required" })}
                        type="date"
                        placeholder="Birthday"
                        className="p-2 border bg-gray-100 text-black input-placeholder"
                    />
                    {errors.birthday && <div className="text-red-600">{errors.birthday.message}</div>}
                    <input
                        {...register("phoneNumber", {
                            required: "Phone Number is required",
                            pattern: {
                                value: /^[0-9]{10,15}$/,
                                message: "Invalid phone number"
                            }
                        })}
                        type="tel"
                        placeholder="Phone Number"
                        className="p-2 border bg-gray-100 text-black input-placeholder"
                    />
                    {errors.phoneNumber && <p className="text-red-600">{errors.phoneNumber.message}</p>}
                    <button
                        type="submit"
                        className="p-2 bg-red-700 text-white font-semibold rounded hover:bg-red-800 transition-colors text-xl"
                    >
                        Join
                    </button>
                </form>
            </div>
        </div>
    );
}

export default MemberForm;
