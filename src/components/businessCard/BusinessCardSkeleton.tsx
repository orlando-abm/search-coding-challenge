export const BusinessCardSkeleton = () => {
  return (
      <article className="business-card grid grid-cols-5 gap-2 p-4 border rounded-md mb-4 border-gray-200 animate-pulse">
          <div className="col-span-2 w-full h-48 bg-gray-200 rounded-lg"></div>
          <div className="col-span-3 flex flex-col justify-center gap-3">
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
              <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gray-200 rounded-full shrink-0"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
              <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gray-200 rounded-full shrink-0"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
              <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gray-200 rounded-full shrink-0"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
          </div>
      </article>
  );
};
