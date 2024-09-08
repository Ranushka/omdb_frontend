"use client";

import { useState } from 'react';
import { useSearch } from '@/context/SearchContext';
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";


const SearchBar: React.FC = () => {
  const { setQueryCtx, queryCtx } = useSearch();
  const [query, setQuery] = useState(queryCtx || '');


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQueryCtx(query);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 w-full relative">
      <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center pl-3">
        <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
      </div>
      <input
        autoFocus
        type="text"
        className="text-gray-100 p-2 pl-10 rounded w-full h-full outline-none bg-gray-800 border-0 focus:bg-gray-900 focus:ring-1"
        placeholder="Search movies..."
        value={query}
        name="query"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;


