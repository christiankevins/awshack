import React from "react";
import { Img, Text, Heading } from "./..";

export default function HomeCarddekstop3({
  nameFour = "Dustin Houston",
  time = "5min ago",
  optionsFive = "images/img_icon_eye.svg",
  copyOne = "Whether its a driving tour 😂",
  iconcameraOne = "images/img_icon_camera.svg",
  labelSeven = "17",
  iconheartNine = "images/img_icon_heart_regular.svg",
  labelEight = "326",
  iconcomment = "images/img_icon_comment.svg",
  labelNine = "148",
  labelTen = "Share",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-center w-full p-[23px] sm:p-5 bg-white-A700 rounded-[12px]">
        <div className="flex flex-col items-center justify-start w-full mt-[7px] mb-3 gap-7 md:px-5 max-w-[297px]">
          <div className="flex flex-col items-start justify-start w-[98%] md:w-full gap-[31px]">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-start items-center w-[61%] gap-2.5">
                <Img
                  src="images/img_image_2.png"
                  alt="image_nine"
                  className="w-[48px] md:h-auto object-cover rounded-[12px]"
                />
                <div className="flex flex-col items-start justify-start w-[67%] gap-[5px]">
                  <Heading as="h1">{nameFour}</Heading>
                  <Text size="s" as="p">
                    {time}
                  </Text>
                </div>
              </div>
              <Img src={optionsFive} alt="options_five" className="h-[38px] w-[38px]" />
            </div>
            <Text as="p">{copyOne}</Text>
          </div>
          <div className="flex flex-row justify-center w-[98%] md:w-full">
            <div className="flex flex-row justify-start w-full gap-2.5">
              <Img
                src="images/img_image_160x200.png"
                alt="image_eleven"
                className="w-[69%] md:h-auto sm:w-full object-cover rounded-lg"
              />
              <div className="flex flex-col items-center justify-start w-[28%] gap-2.5">
                <Img
                  src="images/img_image_75x80.png"
                  alt="image_thirteen"
                  className="w-full md:h-auto sm:w-full object-cover rounded-lg"
                />
                <div className="flex flex-row justify-center w-full">
                  <div className="h-[75px] w-full sm:w-full relative">
                    <Img
                      src="images/img_image_3.png"
                      alt="image_fifteen"
                      className="justify-center h-[75px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-lg"
                    />
                    <div className="flex flex-row justify-center items-center w-max h-max gap-1.5 left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Img src={iconcameraOne} alt="iconcamera_one" className="h-[14px] w-[14px]" />
                      <Text as="p" className="!text-white-A700 !font-sfprodisplay">
                        {labelSeven}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between w-[92%] md:w-full">
            <div className="flex flex-row justify-center items-center">
              <Img src={iconheartNine} alt="iconheart_nine" className="h-[14px] w-[14px]" />
              <Text as="p" className="ml-[5px] !text-gray-900">
                {labelEight}
              </Text>
              <Img src={iconcomment} alt="iconcomment" className="h-[14px] w-[14px] ml-[27px] sm:ml-5" />
              <Text as="p" className="ml-1.5 !text-gray-900">
                {labelNine}
              </Text>
            </div>
            <div className="flex flex-row justify-start items-center gap-px">
              <Text as="p" className="!text-gray-900">
                {labelTen}
              </Text>
              <Img src="images/img_icon_share.svg" alt="iconshare_five" className="h-[14px] w-[14px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
