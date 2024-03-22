import React from "react";
import { Text, Button, Img } from "./..";

export default function GroupMessageMessage({
  closeFriends = "images/defaultNoData.png",
  closefriends1 = "images/defaultNoData.png",
  nine = "+9",
  username = "Close Friends",
  message = "Thank you for sharing",
  time = "3:03pm",
  group120,
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-[85%]">
        <div className="flex flex-row justify-start items-start w-[71%] gap-[15px]">
          <div className="flex flex-col items-center justify-start h-[51px] w-[51px]">
            <div className="flex flex-row justify-center w-full">
              <Img src={closeFriends} alt="close_friends" className="w-[28px] md:h-auto object-cover rounded-lg" />
              <Img
                src={closefriends1}
                alt="close_friends"
                className="w-[28px] md:h-auto ml-[-5px] object-cover rounded-lg"
              />
            </div>
            <Button
              color="gray_900"
              size="xs"
              className="mt-[-5px] font-sfprodisplay font-bold min-w-[28px] rounded-md sm:min-w-full"
            >
              {nine}
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start w-[69%] mt-1 gap-[5px]">
            <Text as="p" className="!text-gray-900">
              {username}
            </Text>
            <Text as="p" className="!font-normal">
              {message}
            </Text>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center w-[14%] mt-[3px] gap-[3px]">
        <Text size="s" as="p" className="mt-[3px] text-right">
          {time}
        </Text>
        <div className="flex flex-col items-center justify-start h-[18px] w-[18px]">
          {!!group120 ? (
            <Text
              size="xs"
              as="p"
              className="flex justify-center items-center h-[18px] w-[18px] !text-white-A700 !font-sfprodisplay text-center bg-red-A200 rounded-md"
            >
              {group120}
            </Text>
          ) : null}
        </div>
      </div>
    </div>
  );
}
