import React from "react";
import { Img } from "./..";

export default function SingleVideoVideoplayer1({ imageFive = "images/defaultNoData.png", playbuttonOne, ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full">
        <Img src={imageFive} alt="image_five" className="w-full md:h-auto sm:w-full object-cover rounded-lg" />
        <div className="flex flex-row justify-center w-full mt-[-69px] p-[15px] bg-gray-900 rounded-lg">
          {!!playbuttonOne ? (
            <Img src={playbuttonOne} alt="playbutton_one" className="h-[38px] w-[38px] mt-px mx-[26px] sm:mx-5" />
          ) : null}
        </div>
      </div>
    </div>
  );
}
