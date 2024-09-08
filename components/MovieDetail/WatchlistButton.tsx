"use client";

import { useState, useEffect } from "react";
import { BookmarkIcon } from "@heroicons/react/20/solid";

interface WatchlistButtonProps {
  selectedMovieID: string;
}

const WatchlistButton: React.FC<WatchlistButtonProps> = ({ selectedMovieID }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const watchList = JSON.parse(localStorage.getItem("watchList") || "[]");
    setIsSaved(watchList.includes(selectedMovieID));
  }, [selectedMovieID]);

  const toggleWatchlist = () => {
    let watchList = JSON.parse(localStorage.getItem("watchList") || "[]");
    if (watchList.includes(selectedMovieID)) {
      watchList = watchList.filter((id: string) => id !== selectedMovieID);
    } else {
      watchList.push(selectedMovieID);
    }
    localStorage.setItem("watchList", JSON.stringify(watchList));
    setIsSaved(!isSaved);
  };

  const savedIndicatorClass = isSaved ? 'text-yellow-500' : 'text-gray-500';

  return (
    <button
      onClick={toggleWatchlist}
      type="button"
      className="inline-flex items-center gap-x-1.5 rounded-md px-3 py-2 border text-sm font-semibold border-gray-500 text-gray-500 hover:bg-gray-300"
    >
      <BookmarkIcon aria-hidden="true" className={`h-5 w-5 ${savedIndicatorClass}`} />
      Watchlist
    </button>
  );
};

export default WatchlistButton;
