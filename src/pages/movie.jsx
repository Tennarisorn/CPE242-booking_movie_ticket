import React, { useState } from "react";
import MovieCard from "../component/moviecard";
import SeatSelector from "../component/seating";
import { Button } from "flowbite-react";
import dates from "../data/dates";
import VideoEmbed from "../component/videoembed";

const Movie = () => {
  const [showButtons, setShowButtons] = useState(
    Array(dates.length).fill(false)
  );
  const [showSeat, setShowSeat] = useState(false);

  const handleButtonClick = (index) => {
    const newShowButtons = Array(dates.length).fill(false);
    newShowButtons[index] = !showButtons[index];
    setShowButtons(newShowButtons);
    if (showSeat) setShowSeat(!showSeat);
  };

  const HandleSeat = () => {
    setShowSeat(!showSeat);
  };

  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="h-full w-1/4 flex items-center justify-center">
        <MovieCard />
      </div>
      <div className="h-full w-2/4 place-content-center">
        <div className="flex justify-center items-center">
          <div className="h-2/5 w-full block rounded-3xl ">
            <VideoEmbed />
            <div className="text-3xl text-center font-bold font-serif w-full text-white">
              Select Date
            </div>
            <div className="flex flex-col gap-4 mt-6 mb-3 w-full">
              {dates.map((date, index) => (
                <div key={index} className="flex flex-row items-center gap-4">
                  <div className="w-[150px]">
                    <Button
                      as="span"
                      className="w-full"
                      style={{ backgroundColor: "#0F4984" }}
                      onClick={() => handleButtonClick(index)}
                    >
                      {date}
                    </Button>
                  </div>
                  {showButtons[index] && (
                    <>
                      <span className="text-white font-serif font-bold">
                        Choose time:
                      </span>
                      <div className="flex flex-row gap-4 w-auto">
                        <div>
                          <Button
                            as="span"
                            className="w-[120px]"
                            gradientDuoTone="purpleToPink"
                            onClick={HandleSeat}
                          >
                            10.00
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-full w-1/4 flex items-center justify-center">
        {showSeat && (
          <div className="my-6 ">
            <SeatSelector />
          </div>
        )}
      </div>
    </div>
  );
};

export default Movie;
