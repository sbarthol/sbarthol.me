import React from "react";
import Launch from "./Launch.js";
import Github from "./Github.js";

function Link({ href, children }) {
  return (
    <a href={href} class="underline hover:text-indigo-500">
      {children}
    </a>
  );
}

function Card({ title, skills, image, github, app, children }) {
  return (
    <div class="font-mono tracking-tighter m-8 max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-4xl">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img
            class="h-48 w-full object-cover md:w-60 md:h-full"
            src={image}
            alt="error"
          ></img>
        </div>
        <div class="block w-full">
          <div class="p-6">
            <p class="mt-1 text-3xl leading-none font-bold text-black">
              {title}
            </p>
            <div class="mt-2 text-gray-500">{children}</div>
            <div class="mt-3 space-x-4 flex items-start justify-end">
              <div class="flex space-x-2 flex-auto">
                {skills.map((skill) => (
                  <div class="w-auto font-sans px-1 text-white rounded-md bg-indigo-500">
                    {skill}
                  </div>
                ))}
              </div>
              {app !== undefined && (
                <a href={app}>
                  <Launch />
                </a>
              )}
              {github !== undefined && (
                <a href={github}>
                  <Github />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card, Link };
