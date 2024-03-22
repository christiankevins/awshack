import React from "react";
import { Img, Text } from "./..";

export default function HomeSeemorebutton({ label = "See more", iconarrowOne, ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center w-full p-1 border-gray-500 border-2 border-solid rounded">
        <div className="flex flex-row justify-center items-center w-full mx-1 md:px-5 max-w-[74px]">
          <Text as="p" className="!text-gray-900">
            {label}
          </Text>
          {!!iconarrowOne ? (
            <Img src={iconarrowOne} alt="iconarrow_one" className="h-[14px] w-[14px] ml-[-3px]" />
          ) : null}
        </div>
      </div>
    </div>
  );
}
