import Card from "../components/card";
import friends from "../../../public/images/AboutUs.jpg";
import bgImg from "../../../public/images/bgImg.jpeg";
import getInvolved from "../../../public/images/GetInvoled.jpg";

const Page = () => {
  // Data object for the card
  const data = [
    {
      id: 1,
      title: "Get Involved",
      description: "Find your passion in building God's Kingdom on earth.",
      imageUrl: getInvolved,
      linkUrl : "../getInvolved"
    },
    {
      id: 2,
      title: "About Us",
      description: "Learn more about Tinsae Youth. ",
      imageUrl: friends,
      linkUrl : "../aboutus"
    },
    {
      id: 3,
      title: "Membership Form",
      description: "Join our family. ",
      imageUrl: bgImg,
      linkUrl: "../membership"
    },
  ];

  return (
    <div className="flex bg-[#1d1d1d] gap-8 justify-center flex-col sm:flex-row mt-50 mb-50 bg-[#121211] "> {/* Add mt-50 and mb-50 here */}
      {data.map((item) => (
        <Card
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

