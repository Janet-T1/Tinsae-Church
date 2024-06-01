import React from 'react';

const leadersData = [
    { name: 'Asli Awtenna', image: '/leadersPic/asliPic.jpg' },
    { name: 'Janet Tsegazeab', image: '/leadersPic/janetPic.jpg' },
    { name: 'Elisham Solomon', image: '/leadersPic/eliPic.jpg' },
];

const Leaders = () => {
    return (
        <div className="p-6 bg-[#000000] w-screen flex flex-col items-center">
            <div className='w-2/3'>
                <h1 className="text-white text-5xl font-bold mb-8 text-left">Our Youth Leaders</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-bold'>
                    {leadersData.map((leader, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="overflow-hidden  h-96 w-full">
                                <img src={leader.image} alt={leader.name} className="object-cover h-full w-full" />
                            </div>
                            <p className="text-white mt-4">{leader.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Leaders;