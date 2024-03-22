import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Heading, Input } from "../../components";
import EventsCarddekstop from "../../components/EventsCarddekstop";
import EventsCarddekstop1 from "../../components/EventsCarddekstop1";
import EventsCarddekstop2 from "../../components/EventsCarddekstop2";
import StoriesNotifications from "../../components/StoriesNotifications";
import Navbar from "../../components/Navbar"; // Import the Navbar component
import { Link } from 'react-router-dom';



export default function EventsPage() {
  const [searchBarValue6, setSearchBarValue6] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Christian Kevin S 2's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      <Navbar />

      <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10 bg-gray-100">
        <div className="flex flex-col items-center justify-start p-[45px] md:p-5">
        <Img
              src="images/uoft_logo.png"
              alt="standard_one"
              className="h-[62px] w-[48px] mb-[886px]"
            />
        </div>
        <div className="flex flex-col items-start justify-start w-[55%] md:w-full mt-10 md:mt-0">
          <div className="flex flex-row md:flex-col justify-start items-center gap-[13px] p-3 bg-white-A700 rounded-[12px]">
            <Input
              size="sm"
              shape="square"
              name="search"
              placeholder="Search in social…"
              value={searchBarValue6}
              onChange={(e) => setSearchBarValue6(e)}
              prefix={<Img src="images/img_icon_search.svg" alt="Icon/Search" className="cursor-pointer" />}
              suffix={
                searchBarValue6?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue6("")} height={18} width={18} />
                ) : null
              }
              className="w-[89%] md:w-full gap-[15px] my-px md:mt-0"
            />
            <Heading size="s" as="h1" className="!text-gray-500 tracking-[1.00px] uppercase">
              Filters
            </Heading>
          </div>
          <Heading size="2xl" as="h2" className="mt-[59px]">
            Events
          </Heading>
          <div className="flex flex-row justify-between items-start w-[62%] md:w-full mt-10">
            <div className="flex flex-col items-center justify-start w-[13%] gap-1.5">
              <Heading as="h2">Anytime</Heading>
              <div className="h-[2px] w-[87%] bg-gray-900" />
            </div>
            <div className="flex flex-row justify-center">
              <Heading as="h3" className="!text-gray-500">
                Today
              </Heading>
            </div>
            <div className="flex flex-row justify-center">
              <Heading as="h4" className="!text-gray-500">
                Tomorrow
              </Heading>
            </div>
            <div className="flex flex-row justify-center">
              <Heading as="h5" className="!text-gray-500">
                This Week
              </Heading>
            </div>
            <div className="flex flex-row justify-center">
              <Heading as="h6" className="!text-gray-500">
                This Month
              </Heading>
            </div>
            <div className="flex flex-row justify-center">
              <Heading as="p" className="!text-gray-500">
                Select
              </Heading>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[42px] pb-[30px] sm:pb-5">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="justify-center w-full gap-[30px] grid-cols-2 md:grid-cols-1 md:gap-5 grid">
                <EventsCarddekstop className="flex flex-col items-center justify-start w-full" />
                <EventsCarddekstop1 className="flex flex-col items-center justify-start w-full" />
                <EventsCarddekstop
                  imageOne="images/img_image_26.png"
                  className="flex flex-col items-center justify-start w-full"
                />
                <EventsCarddekstop
                  imageOne="images/img_image_27.png"
                  className="flex flex-col items-center justify-start w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-[25%] md:w-full">
          <div className="h-[1024px] w-full relative">
            <Img
              src="images/img_modal_desktop_dark_gray_500.svg"
              alt="modaldesktop"
              className="justify-center h-[1024px] left-0 bottom-0 right-0 top-0 m-auto absolute"
            />
            <div className="flex flex-col items-center justify-center w-max h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <div className="flex flex-col items-end justify-start w-full gap-[45px] p-10 sm:p-5 rounded-tl-[32px] rounded-bl-[32px] bg-gray-900">
                <div className="flex flex-row justify-start w-[45%] md:w-full mt-[5px] gap-5">
                  <StoriesNotifications className="flex flex-col items-center justify-start h-[48px] w-[48px] sm:w-full" />
                  <Img
                    src="images/img_avatar_48x48.png"
                    alt="avatar_one"
                    className="w-[48px] md:h-auto object-cover rounded-[12px]"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-[97%] md:w-full mb-[45px] pt-[3px] gap-[39px]">
                  <Heading size="xl" as="h2" className="!text-white-A700">
                    My Next Events
                  </Heading>
                  <div className="w-full gap-px grid-cols-1 grid">
                    <EventsCarddekstop2 className="flex flex-row justify-center w-full" />
                    <EventsCarddekstop2
                      image="images/img_image_28.png"
                      className="flex flex-row justify-center w-full"
                    />
                    <EventsCarddekstop2
                      image="images/img_image_29.png"
                      className="flex flex-row justify-center w-full"
                    />
                  </div>
                  <div className="flex flex-row justify-start items-center gap-2 py-0.5">
                    <a href="#">
                      <Heading size="s" as="h3" className="!text-gray-500 tracking-[1.00px] uppercase">
                        See more
                      </Heading>
                    </a>
                    <Img
                      src="images/img_icon_arrow_right_gray_500.svg"
                      alt="iconarrow_one"
                      className="h-[14px] w-[14px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
