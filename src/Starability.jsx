/**
 * The Array.from() method creates a new array from an array-like or iterable object.
 * Array.from(arrayLike, mapFunction);
 * Basically, this is shorter form to create array and use map function to that array simultaneously, the only difference is we are using map(element,index )function rather than map(element)
 */

const containerStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "2rem",
  gap: "4rem",
};

const containerItemsStyle = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  margin: "0",
  fontSize: "2.4rem",
  lineHeight: "1",
};
import React from "react";
import { useState } from "react";
export default function Starability({
  maxRating = 5,
  color = "#F3C623",
  fontSize = "2rem",
  onSetRating,
}) {
  let [rating, setRating] = useState(0);
  let [tempRating, setTempRating] = useState(0);
  let handleRating = (rating) => {
    setRating(rating);
    onSetRating(rating);
  };
  return (
    <div className="container" style={containerStyle}>
      <div className="containerItems" style={containerItemsStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            hoverIn={() => {
              setTempRating(i + 2);
            }}
            hoverOut={() => {
              setTempRating(0);
            }}
            color={color}
            fontSize={fontSize}
            full={tempRating ? tempRating > i + 1 : rating > i}
          />
        ))}
      </div>

      <p style={textStyle}>{rating || ""}</p>
    </div>
  );
}

function Star({
  onRate,
  hoverIn,
  hoverOut,
  full,
  color,
  fontSize,
  defaultValue,
}) {
  return (
    <span
      role="button"
      style={{ height: "40px", width: "40px" }}
      onClick={onRate}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#000"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
