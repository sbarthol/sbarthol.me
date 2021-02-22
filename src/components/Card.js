import React from "react";
import Launch from "./Launch.js";
import Github from "./Github.js";

function Card({ title, text, skills, image }) {
  return (
    <div class="m-8 max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-3xl">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img
            class="h-48 w-full object-cover md:w-48 md:h-full"
            src={image}
            alt="error"
          ></img>
        </div>
        <div class="block w-full">
          <div class="p-6">
            <p class="mt-1 text-xl leading-none font-bold text-black">
              {title}
            </p>
            <p class="mt-2 text-gray-500">{text}</p>
            <div class="mt-3 space-x-2 flex items-start justify-end">
              <div class="flex space-x-2 flex-auto">
                {skills.map((skill) => (
                  <div class="w-min font-sans px-1 text-white rounded-md bg-indigo-500">
                    {skill}
                  </div>
                ))}
              </div>
              <a href="https://github.com/sbarthol/scoogle">
                <Launch />
              </a>
              <a href="https://github.com/sbarthol/scoogle">
                <Github />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
