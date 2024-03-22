import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Img, Input } from "../../components";
import { SelectBox } from "../../components/SelectBox";
import DirectMessageProfile3 from "../../components/DirectMessageProfile3";
import StoriesNotifications from "../../components/StoriesNotifications";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function SettingsPage() {
  return (
    <>
      <Helmet>
        <title>Christian Kevin S 2's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-gray-100">
        <div className="flex flex-row md:flex-col justify-between w-full md:gap-10">
          <div className="flex flex-col items-center justify-start p-[45px] md:p-5">
            <Img
              src="images/img_standard_collection_white_a700.svg"
              alt="standard_one"
              className="h-[48px] w-[48px] mb-[886px]"
            />
          </div>
          <div className="h-[1024px] w-[85%] md:w-full relative">
            <div className="flex flex-col items-start justify-start w-[53%] bottom-[6%] left-0 m-auto absolute">
              <div className="flex flex-row justify-start w-[86%] md:w-full">
                <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-[30px] sm:gap-5">
                  <DirectMessageProfile3
                    avatarThree="images/img_avatar_108x108.png"
                    className="flex flex-col items-center justify-start h-[128px] w-[128px] sm:w-full"
                  />
                  <div className="flex flex-col items-start justify-start w-[71%] sm:w-full gap-[21px]">
                    <Heading size="lg" as="h1" className="!text-gray-500">
                      Profile Picture
                    </Heading>
                    <div className="flex flex-row sm:flex-col justify-start w-full gap-5 sm:gap-5">
                      <div className="flex flex-row justify-start w-[48%] sm:w-full">
                        <Button color="light_blue_200" size="7xl" className="w-full sm:px-5 font-bold rounded-[29px]">
                          Replace
                        </Button>
                      </div>
                      <div className="flex flex-row justify-start w-[48%] sm:w-full">
                        <Button
                          color="gray_500_66"
                          size="7xl"
                          variant="outline"
                          shape="round"
                          leftIcon={<Img src="images/img_icon_bin.svg" alt="Icon/Bin" />}
                          className="w-full gap-[7px] sm:px-5 !text-red-A200 font-sfprodisplay font-bold"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Heading size="lg" as="h2" className="mt-[60px] !text-gray-500">
                Basic Information
              </Heading>
              <div className="flex flex-row justify-start w-full mt-[31px]">
                <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                  <div className="flex flex-row md:flex-col justify-start w-full gap-[30px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[48%] md:w-full pt-0.5 gap-3">
                      <Heading size="s" as="h3" className="tracking-[1.00px] uppercase">
                        name
                      </Heading>
                      <Input shape="round" name="name" placeholder="Anne Carry" className="w-full sm:w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[48%] md:w-full pt-0.5 gap-3">
                      <Heading size="s" as="h4" className="tracking-[1.00px] uppercase">
                        username
                      </Heading>
                      <Input
                        shape="round"
                        name="userName"
                        placeholder="annecarry"
                        suffix={<Img src="images/img_icon_checkcircle_green_400.svg" alt="Icon/Check-Circle" />}
                        className="w-full sm:w-full gap-[35px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-start w-full gap-[30px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[48%] md:w-full pt-0.5 gap-3">
                      <Heading size="s" as="h5" className="tracking-[1.00px] uppercase">
                        Email
                      </Heading>
                      <Input
                        shape="round"
                        type="email"
                        name="email"
                        placeholder="user@mail.com"
                        className="w-full sm:w-full"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[48%] md:w-full pt-0.5 gap-3">
                      <Heading size="s" as="h6" className="tracking-[1.00px] uppercase">
                        birthday
                      </Heading>
                      <SelectBox
                        shape="round"
                        indicator={<Img src="images/img_button_indigo_a200.svg" alt="Icon/Arrow-Down" />}
                        name="month"
                        placeholder="January 25, 1991"
                        options={dropDownOptions}
                        className="w-full gap-px font-medium"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px w-full mt-10 opacity-0.2 bg-gray-500_6c" />
              <div className="flex flex-row justify-start w-full mt-10">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="justify-center w-full gap-[30px] grid-cols-2 md:grid-cols-1 md:gap-5 grid">
                    <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-3">
                      <Heading size="s" as="p" className="tracking-[1.00px] uppercase">
                        Country
                      </Heading>
                      <SelectBox
                        shape="round"
                        indicator={<Img src="images/img_button_indigo_a200.svg" alt="Icon/Arrow-Down" />}
                        name="country"
                        placeholder="United States"
                        options={dropDownOptions}
                        className="w-full gap-px font-medium"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-3">
                      <Heading size="s" as="p" className="tracking-[1.00px] uppercase">
                        state
                      </Heading>
                      <SelectBox
                        shape="round"
                        indicator={<Img src="images/img_button_indigo_a200.svg" alt="Icon/Arrow-Down" />}
                        name="inputdata"
                        placeholder="California"
                        options={dropDownOptions}
                        className="w-full gap-px font-medium"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-3">
                      <Heading size="s" as="p" className="tracking-[1.00px] uppercase">
                        City
                      </Heading>
                      <SelectBox
                        shape="round"
                        indicator={<Img src="images/img_button_indigo_a200.svg" alt="Icon/Arrow-Down" />}
                        name="city"
                        placeholder="San Francisco"
                        options={dropDownOptions}
                        className="w-full gap-px font-medium"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start mt-16">
                <Button color="green_400" size="7xl" className="w-full sm:px-5 font-bold rounded-[29px]">
                  Save Changes
                </Button>
              </div>
            </div>
            <header className="flex flex-row justify-between items-center w-[97%] top-[4%] right-0 left-0 m-auto absolute">
              <Heading size="xl" as="h5">
                Account Informations
              </Heading>
              <div className="flex flex-row justify-center w-[10%]">
                <div className="flex flex-row justify-start w-full gap-5">
                  <StoriesNotifications
                    abOne="1"
                    className="flex flex-col items-center justify-start h-[48px] w-[48px] sm:w-full"
                  />
                  <div className="flex flex-col items-center justify-start h-[48px] w-[48px]">
                    <div className="flex flex-col items-center justify-start h-[48px] w-[48px]">
                      <Img
                        src="images/img_image_36.png"
                        alt="image_one"
                        className="w-[48px] md:h-auto object-cover rounded-[12px]"
                      />
                      <Img
                        src="images/img_avatar_48x48.png"
                        alt="avatar_three"
                        className="w-[48px] md:h-auto mt-[-48px] object-cover rounded-[12px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="flex flex-col items-center justify-start w-[43%] h-full right-0 bottom-0 top-0 my-auto absolute">
              <div className="h-[1024px] w-full relative">
                <Img
                  src="images/img_modal_desktop_dark_gray_900.svg"
                  alt="modaldesktop"
                  className="justify-center h-[1024px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <div className="flex flex-col items-start justify-start w-[40%] gap-[39px] left-[13%] top-[14%] m-auto absolute">
                  <Heading size="xl" as="h5" className="!text-white-A700">
                    Settings
                  </Heading>
                  <div className="flex flex-col w-full gap-10">
                    <div className="flex flex-row justify-start items-center w-[74%] md:w-full mr-[55px] gap-[15px] md:mr-5">
                      <Button color="white_A700" size="3xl" shape="round" className="w-[48px]">
                        <Img src="images/img_button_icon_gray_900_48x48.svg" />
                      </Button>
                      <Heading size="lg" as="h6" className="!text-white-A700 !font-sfprodisplay">
                        My Account
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[77%] md:w-full mr-[49px] gap-[15px] md:mr-5">
                      <Button color="gray_500_66" size="3xl" variant="outline" shape="round" className="w-[48px]">
                        <Img src="images/img_button_icon_48x48.svg" />
                      </Button>
                      <Heading size="lg" as="h6" className="!text-white-A700 !font-sfprodisplay">
                        Notifications
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[85%] md:w-full mr-[31px] gap-[15px] sm:mr-5">
                      <Button color="gray_500_66" size="3xl" variant="outline" shape="round" className="w-[48px]">
                        <Img src="images/img_button_icon_1.svg" />
                      </Button>
                      <Heading size="lg" as="h6" className="!text-white-A700 !font-sfprodisplay">
                        Activity History
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-[15px]">
                      <Button color="gray_500_66" size="3xl" variant="outline" shape="round" className="w-[48px]">
                        <Img src="images/img_button_icon_2.svg" />
                      </Button>
                      <Heading size="lg" as="h6" className="!text-white-A700 !font-sfprodisplay">
                        Billing and Payment
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-center w-[96%] md:w-full mr-2.5">
                      <div className="flex flex-row justify-start items-center w-full gap-[15px]">
                        <Button color="gray_500_66" size="3xl" variant="outline" shape="round" className="w-[48px]">
                          <Img src="images/img_button_icon_3.svg" />
                        </Button>
                        <Heading size="lg" as="h6" className="!text-white-A700 !font-sfprodisplay">
                          Security & Privacy
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[48%] md:w-full mr-[109px] gap-[15px] md:mr-5">
                      <Button color="gray_500_66" size="3xl" variant="outline" shape="round" className="w-[48px]">
                        <Img src="images/img_button_icon_4.svg" />
                      </Button>
                      <Heading size="lg" as="h6" className="!text-white-A700 !font-sfprodisplay">
                        Help
                      </Heading>
                    </div>
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
