import React from "react";
import { Button, Img, Text, Heading } from "./..";

export default function EventsCarddekstop2({
  image = "images/img_image_140x250.png",
  title = "Dua Lipa Live Concert",
  date = "December 12, 2019",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full gap-2.5">
        <Img src={image} alt="image" className="w-full md:h-auto sm:w-full object-cover rounded-lg" />
        <div className="flex flex-row justify-start items-center w-full gap-3 md:px-5 max-w-[240px]">
          <div className="flex flex-col items-start justify-center w-[84%] gap-[9px]">
            <Heading as="h1" className="mt-px !text-white-A700">
              {title}
            </Heading>
            <Text as="p" className="!font-normal">
              {date}
            </Text>
          </div>
          <Button color="white_A700_33" className="w-[28px] rounded-lg">
            <Img src="images/img_button.svg" />
          </Button>
        </div>
      </div>
    </div>
  );
}
