import React from "react";
import { Text, Button, Img, Heading } from "./..";

export default function DirectMessageMessage07({
  avatarFive = "images/img_avatar_48x48.png",
  usernameOne = "Anne Carry",
  time = "4min",
  time1 = "0:06",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start items-start w-full gap-[15px]">
        <Img src={avatarFive} alt="avatar_five" className="w-[38px] md:h-auto object-cover rounded-[12px]" />
        <div className="flex flex-col items-start justify-start w-[83%] gap-[9px]">
          <div className="flex flex-row justify-start items-center gap-[5px]">
            <Heading as="h1" className="mt-px">
              {usernameOne}
            </Heading>
            <Text size="s" as="p">
              {time}
            </Text>
          </div>
          <div className="flex flex-row justify-start w-full">
            <div className="flex flex-row justify-evenly items-center w-full py-2.5 bg-gray-100 rounded-[12px]">
              <div className="flex flex-col items-center justify-start h-[38px] w-[38px]">
                <Button color="light_blue_200_33" size="xl" shape="round" className="w-[38px]">
                  <Img src="images/defaultNoData.png" />
                </Button>
              </div>
              <div className="h-[4px] w-[62%] opacity-0.4 bg-gray-500_7e rounded-sm" />
              <Text size="s" as="p" className="text-right">
                {time1}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
