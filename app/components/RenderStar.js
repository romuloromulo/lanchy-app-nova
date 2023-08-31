import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
function renderStars(rating) {
  const totalStars = 5; // Total de estrelas possíveis
  const filledStars = Math.round(rating); // Número de estrelas preenchidas

  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < filledStars) {
      stars.push(
        <span key={i}>
          <AiFillStar size={33} />
        </span>
      ); // Estrela preenchida (★)
    } else {
      stars.push(
        <span key={i}>
          <AiOutlineStar size={33} />
        </span>
      ); // Estrela vazia (☆)
    }
  }

  return stars;
}

function RatingStars({ rating }) {
  return <div className="flex gap-1 text-red-600">{renderStars(rating)}</div>;
}

export default RatingStars;
