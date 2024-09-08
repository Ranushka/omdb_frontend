import SearchBar from '@/components/SearchBar';
import MovieList from '@/components/MovieList';
import MovieDetail from '@/components/MovieDetail';
import FilterComponents from '@/components/Filters/FilterList';
import { SearchProvider } from "@/context/SearchContext";

export default function Home() {
  return (
    <SearchProvider>
      <div className="container mx-auto p-8 h-[calc(100vh-80px)]">
        <div className="flex justify-between bg-gray-700 text-white overflow-auto">
          <SearchBar />
          <FilterComponents />
        </div>
        <div className="flex h-full">
          <aside className="w-1/3 bg-gray-200 h-full overflow-y-scroll">
            <MovieList />
          </aside>
          <main className="w-2/3 bg-gray-100 h-full">
            <MovieDetail />
          </main>
        </div>
      </div>
    </SearchProvider>
  );
}
