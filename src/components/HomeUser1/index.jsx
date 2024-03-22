import React from "react";
import { Button, Img, Text } from "./..";

export default function HomeUser1({ one, username = "MadeInAmerica", ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start items-center w-[50%] gap-2.5">
        <div className="flex flex-col items-center justify-start h-[38px] w-[38px]">
          {!!one ? (
            <Button
              color="green_400"
              size="lg"
              shape="round"
              className="font-sfprodisplay font-bold min-w-[38px] sm:min-w-full"
            >
              {one}
            </Button>
          ) : null}
        </div>
        <Text as="p" className="!text-white-A700">
          {username}
        </Text>
      </div>
      <Button color="white_A700_33" className="w-[28px] rounded-lg">
        <Img src="images/img_button.svg" />
      </Button>
    </div>
  );
}
