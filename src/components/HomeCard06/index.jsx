import React from "react";
import { Img, Text, Heading } from "./..";

export default function HomeCard06({
  nameThree = "Katherine Cole",
  time = "5min ago",
  optionsThree = "images/img_icon_eye.svg",
  imageSeven = "images/img_image_150x290.png",
  title = "The Best Fashion Instagrams of the Week: Céline Dion, Lizzo, and More",
  description = "If you are looking for a break from the cold, take a cue from Lizzo: This week, the singer headed to Disneyland in warm and sunny California.",
  readmore = "Read More",
  iconheartSeven = "images/img_icon_heart_regular.svg",
  labelFour = "326",
  iconcomment = "images/img_icon_comment.svg",
  labelFive = "148",
  labelSix = "Share",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full p-[30px] sm:p-5 bg-white-A700 rounded-[12px]">
        <div className="flex flex-row justify-between items-center w-full md:px-5 max-w-[290px]">
          <div className="flex flex-row justify-start items-center w-[66%] gap-2.5">
            <Img
              src="images/img_image_1.png"
              alt="image_five"
              className="w-[48px] md:h-auto object-cover rounded-[12px]"
            />
            <div className="flex flex-col items-start justify-start w-[70%] gap-[5px]">
              <Heading as="h1">{nameThree}</Heading>
              <Text size="s" as="p">
                {time}
              </Text>
            </div>
          </div>
          <Img src={optionsThree} alt="options_three" className="h-[38px] w-[38px]" />
        </div>
        <div className="flex flex-col items-start justify-start w-full mt-[30px] pb-0.5 md:px-5 max-w-[290px]">
          <Img src={imageSeven} alt="image_seven" className="w-full md:h-[150px] object-cover rounded-lg" />
          <div className="flex flex-col items-center justify-start mt-5 gap-[15px]">
            <Heading size="lg" as="h2" className="!leading-[22px]">
              {title}
            </Heading>
            <Text as="p" className="!leading-5">
              {description}
            </Text>
          </div>
          <Heading size="s" as="h3" className="mt-[11px] !text-indigo-A200 tracking-[1.00px] uppercase">
            {readmore}
          </Heading>
        </div>
        <div className="flex flex-row justify-between w-full mt-4 md:px-5 max-w-[290px]">
          <div className="flex flex-row justify-start w-[48%] gap-2.5">
            <div className="flex flex-row justify-start items-center w-[48%] p-1.5">
              <Img src={iconheartSeven} alt="iconheart_seven" className="h-[14px] w-[14px]" />
              <Text as="p" className="ml-[5px] !text-gray-900">
                {labelFour}
              </Text>
            </div>
            <div className="flex flex-row justify-start items-center w-[46%] gap-1.5 p-[5px]">
              <Img src={iconcomment} alt="iconcomment" className="h-[14px] w-[14px]" />
              <Text as="p" className="!text-gray-900">
                {labelFive}
              </Text>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center p-1.5">
            <Text as="p" className="ml-[3px] !text-gray-900">
              {labelSix}
            </Text>
            <Img src="images/img_icon_share.svg" alt="iconshare_three" className="h-[14px] w-[14px] ml-px mr-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
