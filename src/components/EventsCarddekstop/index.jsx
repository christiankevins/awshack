import { Button, Img, Text, Heading } from "./..";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";


export default function EventsCarddekstop({
  // useEffect(() => {
  //   fetch('/events')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => setEventsData(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  eventsData = [{
    name: "Tech Conference",
    description: "A conference discussing the latest advancements in technology.",
    location: "San Francisco",
    full_date: "2024-04-15", //new Date("2024-04-15T09:00:00"),
    month: "February, 2024",
    day: "Wednesday",
    date:15,
    year:2024,
    capacity: 100,
    availableSlot: 80,
    organizer: "Tech Events Inc.",
    tags: ["technology", "conference", "innovation"],
    image:"images/img_image_25.png",
    interested: true
  },{
    name: "Tech Conference",
    description: "A conference discussing the latest advancements in technology.",
    location: "San Francisco",
    full_date: "2024-04-15", //new Date("2024-04-15T09:00:00"),
    month: "February, 2024",
    day: "Wednesday",
    date:15,
    year:2024,
    capacity: 100,
    availableSlot: 80,
    organizer: "Tech Events Inc.",
    tags: ["technology", "conference", "innovation"],
    image:"images/img_image_25.png",
    interested: false
  },{
    name: "Yoga Retreat",
    description: "Join us for a relaxing weekend yoga retreat in the mountains.",
    location: "Aspen",
    full_date: "2024-04-15",
    month: "February, 2024",
    day: "Wednesday",
    date:15,
    year:2024,
    capacity: 20,
    availableSlot: 15,
    organizer: "Serene Yoga Studio",
    tags: ["yoga", "retreat", "wellness"],
    image:"images/img_image_24.png",
    interested: false
  }], // Accepts an array of events data
  ...props
}) { const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    // Change the button color and show a toast message
    setClicked(true);
    toast.success("Registered!");
  };
  return (
    <div {...props} className="flex flex-wrap justify-center gap-4">
      {eventsData.map((event, index) => (
        <div key={index} className="flex flex-col items-center justify-center w-full p-[29px] sm:p-5 bg-white-A700 rounded-[12px] mb-4">
          <div className="flex flex-col items-center justify-start w-full md:px-5 max-w-[321px]">
            <img src={event.image} alt={`image_${index}`} className="w-full md:h-auto sm:w-full object-cover rounded-lg" />
            <div className="flex flex-row justify-between items-center w-full mt-5">
              <div className="flex flex-row justify-start items-center w-[45%] gap-2.5">
                <div className="flex flex-col items-center justify-start h-[48px] w-[48px]">
                <Button
        
                  size="4xl"
                  variant="outline"
                  className="font-bold min-w-[48px] rounded-[15px] sm:min-w-full"
                >
                  {event.date}
                </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-[60%] gap-[3px]">
                  <Heading as="h1">{event.day}</Heading>
                  <Text size="s" as="p">
                    {event.month}
                  </Text>
                </div>
              </div>
              <img src="images/img_options_gray_500.svg" alt={`monday_${index}`} className="h-[38px] w-[38px]" />
            </div>
            <div className="flex flex-col items-start justify-center w-full mt-5 gap-3">
            <Link to={`/singleevent`} className="text-black">
              <Button
                color="gray_900"
                size="xl"
                className="font-bold rounded"
                onClick={() => { /* Handle button click */ }}
              >
                {event.name}
              </Button>
              </Link>
              <Text as="p">{event.full_date}</Text>
            </div>
            <div className="flex flex-row justify-between items-center w-full mt-[30px]">
              <div className="flex flex-row justify-center">
                <Button
                  color={event.interested ? "green_400" : "gray_900"}
                  size="md"
                  leftIcon={event.interested ? <img src="images/img_button.svg" alt="Icon/Check" /> : null}
                  className="w-full gap-[3px] font-medium rounded"
                  onClick={handleClick}
                  disabled={clicked}
                >
                  {event.interested ? "Interested" : "Join"}
                </Button>
                <ToastContainer />
              </div>
              <div className="flex flex-row justify-center w-[24%]">
                <div className="flex flex-row justify-center w-full">
                  <img
                    src={"images/img_avatar_17.png"}
                    alt={`image_two_${index}`}
                    className="w-[28px] md:h-auto object-cover rounded-lg"
                  />
                  <img
                    src={"images/img_avatar_17.png"}
                    alt={`image_three_${index}`}
                    className="w-[28px] md:h-auto ml-[-5px] object-cover rounded-lg"
                  />
                  <div className="flex flex-col items-center justify-start h-[28px] w-[28px] ml-[-5px]">
                    <Button
                      color="gray_900"
                      size="xs"
                      className="font-sfprodisplay font-bold min-w-[28px] rounded-lg sm:min-w-full"
                    >
                      {"+9"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


