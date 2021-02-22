import React from "react";

function Card({ title, text, skills, image }) {
  return (
    <div class="m-8 max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img
            class="h-48 w-full object-cover md:w-48 md:h-full"
            src={image}
            alt="error"
          ></img>
        </div>
        <div class="p-8">
          <p class="block mt-1 text-lg leading-none font-medium text-black">
            {title}
          </p>
          <p class="mt-2 text-gray-500">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
