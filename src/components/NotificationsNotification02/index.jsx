import React from "react";
import { Text, Img, Button, Heading } from "./..";

export default function NotificationsNotification02({
  usernameOne = "Marriet Miles",
  time = "4min",
  copyTwo = "sent you a friend request",
  add = "Add",
  labelThree = "Ignore",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-start w-full gap-[21px]">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row justify-start items-start w-[67%] gap-2.5">
            <div className="h-[8px] w-[8px] mt-2.5 bg-red-A200 rounded-[50%]" />
            <Img
              src="images/defaultNoData.png"
              alt="avatar_five"
              className="w-[28px] md:h-auto object-cover rounded-[10px]"
            />
            <div className="flex flex-col items-start justify-start w-[75%] mt-[5px] gap-2">
              <div className="flex flex-row justify-start items-center gap-[3px]">
                <Heading as="h1" className="!text-white-A700">
                  {usernameOne}
                </Heading>
                <Text size="s" as="p" className="!text-white-A700">
                  {time}
                </Text>
              </div>
              <Text as="p" className="!text-white-A700 !font-normal">
                {copyTwo}
              </Text>
            </div>
          </div>
          <Button color="white_A700_33" size="xl" shape="round" className="w-[38px]">
            <Img src="images/img_add_user_white_a700.svg" />
          </Button>
        </div>
        <div className="flex flex-row justify-start w-[48%] md:w-full ml-14 gap-[15px] md:ml-5">
          <div className="flex flex-row justify-start w-[42%]">
            <Button
              color="green_400"
              size="md"
              leftIcon={<Img src="images/img_button.svg" alt="Icon/Check" />}
              className="w-full gap-1 font-medium rounded"
            >
              {add}
            </Button>
          </div>
          <div className="flex flex-row justify-start w-[50%]">
            <div className="flex flex-row justify-end items-center w-full p-1 bg-gray-900 rounded">
              <Img src="images/defaultNoData.png" alt="iconclose_one" className="h-[14px] w-[14px]" />
              <Text as="p" className="mt-[3px] ml-1 !text-white-A700">
                {labelThree}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
