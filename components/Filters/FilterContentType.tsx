"use client";

import { useState } from 'react';
import { useSearch } from "@/context/SearchContext";
import { FilterTypeProps } from "@/types/movieTypes";
import { filterContentTypes } from "@/const";

const FilterList: React.FC = () => {
  const { setFilterType } = useSearch();
  const [selectedType, setSelectedType] = useState<string>('any');

  const handleFilterChange = (value: string) => {
    setSelectedType(value);
    setFilterType(value as FilterTypeProps);
  };

  return (
    <div className="flex items-center space-x-4">
      {filterContentTypes.map((option) => (
        <label key={option} className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="type"
            value={option}
            checked={selectedType === option}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="form-radio h-4 w-4 mr-1 cursor-pointer border-gray-300 text-blue-600 focus:ring-blue-600"
          />
          <span className="text-xs capitalize">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterList;
