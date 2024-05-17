import Card from "../components/card";
import friends from "../../../public/images/friends.jpg";
import events from "../../../public/images/events.jpg";
import getInvolved from "../../../public/images/getinvolved.jpg";

const Page = () => {
  // Data object for the card
  const data = [
    {
      id: 1,
      title: "Get Involved",
      description: "Description for Card 1",
      imageUrl: getInvolved,
    },
    {
      id: 2,
      title: "About US",
      description: "Description for Card 2",
      imageUrl: friends,
    },
    {
      id: 3,
      title: "Events",
      description: "Description for Card 3",
      imageUrl: events,
    },
  ];

  return (
    <div className="flex gap-8 justify-center flex-col sm:flex-row mt-50 mb-50"> {/* Add mt-50 and mb-50 here */}
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default Page;

