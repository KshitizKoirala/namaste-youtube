import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_AUTOSUGGEST_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { displaySearchResults } from "../utils/searchResults";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  /**
   *
   * key - i
   * - render the component
   * - triggers useEffect
   * - start timer => make api call after 200ms
   *
   * key -ip
   * - destroys the component (useEffect return method)
   * - re-renders the component and creates a new values, constants and new timer
   * - useEffect()
   * - start timer => make api call after 200ms
   *
   */
  useEffect(() => {
    // Make an api call after every key press but if the difference between 2 API calls is < 200ms decline the api call
    const timer = setTimeout(() => {
      /**
       * We implement caching, because we do not need to make the api call again for the same search results
       * i.e. especially when we use Backspace to clear the search input
       *
       * searchCache Object
       * {
       *  "iphone": ["iphone 11", "iphone 14"]
       * }
       */
      if (searchCache[searchQuery]) {
        return setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions(searchQuery);
      }
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  // Get Search suggestions and update redux cache
  const getSearchSuggestions = async (searchQuery) => {
    const data = await fetch(YOUTUBE_AUTOSUGGEST_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestions(json[1]);

    // update to my searchCache
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  // After search refresh the homepage results
  const refreshHomePageResults = (query = null) => {
    if (query) {
      setSearchQuery(query);
    }
    dispatch(displaySearchResults(searchQuery));
  };

  return (
    <div className="grid grid-flow-col p-3 mt-2 shadow-lg">
      <div className="flex col-span-2">
        <img
          onClick={toggleMenuHandler}
          className="mx-1 h-6 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        />
        <a href="/">
          <img
            className="h-6 mx-4"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          />
        </a>
      </div>
      <div className="col-span-8 px-10">
        <div>
          {/* onBlur is very fast, due to this the onClick event in the li tag does not update the state so we need to use setTimeout */}
          <input
            value={searchQuery}
            className="w-1/2 py-2 px-4 border border-gray-400 rounded-l-full"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <button
            className="mr-2 px-5 py-2 border border-gray-400 rounded-r-full bg-gray-100"
            onClick={() => refreshHomePageResults()}
          >
            🔎
          </button>
        </div>
        <div className="absolute pt-2 px-5 w-[37rem] rounded-lg bg-white border-gray-100">
          <ul>
            {showSuggestions &&
              suggestions.map((s) => {
                return (
                  <li
                    key={s}
                    className="px-2 py-2 shadow-sm hover:bg-gray-100"
                    onClick={(e) =>
                      refreshHomePageResults(e.target.textContent)
                    }
                  >
                    {s}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="col-span-2">
        <img
          className="h-8"
          alt="user"
          src="https://t4.ftcdn.net/jpg/04/62/63/65/360_F_462636502_9cDAYuyVvBY4qYJlHjW7vqar5HYS8h8x.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
