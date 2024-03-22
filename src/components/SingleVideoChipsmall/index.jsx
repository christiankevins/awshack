import React from "react";
import { Text } from "./..";

export default function SingleVideoChipsmall({ labelTwo, ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-full">
        <div className="h-[20px] w-full sm:w-full bg-gray-100 relative rounded">
          <Text
            size="s"
            as="p"
            className="w-max ml-[7px] left-[21%] bottom-0 top-0 my-auto !text-white-A700 !font-sfprodisplay absolute"
          >
            Car
          </Text>
          <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-0.5 m-auto bg-gray-100 absolute rounded">
            {!!labelTwo ? (
              <Text size="s" as="p" className="ml-[7px] mr-1.5 text-center">
                {labelTwo}
              </Text>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
