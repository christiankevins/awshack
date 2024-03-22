import React from "react";
import { Button, Img, Text, Heading } from "..";

export default function StudentCarddekstop({
  imageOne = "images/csc209.png",
  ten = "22",
  weekday = "Friday",
  decembercounter = "March, 2024",
  title = "CSC209",
  time = "9:00am - 10:00am, BA201",
  interested = "Interested",
  nine = "+9",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-center w-full p-[29px] sm:p-5 bg-white-A700 rounded-[12px]">
        <div className="flex flex-col items-center justify-start w-full md:px-5 max-w-[321px]">
          <Img src={imageOne} alt="image_one" className="w-full md:h-auto sm:w-full object-cover rounded-lg" />
          <div className="flex flex-row justify-between items-center w-full mt-5">
            <div className="flex flex-row justify-start items-center w-[45%] gap-2.5">
              <div className="flex flex-col items-center justify-start h-[48px] w-[48px]">
                <Button
                  color="gray_500_33"
                  size="4xl"
                  variant="outline"
                  className="font-bold min-w-[48px] rounded-[15px] sm:min-w-full"
                >
                  {ten}
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start w-[60%] gap-[3px]">
                <Heading as="h1">{weekday}</Heading>
                <Text size="s" as="p">
                  {decembercounter}
                </Text>
              </div>
            </div>
            <Img src="images/img_options_gray_500.svg" alt="monday_one" className="h-[38px] w-[38px]" />
          </div>
          <div className="flex flex-col items-start justify-center w-full mt-5 gap-3">
            <Heading size="xl" as="h2" className="mt-[3px]">
              {title}
            </Heading>
            <Text as="p">{time}</Text>
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-[30px]">
            <div className="flex flex-row justify-center">
              <Button
                color="green_400"
                size="md"
                leftIcon={<Img src="images/img_button.svg" alt="Icon/Check" />}
                className="w-full gap-[3px] font-medium rounded"
              >
                {interested}
              </Button>
            </div>
            <div className="flex flex-row justify-center w-[24%]">
              <div className="flex flex-row justify-center w-full">
                <Img
                  src="images/img_avatar_17.png"
                  alt="image_two"
                  className="w-[28px] md:h-auto object-cover rounded-lg"
                />
                <Img
                  src="images/img_avatar_17.png"
                  alt="image_three"
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
  );
}
