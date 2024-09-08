import Skeleton from "react-loading-skeleton";

const MovieListSkeleton: React.FC = () => {
  return (
    <div className="p-4 w-full">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="p-2 border-b border-gray-300 cursor-pointer"
        >
          <div className="flex items-center">
            <Skeleton width={64} height={96} className="mr-4" />
            <div>
              <Skeleton width={150} height={20} />
              <Skeleton width={80} height={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieListSkeleton;
