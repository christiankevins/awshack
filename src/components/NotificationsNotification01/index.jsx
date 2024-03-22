import React from "react";
import { Img, Text, Heading } from "./..";

export default function NotificationsNotification01({
  dotOne,
  avatarThree = "images/defaultNoData.png",
  username = "Gunther Ackner",
  time = "4min",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center items-center w-[60%]">
        {!!dotOne ? <div className="h-[8px] w-[8px] bg-red-A200 rounded-[50%]" /> : null}
        <Img src={avatarThree} alt="avatar_three" className="w-[28px] md:h-auto ml-2.5 object-cover rounded-[10px]" />
        <Heading as="h1" className="ml-2.5 !text-white-A700">
          {username}
        </Heading>
        <Text size="s" as="p" className="ml-1 !text-white-A700">
          {time}
        </Text>
      </div>
      <Img src="images/defaultNoData.png" alt="photo_one" className="w-[49px] md:h-auto object-cover rounded-lg" />
    </div>
  );
}
