import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col">
      <img
        className="self-center"
        src="images/group-grid.png"
        alt="group of images"
      />
      <h1 className="text-2xl font-bold mt-3 text-left md:text-center">
        Online Experiences
      </h1>
      <p className="text-left md:text-center">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
