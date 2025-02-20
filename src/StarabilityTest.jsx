import { useState } from "react";
import Starability from "./Starability";
import React from "react";
export default function StarabilityTest() {
  let [movieRating, setMovieRating] = useState("8");
  return (
    <Starability onSetRating={setMovieRating} color={"blue"}></Starability>
  );
}
//setMovieRating is one of the important characteristics that needs to be passed when creating components because I can't access the stateVariable , say somewhere i need to show the rating , how can i do that. I can't and taht will be worthless.  say, I want to display : "X" star rating is pretty good, but i don't have access to rating, and don't even think of lifting up because this is not valid incase of component creator.
