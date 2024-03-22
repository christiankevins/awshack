import React from "react";
import { Heading } from "./..";

export default function StoriesNotifications({ abOne, ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start h-[48px] w-[48px]">
        <div className="h-[48px] w-[48px] bg-light_blue-200 relative rounded-[12px]">
          <Heading
            size="xl"
            as="h1"
            className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-white-A700 text-center absolute"
          >
            1
          </Heading>
          <div className="flex flex-col items-center justify-center h-full w-full left-0 bottom-0 right-0 top-0 p-2.5 m-auto bg-light_blue-200 absolute rounded-[12px]">
            {!!abOne ? (
              <Heading size="xl" as="h2" className="!text-white-A700 !font-sfprodisplay text-center !text-[22.32px]">
                {abOne}
              </Heading>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
