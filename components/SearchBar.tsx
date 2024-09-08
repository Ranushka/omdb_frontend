"use client";

import { useState } from 'react';
import { useSearch } from '@/context/SearchContext';


const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const { setQueryCtx } = useSearch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQueryCtx(query);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 w-full">
      <input
        type="text"
        className="border text-gray-900 p-2 rounded w-full"
        placeholder="Search movies..."
        value={query}
        name="query"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;


