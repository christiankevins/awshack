import React from "react";
import { ReactTable } from "../../components/ReactTable";
import { Input, Img, Text, Button, Heading } from "./..";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [{}, {}];

export default function HomeCarddekstop2({
  name = "Edward Ford",
  time = "5min ago",
  copy = "Tourism Is Back In Full Swing In Cancun Mexico",
  nameOne = "Billy Green",
  time1 = "20min ago",
  timezone = "Awesome Edward, remeber that five tips for low cost holidays I sent you?",
  nameTwo = "Billy Green",
  time2 = "20min ago",
  timezone1 = "Awesome Edward, remeber that five tips for low cost holidays I sent you?",
  labelOne = "326",
  labelTwo = "148",
  labelThree = "Share",
  ...props
}) {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowiconheart", {
        cell: (info) => (
          <div className="flex flex-row justify-start items-center gap-[5px]">
            <Img
              src="images/img_avatar_28x28.png"
              alt="avatar_three"
              className="w-[28px] md:h-auto object-cover rounded-lg"
            />
            <Text as="p" className="!text-gray-900">
              {nameOne}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center items-center">
            <Img src="images/img_icon_heart_regular.svg" alt="iconheart_five" className="h-[14px] w-[14px]" />
            <Text as="p" className="ml-[5px] !text-gray-900">
              {labelOne}
            </Text>
            <Img src="images/img_icon_comment.svg" alt="iconcomment" className="h-[14px] w-[14px] ml-[27px] sm:ml-5" />
            <Text as="p" className="ml-1.5 !text-gray-900">
              {labelTwo}
            </Text>
          </div>
        ),
        meta: { width: "119px" },
      }),
      tableColumnHelper.accessor("rowlabelthree", {
        cell: (info) => (
          <Text size="s" as="p">
            {time1}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row justify-start items-center mr-[5px] gap-px">
            <Text as="p" className="!text-gray-900">
              {labelThree}
            </Text>
            <Img src="images/img_icon_share.svg" alt="iconshare_one" className="h-[14px] w-[14px]" />
          </div>
        ),
        meta: { width: "53px" },
      }),
    ];
  }, []);

  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full p-2 bg-white-A700 rounded-[12px]">
        <div className="flex flex-col items-center justify-start w-full mt-[22px] md:px-5 max-w-xs">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row justify-start items-center w-[50%] gap-2.5">
              <Img
                src="images/img_image_48x48.png"
                alt="image_one"
                className="w-[48px] md:h-auto object-cover rounded-[12px]"
              />
              <div className="flex flex-col items-start justify-start w-[64%] gap-1">
                <Heading as="h1">{name}</Heading>
                <Text size="s" as="p">
                  {time}
                </Text>
              </div>
            </div>
            <Img src="images/img_icon_eye.svg" alt="options_one" className="h-[38px] w-[38px]" />
          </div>
          <Text as="p" className="mt-8">
            {copy}
          </Text>
          <div className="flex flex-row justify-center w-full mt-5">
            <div className="h-[180px] w-full sm:w-full relative">
              <Img
                src="images/img_image_180x320.png"
                alt="image_three"
                className="justify-center h-[180px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-lg"
              />
              <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 px-14 py-[71px] m-auto md:p-5 bg-gray-900_66 absolute rounded-lg">
                <Button color="white_A700_99" size="xl" shape="round" className="w-[38px] mx-[70px] md:mx-5">
                  <Img src="images/img_play_button.svg" />
                </Button>
              </div>
            </div>
          </div>
          <ReactTable
            bodyProps={{ className: "md:flex-col" }}
            headerProps={{ className: "" }}
            rowDataProps={{ className: "md:flex-col" }}
            className="w-[320px] mt-[-91px]"
            columns={tableColumns}
            data={tableData}
          />
          <Input
            color="gray_500_33"
            variant="outline"
            name="comment"
            placeholder="Write a comment…"
            suffix={<Img src="images/img_icon_emoji.svg" alt="Icon/Emoji" />}
            className="w-full sm:w-full mt-20 gap-3 z-[1] rounded"
          />
        </div>
      </div>
    </div>
  );
}
