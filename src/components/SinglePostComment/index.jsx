import React from "react";
import { Img, Text } from "./..";

export default function SinglePostComment({
  billyGreenOne = "images/defaultNoData.png",
  name = "Billy Green",
  time = "20min ago",
  timezone = "Awesome Edward, remeber that five tips for low cost holidays I sent you?",
  image,
  imageOne,
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-start w-full gap-2.5">
        <div className="flex flex-row justify-between items-center w-full mx-auto md:px-5 max-w-[331px]">
          <div className="flex flex-row justify-start items-center gap-[5px]">
            <Img src={billyGreenOne} alt="billy_green_one" className="w-[28px] md:h-auto object-cover rounded-[10px]" />
            <Text as="p" className="!text-white-A700">
              {name}
            </Text>
          </div>
          <Text size="s" as="p">
            {time}
          </Text>
        </div>
        <Text as="p" className="!text-white-A700 !font-normal !leading-[22px]">
          {timezone}
        </Text>
        <div className="flex flex-row justify-start gap-[15px]">
          {!!image ? <Img src={image} alt="image" className="h-[14px] w-[14px]" /> : null}
          {!!imageOne ? <Img src={imageOne} alt="image_one" className="h-[14px] w-[14px]" /> : null}
        </div>
      </div>
    </div>
  );
}
