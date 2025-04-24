import React from "react";
import { Star } from "lucide-react";

function Rating({ rate, size = "12px" }) {
  return (
    <div className="flex justify-start w-auto items-cente gap-[3px]">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={size}
          className={`${
            index < rate
              ? "text-green-500 fill-green-500"
              : "text-green-200 fill-green-200"
          }`}
        />
      ))}
    </div>
  );
}

export default Rating;
