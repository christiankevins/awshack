import React from "react";
import { Button, Img, Text, Heading } from "./..";

export default function NotificationsCarddekstop1({
  name = "Dustin Housto",
  time = "5min ago",
  copy = "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation 😂",
  fifteen = "15",
  labelOne = "326",
  labelTwo = "148",
  share = "Share",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-start w-full p-[30px] sm:p-5 bg-white-A700 rounded-[12px]">
        <div className="flex flex-row justify-between items-center w-full mx-auto md:px-5 max-w-[700px]">
          <div className="flex flex-row justify-start items-center w-[26%] gap-2.5">
            <Img
              src="images/img_image_2.png"
              alt="image_one"
              className="w-[48px] md:h-auto object-cover rounded-[12px]"
            />
            <div className="flex flex-col items-start justify-start w-[57%] gap-[5px]">
              <Heading as="h1">{name}</Heading>
              <Text size="s" as="p">
                {time}
              </Text>
            </div>
          </div>
          <Img src="images/img_options_gray_500.svg" alt="options_three" className="h-[38px] w-[38px]" />
        </div>
        <Text as="p" className="mt-[30px]">
          {copy}
        </Text>
        <div className="flex flex-row justify-start w-full mt-[22px] mx-auto md:px-5 max-w-[700px]">
          <div className="flex flex-row md:flex-col justify-start w-full gap-[15px] md:gap-5">
            <Img
              src="images/img_image_160x200.png"
              alt="photoone_one"
              className="w-[50%] md:w-full md:h-[305px] object-cover rounded-lg"
            />
            <div className="flex flex-col items-center justify-start w-[48%] md:w-full gap-[15px]">
              <div className="flex flex-row justify-start w-full gap-[15px]">
                <Img
                  src="images/img_image_75x80.png"
                  alt="phototwo_one"
                  className="w-[48%] md:h-auto sm:w-full object-cover rounded-lg"
                />
                <Img
                  src="images/defaultNoData.png"
                  alt="photothree_one"
                  className="w-[48%] md:h-auto sm:w-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-row justify-start w-full gap-[15px]">
                <Img
                  src="images/defaultNoData.png"
                  alt="photofour_one"
                  className="w-[48%] md:h-auto sm:w-full object-cover rounded-lg"
                />
                <div className="h-[145px] w-[48%] sm:w-full relative">
                  <Img
                    src="images/defaultNoData.png"
                    alt="photofive_one"
                    className="justify-center h-[145px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-lg"
                  />
                  <Button
                    color="white_A700"
                    size="md"
                    leftIcon={<Img src="images/defaultNoData.png" alt="Icon/Camera" />}
                    className="w-max gap-1.5 left-0 bottom-0 right-0 top-0 m-auto font-sfprodisplay font-medium min-w-[54px] absolute rounded"
                  >
                    {fifteen}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full mt-10 mx-auto md:px-5 max-w-[700px]">
          <div className="flex flex-row justify-start w-[21%] gap-[15px]">
            <div className="flex flex-row justify-start items-center w-[46%] p-[5px]">
              <Img
                src="images/img_icon_heart_regular_gray_500.svg"
                alt="iconheart_one"
                className="h-[14px] w-[14px] ml-px"
              />
              <Text as="p" className="ml-[5px] !text-gray-900">
                {labelOne}
              </Text>
            </div>
            <div className="flex flex-row justify-start items-center w-[45%] gap-1.5 p-[5px]">
              <Img src="images/img_icon_comment_gray_500.svg" alt="iconcomment_one" className="h-[14px] w-[14px]" />
              <Text as="p" className="!text-gray-900">
                {labelTwo}
              </Text>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <Button
              color="gray_100"
              size="md"
              rightIcon={<Img src="images/img_icon_share.svg" alt="Icon/Share" />}
              className="w-full gap-[3px] !text-gray-900 font-sfprodisplay font-medium rounded"
            >
              {share}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
