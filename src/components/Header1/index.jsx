import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Heading, Button, Input } from "./..";

export default function Header1({ ...props }) {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");

  return (
    <header {...props}>
      <div className="flex flex-row justify-start items-center w-[30%] gap-[15px]">
        <Input
          size="xl"
          name="search"
          placeholder="Search in social…"
          value={searchBarValue2}
          onChange={(e) => setSearchBarValue2(e)}
          prefix={<Img src="images/img_icon_search.svg" alt="Icon/Search" className="cursor-pointer" />}
          suffix={
            searchBarValue2?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue2("")} height={18} width={18} />
            ) : null
          }
          className="w-[82%] gap-[15px] font-sfprodisplay rounded-[12px]"
        />
        <Button color="green_400" size="3xl" shape="round" className="w-[48px]">
          <Img src="images/defaultNoData.png" />
        </Button>
      </div>
      <div className="flex flex-row justify-start w-[10%] gap-5">
        <div className="flex flex-col items-center justify-start h-[48px] w-[48px]">
          <div className="flex flex-col items-center justify-start h-[48px] w-[48px] p-2.5 bg-light_blue-200 rounded-[12px]">
            <Heading size="xl" as="h5" className="!text-white-A700 !font-sfprodisplay text-center !text-[22.32px]">
              1
            </Heading>
          </div>
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
