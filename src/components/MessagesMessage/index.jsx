import React from "react";
import { Heading, Text, Img } from "./..";

export default function MessagesMessage({
  billyGreenOne = "images/defaultNoData.png",
  username = "Billy Green",
  message = "Thank you for sharing",
  time = "3:03pm",
  group233,
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start items-center w-[60%] gap-[15px]">
        <div className="flex flex-col items-center justify-start h-[48px] w-[48px]">
          <div className="flex flex-col items-end justify-start h-[48px] w-[48px]">
            <div className="flex flex-col items-center justify-start h-[12px] w-[12px] pb-0.5 z-[1] bg-gray-100 rounded-[50%]">
              <div className="h-[10px] w-[10px] bg-green-400 rounded-[50%]" />
            </div>
            <Img
              src={billyGreenOne}
              alt="billy_green_one"
              className="w-[48px] md:h-auto mt-[-12px] object-cover rounded-[12px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[70%] gap-1">
          <Text as="p" className="!text-gray-900">
            {username}
          </Text>
          <Text as="p" className="!font-normal">
            {message}
          </Text>
        </div>
      </div>
      <div className="flex flex-col items-end justify-start w-[25%] mt-[3px] pt-[3px] gap-[3px]">
        <Text size="s" as="p" className="mr-px text-right">
          {time}
        </Text>
        <div className="flex flex-col items-center justify-start h-[18px] w-[18px]">
          {!!group233 ? (
            <Heading
              size="xs"
              as="h1"
              className="flex justify-center items-center h-[18px] w-[18px] !text-white-A700 tracking-[1.00px] !font-sfprodisplay uppercase text-center bg-red-A200 rounded-md"
            >
              {group233}
            </Heading>
          ) : null}
        </div>
      </div>
    </div>
  );
}
