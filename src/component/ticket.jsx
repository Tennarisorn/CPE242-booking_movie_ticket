import React from "react";
import "../index.css"; // Import the custom CSS file

const Ticket = ({
  movieName,
  theatreName,
  duration,
  seatName,
  showtime,
  date,
  imageUrl,
}) => {
  return (
    <div className="flex bg-white rounded-lg w-full shadow-lg mb-6 overflow-hidden mx-2 rainbow-border">
      <img
        src={imageUrl}
        alt="Movie Poster"
        className="w-1/3 object-cover rounded-l-lg"
      />
      <div className="w-2/3 p-6 flex flex-col justify-between text-black">
        <div>
          <h1 className="text-3xl font-bold mb-2">{movieName}</h1>
          <p className="text-lg mb-1">Theatre: {theatreName}</p>
          <p className="text-lg mb-1">Duration: {duration}</p>
          <p className="text-lg mb-2">Showtime: {showtime}</p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="text-left">
            <p className="text-md font-semibold">Date</p>
            <p className="text-md">{date}</p>
          </div>
          <div className="text-right">
            <p className="text-md font-semibold">Seat</p>
            <p className="text-md">{seatName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TicketList = () => {
  const movieName = "The Amazing Adventure";
  const theatreName = "Grand Cinema";
  const duration = "2h 30m";
  const showtime = "7:00 PM";
  const date = "25/09/2023";
  const imageUrl =
    "https://www.fapot.or.th/assets/upload/movie/1621486844_1808366263@2x.jpg"; // Provided image URL
  const seats = [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "C1",
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
    "C7",
    "C8",
    "D1",
    "D2",
    "D3",
    "D4",
    "D5",
    "D6",
    "D7",
    "D8",
    "E1",
    "E2",
    "E3",
    "E4",
    "E5",
    "E6",
    "E7",
    "E8",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "G1",
    "G2",
    "G3",
    "G4",
    "G5",
    "G6",
    "G7",
    "G8",
  ];

  return (
    <div className="flex flex-wrap justify-center min-h-screen bg-gray-100 p-4">
      {seats.map((seat) => (
        <div key={seat} className="w-full md:w-1/2 lg:w-1/2 p-4">
          <Ticket
            movieName={movieName}
            theatreName={theatreName}
            duration={duration}
            showtime={showtime}
            date={date}
            seatName={seat}
            imageUrl={imageUrl}
          />
        </div>
      ))}
    </div>
  );
};

export default TicketList;
