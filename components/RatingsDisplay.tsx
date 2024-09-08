"use client";

import { useSearch } from "@/context/SearchContext";

const RatingsDisplay: React.FC = () => {
  const { movieDetails } = useSearch();

  return (
    <div className="flex justify-between items-center movie_detail_rating">
      {movieDetails?.Ratings.map((rating: { Source: string; Value: string }, index: number) => (
        <div key={index} className="text-center flex-1">
          <p>{rating.Value}</p>
          <p>{rating.Source}</p>
        </div>
      ))}
    </div>
  );
};

export default RatingsDisplay;
