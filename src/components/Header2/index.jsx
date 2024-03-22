import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Button, Heading, Input } from "./..";
export default function Header2({ ...props }) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    
    <header {...props}>

      <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[13px] p-3 mx-auto md:px-5 bg-white-A700 max-w-[760px] rounded-[12px]">
        
        
        <Input
          size="sm"
          shape="square"
          name="search"
          placeholder="Search your events…"
          value={searchBarValue1}
          onChange={(e) => setSearchBarValue1(e)}
          prefix={<Img src="images/img_icon_search.svg" alt="Icon/Search" className="cursor-pointer" />}
          suffix={
            searchBarValue1?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue1("")} height={18} width={18} />
            ) : null
          }
          className="w-[89%] md:w-full gap-[15px] my-px md:mt-0"
        />
        <Heading size="s" as="p" className="!text-gray-500 tracking-[1.00px] uppercase">
          Filters
        </Heading>
      </div>
      <div className="flex flex-row justify-start w-[10%] gap-5">
        <div className="flex flex-col items-center justify-start h-[48px] w-[48px]">
          <Button
            color="light_blue_200"
            size="4xl"
            shape="round"
            className="font-sfprodisplay font-bold min-w-[48px] sm:min-w-full"
          >
            1
          </Button>
        </div>
        <Img
          src="images/img_avatar_48x48.png"
          alt="avatar_one"
          className="w-[48px] md:h-auto object-cover rounded-[12px]"
        />
      </div>
    </header>
  );
}
