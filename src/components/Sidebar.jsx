import React, { useState } from "react";
import {
  RiMoneyDollarCircleLine,
  RiFacebookLine,
  RiYoutubeLine,
  RiInstagramLine,
  RiTwitterLine,
  RiFilter3Line,
  RiCloseLine,
} from "react-icons/ri";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div
        className={`w-[80%] md:w-[40%] fixed lg:static top-0 ${
          showSidebar ? "left-0" : "-left-full"
        } lg:w-80 h-full overflow-y-scroll text-gray-400 transition-all bg-[#181A20] p-4 lg:p-0 shadow-2xl lg:shadow-none z-50`}
      >
        {/* Search */}
        <div className="bg-[#362C29]/50 rounded-2xl p-4 mb-4">
          <h4 className="mb-4 text-white text-lg">Categories</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="indy" className="accent-[#E58D27]" />
              <label htmlFor="indy">Indy</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Adventure"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Adventure">Adventure</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="MMO" className="accent-[#E58D27]" />
              <label htmlFor="MMO">MMO</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Casual Game"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Casual Game">Casual Game</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Strategy"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Strategy">Strategy</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Simulator"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Simulator">Simulator</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Sports Game"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Sports Game">Sports Game</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Action Game"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Action Game">Action Game</label>
            </div>
          </div>
          <h4 className="my-4 text-white text-lg">Platforms</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="PC" />
              <label htmlFor="PC">PC</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Playstation 5"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Playstation 5">Playstation 5</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Playstation 4"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Playstation 4">Playstation 4</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Xbox Series"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Xbox Series">Xbox Series</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Nintendo Switch"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Nintendo Switch">Nintendo Switch</label>
            </div>
          </div>
          <h4 className="my-4 text-white text-lg">Price</h4>
          <form className="flex flex-col gap-8">
            <div className="flex items-center justify-between gap-4">
              <div className="relative">
                <RiMoneyDollarCircleLine className="absolute left-2 top-1/2 -translate-y-1/2" />
                <input
                  type="number"
                  className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full"
                />
              </div>
              <span>-</span>
              <div className="relative">
                <RiMoneyDollarCircleLine className="absolute left-2 top-1/2 -translate-y-1/2" />
                <input
                  type="number"
                  className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#E58D27] text-black font-bold rounded-full w-full p-3 hover:-translate-y-1 transition-all duration-200"
            >
              Apply Filter
            </button>
          </form>
        </div>
        {/* Social media */}
        <ul className="flex items-center justify-between">
          <li>
            <a
              href="https://www.facebook.com/jotreDev"
              target="_blank"
              className="text-2xl"
            >
              <RiFacebookLine />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCgA_JTg3zj1928UVAiG7uyg"
              target="_blank"
              className="text-2xl"
            >
              <RiYoutubeLine />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jotredev"
              target="_blank"
              className="text-2xl"
            >
              <RiInstagramLine />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/jotredev"
              target="_blank"
              className="text-2xl"
            >
              <RiTwitterLine />
            </a>
          </li>
        </ul>
      </div>
      {/* Button mobile */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="lg:hidden fixed bottom-4 right-4 bg-[#E58D27] p-4 rounded-full text-xl"
      >
        {showSidebar ? <RiCloseLine /> : <RiFilter3Line />}
      </button>
    </>
  );
};

export default Sidebar;
