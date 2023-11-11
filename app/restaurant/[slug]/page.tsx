import NavBar from "@/app/components/NavBar";
import React from "react";
import {Header,RestaurantNavbar,Title,Rating,Description,Images,Reviews,ReservationCard} from './components/index'

const RestaurantDetails = () => {
  return (
    <>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
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
      </div>
    </>
  );
};

export default RestaurantDetails;
