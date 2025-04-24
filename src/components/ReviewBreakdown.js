import Rating from "./Rating";

export default function ReviewBreakdown() {
  const ratings = [
    { stars: 5, count: 45 },
    { stars: 4, count: 20 },
    { stars: 3, count: 10 },
    { stars: 2, count: 4 },
    { stars: 1, count: 2 },
  ];

  const total = ratings.reduce((sum, r) => sum + r.count, 0);

  return (
    <div className=" w-full md:max-w-[800px] space-y-3 mb-6 px-4">
      {ratings.map(({ stars, count }) => {
        const percentage = (count / total) * 100;
        return (
          <div
            key={stars}
            className="flex items-center space-x-3"
          >
            <Rating
              rate={stars}
              size="14px"
            />
            <div className="flex-1 h-3 bg-gray-200 rounded overflow-hidden">
              <div
                className="h-full bg-green-500 rounded"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <div className="text-sm text-gray-600 w-10 text-right">
              {Math.floor(percentage)}%
            </div>
          </div>
        );
      })}
    </div>
  );
}
