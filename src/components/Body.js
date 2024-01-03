import RestaruntCard from "../components/RestaruntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterOfRestaurants, setFilterOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6868159&lng=83.2184815&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    // optional chainging
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restarunt-cardContainer">
      <div className="d-flex">
        {/* Search Button */}
        <div className="search-btn">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchFilter = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterOfRestaurants(searchFilter);
            }}
          >
            Search
          </button>
        </div>
        {/* Rating Button */}
        <button
          className="top-rateBtn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurants(filterList);
          }}
        >
          Top Rated RestaruntCard
        </button>
      </div>
      <div className="res-card-wrapp">
        {filterOfRestaurants.map((item) => {
          return (
            <RestaruntCard
              key={item.info.id}
              name={item.info.name}
              price={item.info.costForTwo}
              rating={item.info.avgRating}
              imgId={item.info.cloudinaryImageId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
