import Skeleton from "react-loading-skeleton";

const MovieDetailSkeleton: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex">
        <div className="flex-shrink-0 mt-4">
          <Skeleton width={200} height={300} className="rounded" />
        </div>
        <div className="flex-grow flex flex-col justify-between ml-4">
          <div className="flex justify-end">
            <Skeleton width={100} height={40} />
          </div>
          <div className="mt-auto">
            <Skeleton width={250} height={30} />
            <Skeleton width={150} height={20} />
            <Skeleton width={150} height={20} />
          </div>
        </div>
      </div>

      <hr className="my-4" />
      <Skeleton width="100%" height={20} />
      <hr className="my-4" />

      <div className="flex justify-between">
        <div className="text-center">
          <Skeleton width={60} height={20} />
          <Skeleton width={120} height={20} />
        </div>
        <div className="text-center">
          <Skeleton width={60} height={20} />
          <Skeleton width={120} height={20} />
        </div>
        <div className="text-center">
          <Skeleton width={60} height={20} />
          <Skeleton width={120} height={20} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailSkeleton;
