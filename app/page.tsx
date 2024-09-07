import SearchBar from '@/components/SearchBar';
import MovieList from '@/components/MovieList';
import MovieDetail from '@/components/MovieDetail';
import FilterComponents from '@/components/FilterComponents';

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between bg-gray-700 text-white">
        <SearchBar />
        <FilterComponents />
      </div>
      <div className="flex">
        <aside className="w-1/3 bg-gray-200">
          <div className="mt-4">
            <MovieList />
          </div>
        </aside>
        <main className="w-2/3 bg-gray-100">
          <MovieDetail />
        </main>
      </div>
    </div>
  );
}
