import React from "react";
import { Img, Text, Heading, Button } from "./..";

export default function VideoFullScreenModaldesktop({
  modalOne = "images/defaultNoData.png",
  avatarOne,
  threehundredtwe,
  onehundredforty,
  share,
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row md:flex-col justify-start items-center w-full gap-2.5 md:gap-5">
        <div className="h-[128px] w-[1%] opacity-0.4 bg-white-A700_7e rounded-sm" />
        <div className="h-[1024px] w-[99%] md:w-full relative">
          <Img
            src={modalOne}
            alt="modal_one"
            className="justify-center h-[1024px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-bl-[32px] rounded-tl-[32px] object-cover absolute"
          />
          <div className="flex flex-col items-center justify-center w-full h-full gap-[642px] left-0 bottom-0 right-0 top-0 m-auto absolute">
            <header className="flex flex-row justify-center items-center w-[97%]">
              <div className="flex flex-col items-center justify-center w-full gap-10">
                <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                  <div className="flex flex-row justify-center w-[12%] sm:w-full">
                    <div className="flex flex-row justify-start items-center w-full gap-2.5">
                      {!!avatarOne ? (
                        <Img
                          src={avatarOne}
                          alt="avatar_one"
                          className="w-[48px] md:h-auto object-cover rounded-[12px]"
                        />
                      ) : null}
                      <div className="flex flex-col items-start justify-start w-[58%] gap-1">
                        <Text as="p" className="!text-white-A700">
                          Edward Ford
                        </Text>
                        <Text size="s" as="p" className="!text-white-A700">
                          5min ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center w-[26%] sm:w-full">
                    <div className="flex flex-row justify-center w-[23%]">
                      {!!threehundredtwe ? (
                        <Button
                          color="white_A700_33"
                          size="md"
                          leftIcon={<Img src="images/defaultNoData.png" alt="Icon/Share" />}
                          className="w-full gap-[5px] font-medium rounded"
                        >
                          {threehundredtwe}
                        </Button>
                      ) : null}
                    </div>
                    <div className="flex flex-row justify-center w-[22%] ml-[15px]">
                      {!!threehundredtwe ? (
                        <Button
                          color="white_A700_33"
                          size="md"
                          leftIcon={<Img src="images/defaultNoData.png" alt="Icon/Share" />}
                          className="w-full gap-[5px] font-medium rounded"
                        >
                          {threehundredtwe}
                        </Button>
                      ) : null}
                    </div>
                    <div className="flex flex-row justify-center w-[26%] ml-[15px]">
                      {!!threehundredtwe ? (
                        <Button
                          color="white_A700_33"
                          size="md"
                          leftIcon={<Img src="images/defaultNoData.png" alt="Icon/Share" />}
                          className="w-full gap-[5px] font-medium rounded"
                        >
                          {threehundredtwe}
                        </Button>
                      ) : null}
                    </div>
                    <Img src="images/defaultNoData.png" alt="options_one" className="h-[38px] w-[38px] ml-5" />
                  </div>
                </div>
                <Heading size="2xl" as="h3" className="w-[56%] !text-white-A700 !leading-9">
                  <>
                    Tropical Fresh Tourism Is Back In Full Swing
                    <br />
                    In Cancun Mexico
                  </>
                </Heading>
              </div>
            </header>
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-col items-center justify-start w-full gap-[34px]">
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-center justify-start w-full gap-[25px]">
                    <div className="flex flex-row justify-between w-full">
                      <Text as="p" className="!text-white-A700">
                        01:23
                      </Text>
                      <Text as="p" className="!text-white-A700 text-right">
                        05:46
                      </Text>
                    </div>
                    <div className="flex flex-row justify-center w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="h-[8px] w-[60%] ml-px md:ml-0 z-[1] bg-white-A700 relative rounded-[3px]">
                          <div style={{ width: "88%" }} className="h-full bg-light_blue-200 absolute rounded-[3px]" />
                        </div>
                        <div className="h-[8px] w-full mt-[-7px] bg-white-A700_33 rounded-[3px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="flex flex-row justify-center items-center w-[16%]">
                    <Img src="images/defaultNoData.png" alt="iconpause_one" className="h-[30px] w-[30px]" />
                    <Img
                      src="images/defaultNoData.png"
                      alt="iconvolume_one"
                      className="h-[30px] w-[30px] ml-10 sm:ml-5"
                    />
                    <div className="h-[8px] w-[34%] ml-5 bg-white-A700_33 relative rounded">
                      <div style={{ width: "67%" }} className="h-full bg-white-A700 absolute rounded" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between w-auto gap-[31px]">
                    <Img src="images/defaultNoData.png" alt="iconsettings" className="h-[30px] w-[30px]" />
                    <Img src="images/defaultNoData.png" alt="iconfullscreen" className="h-[30px] w-[29px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
