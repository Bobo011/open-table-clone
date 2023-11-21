import React from "react";
import Header from "../components/Header";
import SearchSidebar from "./components/SearchSidebar";
import RestaurantCard from "./components/RestaurantCard";
import { Metadata } from "next";
import { PRICE, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

const fetchRestaurantsByCity = async (searchParams:SearchParams) => {
const where : any = {} 

if(searchParams.city){
  const location = {
    name:{
      equals:searchParams.city.toLowerCase()
    }
  }
  where.location = location
}

if (searchParams.cuisine) {
  const cuisine = {
    name: {
      equals: searchParams.cuisine.toLowerCase(),
    },
  };
  where.cuisine = cuisine;
}

if (searchParams.price) {
  const price = {
      equals: searchParams.price
  };
  where.price = price;
}



  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    slug: true,
    location: true,
    reviews:true
  };

 
  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocations = async () => {
  return prisma.location.findMany();
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

export const metadata: Metadata = {
  title: "Search | OpenTable",
  description: "Generated by create next app",
};

const Search = async ({ searchParams }: { searchParams: SearchParams }) => {
  const restaurants = await fetchRestaurantsByCity(searchParams);
  const location = await fetchLocations();
  const cuisine = await fetchCuisines();

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSidebar
          locations={location}
          cuisines={cuisine}
          searchParams={searchParams}
        />

        <div className="w-5/6">
          {restaurants.length ? (
            <>
              {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </>
          ) : (
            <p>Sorry, We Found No Restaurants in this Area</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
