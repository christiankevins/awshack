import React from "react";
import { Button, Img, Text, Heading } from "./..";

export default function HomeUser({
  cammyHedling = "images/img_avatar.png",
  username = "Cammy Hedling",
  subtitle = "Los Angeles, CA",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start items-center w-[52%] gap-2.5">
        <Img src={cammyHedling} alt="cammy_hedling" className="w-[38px] md:h-auto object-cover rounded-[12px]" />
        <div className="flex flex-col items-start justify-start w-[70%] gap-[3px]">
          <Heading as="h1" className="!text-white-A700">
            {username}
          </Heading>
          <Text size="s" as="p" className="!text-white-A700">
            {subtitle}
          </Text>
        </div>
      </div>
      <Button className="w-[28px] rounded-lg">
        <Img src="images/img_add_user.svg" />
      </Button>
    </div>
  );
}
