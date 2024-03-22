import React from "react";
import { Img } from "./..";

export default function DirectMessageProfile3({ avatarThree = "images/defaultNoData.png", ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start h-[58px] w-[58px]">
        <div className="flex flex-col items-center justify-start h-[58px] w-[58px]">
          <div className="flex flex-col items-end justify-start h-[58px] w-[58px]">
            <Img src="images/defaultNoData.png" alt="status_one" className="h-[15px] w-[15px] z-[1]" />
            <Img
              src={avatarThree}
              alt="avatar_three"
              className="w-[58px] md:h-auto mt-[-15px] object-cover rounded-[16px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
