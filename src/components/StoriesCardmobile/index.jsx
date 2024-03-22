import React from "react";
import { Heading, Img } from "./..";

export default function StoriesCardmobile({
  imageOne = "images/defaultNoData.png",
  edwardFordOne = "images/defaultNoData.png",
  username = "Edward Ford",
  ...props
}) {
  return (
    <div {...props}>
      <Img
        src={imageOne}
        alt="image_one"
        className="justify-center h-[380px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-lg"
      />
      <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-10 m-auto sm:p-5 bg-gradient absolute rounded-lg">
        <div className="flex flex-col items-center justify-start w-[62%] md:w-full mt-[195px] gap-4">
          <Img
            src={edwardFordOne}
            alt="edward_ford_one"
            className="w-full md:h-auto object-cover max-w-[68px] rounded-[24px]"
          />
          <Heading size="lg" as="h1" className="!text-white-A700 !font-sfprodisplay text-center">
            {username}
          </Heading>
        </div>
      </div>
    </div>
  );
}
