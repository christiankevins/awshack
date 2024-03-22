import React from "react";
import { Img, Text, Heading } from "./..";

export default function GroupMessageMessage09({ usernameThree = "Gunther Ackner", time = "4min", ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start items-start w-full gap-[15px]">
        <Img
          src="images/img_avatar_48x48.png"
          alt="avatar_eleven"
          className="w-[38px] md:h-auto object-cover rounded-[12px]"
        />
        <div className="flex flex-col items-start justify-start w-[84%] gap-2.5">
          <div className="flex flex-row justify-start items-center gap-px">
            <Heading as="h1">{usernameThree}</Heading>
            <Text size="s" as="p">
              {time}
            </Text>
          </div>
          <div className="flex flex-row justify-start gap-2.5">
            <Img
              src="images/img_image_75x80.png"
              alt="phototwo_one"
              className="w-[80px] md:h-auto object-cover rounded-lg"
            />
            <Img
              src="images/defaultNoData.png"
              alt="photothree_one"
              className="w-[80px] md:h-auto object-cover rounded-lg"
            />
            <Img
              src="images/defaultNoData.png"
              alt="photofive_one"
              className="w-[80px] md:h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
