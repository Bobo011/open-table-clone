import NavBar from "@/app/components/NavBar";
import React from "react";
import {
  Header,
  RestaurantNavbar,
  Title,
  Rating,
  Description,
  Images,
  Reviews,
  ReservationCard,
} from "./components/index";

const RestaurantDetails = () => {
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavbar />
        <Title />
        <Rating />
        <Description />
        <Images />
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
};

export default RestaurantDetails;
