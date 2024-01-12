import Image from "next/image";
import React from "react";

interface RatingsProps {
  rating: number; // 1-5 stars
  numReviews: number;
}

const Ratings: React.FC<RatingsProps> = ({ rating, numReviews }) => {
  const totalStars = 5;

  return (
    <div className="flex items-center space-x-1 mr-1">
      {[...Array(totalStars)].map((_, index) => (
        <Image
          key={index}
          src={
            index < rating
              ? "/interface-icon-star_full.svg"
              : "/interface-icon-star_empty.svg"
          }
          alt="Star"
          width={14}
          height={14}
        />
      ))}
      <div className="text-sky-600 text-sm font-semibold underline leading-tight pl-1">
        {numReviews} reviews
      </div>
    </div>
  );
};

export default Ratings;
