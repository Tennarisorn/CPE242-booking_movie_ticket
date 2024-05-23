import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const SeatSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const renderSeat = (row, col) => {
    const seat = `${row}-${col}`;
    const isSelected = selectedSeats.includes(seat);
    return (
      <div
        key={seat}
        className={`seat ${
          isSelected ? "selected" : ""
        } w-12 h-12 border border-black inline-block m-auto mb-2 leading-12 text-center cursor-pointer relative ${
          isSelected ? "bg-blue-200" : "bg-white"
        } bg-cover`}
        onClick={() => toggleSeat(seat)}
        style={{
          backgroundImage: 'url("/chair.png")',
        }}
      >
        {isSelected && (
            <FaCheck
                className="absolute top-0 left-0 w-full h-full text-blue-500"
            />
        )}
      </div>
    );
  };

  const rows = [...Array(7).keys()];
  const cols = [...Array(8).keys()];

  return (
    <div className="seat-selector">
      <div
        style={{
          width: "90%",
          height: "50px",
          backgroundColor: "black",
          margin: "0 auto 20px",
          color: "white",
          textAlign: "center",
          lineHeight: "50px",
        }}
      >
        Screen
      </div>
      {rows.map((row) => (
        <div key={row} className="row flex justify-center items-center">
          {cols.map((col) => renderSeat(row, col))}
        </div>
      ))}
    </div>
  );
};

export default SeatSelector;
