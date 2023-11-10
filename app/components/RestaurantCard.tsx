import Link from 'next/link';
import React from 'react'
import SearchBar from './SearchBar';

const RestaurantCard = () => {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
     <SearchBar />
    </div>
  );
}

export default RestaurantCard
