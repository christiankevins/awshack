import React from "react";
import  { useState } from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Img, Input } from "../../components";
import { SelectBox } from "../../components/SelectBox";
import DirectMessageProfile3 from "../../components/DirectMessageProfile3";
import StoriesNotifications from "../../components/StoriesNotifications";
import { Link } from 'react-router-dom';

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    location: "",
    month: "",
    country: "",
    inputdata: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Serialize formData to JSON
    const jsonData = JSON.stringify(formData);

    // Write jsonData to a file
    // Example: writeToFile(jsonData);
    console.log(jsonData); // For demonstration purposes, log the JSON data
  };



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
              src="images/uoft_logo.png"
              alt="standard_one"
              className="h-[60px] w-[48px] mb-[886px]"
            />
          </div>
          <div className="h-[1024px] w-[85%] md:w-full relative">
            <div className="flex flex-col items-start justify-start w-[53%] left-0 m-auto absolute">
              <Heading size="lg" as="h2" className="mt-[60px] !text-gray-500" >
                Basic Information
              </Heading>
              <div className="flex flex-row justify-start w-full mt-[31px]">
                <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                  <div className="flex flex-row md:flex-col justify-start w-full gap-[30px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[48%] md:w-full pt-0.5 gap-3">
                      <Heading size="s" as="h3" className="tracking-[1.00px] uppercase">
                        name
                      </Heading>
                      <Input shape="round" name="name" placeholder="Hack the Student Life" className="w-full sm:w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[48%] md:w-full pt-0.5 gap-3">
                      <Heading size="s" as="h4" className="tracking-[1.00px] uppercase">
                        Description
                      </Heading>
                      <Input
                        shape="round"
                        name="userName"
                        placeholder="A Hackathon"
                        suffix={<Img src="images/img_icon_checkcircle_green_400.svg" alt="Icon/Check-Circle" />}
                        className="w-full sm:w-full gap-[35px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-start w-full gap-[30px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[48%] md:w-full pt-0.5 gap-3">
                      <Heading size="s" as="h5" className="tracking-[1.00px] uppercase">
                        Location
                      </Heading>
                      <Input
                        shape="round"
                        name="location"
                        placeholder="BA201"
                        className="w-full sm:w-full"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[48%] md:w-full pt-0.5 gap-3">
                      <Heading size="s" as="h6" className="tracking-[1.00px] uppercase">
                        Date
                      </Heading>
                      <Input
                        shape="round"
                        indicator={<Img src="images/img_button_indigo_a200.svg" alt="Icon/Arrow-Down" />}
                        name="month"
                        placeholder="March 25, 2024"
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
                        Capacity
                      </Heading>
                      <Input
                        shape="round"
                        indicator={<Img src="images/img_button_indigo_a200.svg" alt="Icon/Arrow-Down" />}
                        name="country"
                        placeholder="60"
                        className="w-full gap-px font-medium"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-3">
                      <Heading size="s" as="p" className="tracking-[1.00px] uppercase">
                        Organizer
                      </Heading>
                      <Input
                        shape="round"
                        indicator={<Img src="images/img_button_indigo_a200.svg" alt="Icon/Arrow-Down" />}
                        name="inputdata"
                        placeholder="IEEE University of Toronto"
                        className="w-full gap-px font-medium"
                      />
                    </div>
                      <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-3">
                        <Heading size="s" as="p" className="tracking-[1.00px] uppercase">
                          Tags
                        </Heading>
                        <Input
                          shape="round"
                          indicator={<Img src="images/img_button_indigo_a200.svg" alt="Icon/Arrow-Down" />}
                          name="city"
                          placeholder="Study Group"
                          className="w-full gap-px font-medium"
                        />
            
                    <Heading size="s" as="p" className="tracking-[1.00px] uppercase">
                        Upload Photos
                      </Heading>
                    <label for="dropzone-file1" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg class="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file1" type="file" class="hidden" />
          </label>
</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start mt-16">
                <Link to="/Events">
                <Button color="green_400" size="7xl" className="w-full sm:px-5 font-bold rounded-[29px]">
                  Save Changes
                </Button>
                </Link>
              </div>
            </div>
            <header className="flex flex-row justify-between items-center w-[97%] top-[1%] right-7 left-0 m-auto absolute">
              <Heading size="xl" as="h5">
                Add Event
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
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  );
}
