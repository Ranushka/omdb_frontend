'use client';

import { useState } from 'react';
import { useSearch } from '@/context/SearchContext';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const SearchBar: React.FC = () => {
  const { setQueryCtx, queryCtx } = useSearch();
  const [query, setQuery] = useState(queryCtx || '');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQueryCtx(query);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 w-full relative" role="search">
      <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center pl-3">
        <MagnifyingGlassIcon
          aria-hidden="true"
          className="h-5 w-5 text-gray-400"
        />
      </div>
      <input
        autoFocus
        type="text"
        className="text-gray-100 p-2 pl-10 rounded w-full h-14 outline-none bg-gray-800 border-0 focus:bg-gray-900 focus:ring-1"
        placeholder="Search movies..."
        value={query}
        name="query"
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <button
          type="submit"
          className="absolute right-6 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
        >
          Search
        </button>
      )}
    </form>
  );
};

export default SearchBar;
