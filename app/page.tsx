import SearchBar from '@/components/SearchBar';
import MovieList from '@/components/MovieList';
import MovieDetail from '@/components/MovieDetail';
import FilterComponents from '@/components/Filters/FilterList';
import { SearchProvider } from "@/context/SearchContext";

export default function Home() {
  return (
    <SearchProvider>
      <div className="container mx-auto p-0 lg:p-8 lg:h-[calc(100vh-80px)]">
        <div className="flex flex-col lg:flex-row justify-between bg-gray-700 text-white overflow-auto">
          <SearchBar />
          <FilterComponents />
        </div>
        <div className="flex flex-col lg:flex-row h-full">
          <aside className="lg:w-1/3 w-full bg-gray-200 h-full overflow-y-scroll ">
            <MovieList />
          </aside>

          <main
            className={`
             lg:w-2/3 w-full lg:static inset-0 bg-gray-100 h-auto lg:h-full
             `}>
            <MovieDetail />
          </main>
        </div>
      </div>
    </SearchProvider>
  );
}
