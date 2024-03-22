import React from "react";
import { Button, Img, Text, Heading } from "./..";

export default function EventsCarddekstop1({
  ten = "22",
  weekday = "Friday",
  decembercounter = "March, 2024",
  title = "Hack the Student Life ",
  time = "Starts at 8:00am",
  interested = "Interested",
  nine = "+9",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-center w-full p-[29px] sm:p-5 bg-white-A700 rounded-[12px]">
        <div className="flex flex-col items-start justify-start w-full md:px-5 max-w-[321px]">
          <Img
            src="images/hack.jpeg"
            alt="image_one"
            className="w-full md:h-[180px] ml-px md:ml-0 object-cover rounded-lg"
          />
          <div className="flex flex-row justify-between items-start w-full mt-5">
            <div className="flex flex-row justify-start items-center w-[45%] pb-[3px] gap-2.5">
              <div className="flex flex-col items-center justify-start h-[48px] w-[48px]">
                <Button
                  color="gray_500"
                  size="4xl"
                  variant="outline"
                  className="font-bold min-w-[48px] rounded-[15px] sm:min-w-full"
                >
                  {ten}
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-[60%] gap-[3px]">
                <Heading as="h1">{weekday}</Heading>
                <Text size="s" as="p">
                  {decembercounter}
                </Text>
              </div>
            </div>
            <Img src="images/img_options_gray_500.svg" alt="options_one" className="h-[38px] w-[38px] mt-[5px]" />
          </div>
          <Heading size="xl" as="h2" className="mt-5 ml-px md:ml-0 !leading-[30px]">
            {title}
          </Heading>
          <Text as="p" className="mt-3 ml-px md:ml-0 !font-sfprodisplay">
            {time}
          </Text>
          <div className="flex flex-row justify-between items-center w-full mt-[25px]">
            <Button
              color="gray_500_33"
              size="md"
              variant="outline"
              leftIcon={<Img src="images/img_icon_check.svg" alt="Icon/Check" />}
              className="gap-[3px] font-medium min-w-[101px] rounded"
            >
              {interested}
            </Button>
            <div className="flex flex-row justify-center w-[24%]">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-center w-full">
                  <Img
                    src="images/img_avatar_17.png"
                    alt="avatar_one"
                    className="w-[28px] md:h-auto object-cover rounded-lg"
                  />
                  <Img
                    src="images/img_avatar_17.png"
                    alt="avatar_three"
                    className="w-[28px] md:h-auto ml-[-5px] object-cover rounded-lg"
                  />
                  <div className="flex flex-col items-center justify-start h-[28px] w-[28px] ml-[-5px]">
                    <Button
                      color="gray_900"
                      size="xs"
                      className="font-sfprodisplay font-bold min-w-[28px] rounded-lg sm:min-w-full"
                    >
                      {nine}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
