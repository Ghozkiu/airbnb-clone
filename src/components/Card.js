import React from "react";

export default function Card(props) {
  let badgeText =
    props.openSpots === 0
      ? "SOLD OUT"
      : props.location === "Online"
      ? "ONLINE"
      : "";

  return (
    <div className="flex flex-col card text-sm relative">
      {badgeText && (
        <div className="absolute mt-2 ml-2 self-start rounded-sm font-bold bg-white px-1 py-0.5">
          {badgeText}
        </div>
      )}
      <img className="w-full" src={`images/${props.coverImg}`} alt="card" />
      <div className="flex aling-center">
        <img className="h-4" src="images/star.png" alt="star" />
        <span>{props.stats.rating}</span>
        <span className="text-gray-500">({props.stats.reviewCount}) - </span>
        <span className="text-gray-500">{props.location}</span>
      </div>
      <p className="overflow-hidden	text-ellipsis">{props.title}</p>
      <p>
        <span className="font-bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
