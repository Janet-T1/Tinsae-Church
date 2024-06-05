import React from "react";
import TeachingCard from "../components/TeachingCard";
import romans from "../../../public/teaching/romansPic.png";
import jesusPic from "../../../public/teaching/jesusPic.png";

const Page = () => {
  const data = [
    {
      id: 1,
      title: "Romans Bible Study",
      description: "A Deep Dive Into the Chapters of the Great Gospel Book.",
      imageUrl: romans,
      linkUrl: "https://docs.google.com/document/d/1-UYV_XzOy1FjolGv6tnxnu3a9FM75rQkBHK0MmIJ80k/edit?usp=sharing",
    },
    {
      id: 2,
      title: "Confronting Jesus Series",
      description: "Coming Face to Face with the Hero of the Gospels.",
      imageUrl: jesusPic,
      linkUrl: "https://docs.google.com/presentation/d/1z1KZyAEdLcuiMjRH5Qr-U-_rYqBcHVtY5h5m_S-9i-g/edit?usp=sharing",
    },
  ];

  return (
    <div className=" py-12 flex flex-col items-center">
      <div className="w-3/4 text-white font-bigtext text-6xl font-bold mt-20"> 
        Sunday Teachings 
      </div>

      {data.map((item) => (
        <TeachingCard
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          linkUrl={item.linkUrl}
        />
      ))}
    </div>
  );
};

export default Page;

