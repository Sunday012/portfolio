"use client";
import React from "react";
import { CompaniesDetails, Companies } from "@/constants";
import { useState } from "react";
export const About = () => {
  const [selectedCompany, setSelectedCompany] = useState("Vierra LLC");
  return (
    <section className="mt-24 lg:mt-0">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h2 className="dark:text-[#9e9b9b] text-blue-800 lg:text-3xl text-xl font-bold">
          My Experience
        </h2>
        <div className="w-[80%]">
          <div className="flex items-center border-b dark:border-b-[#9e9b9b] border-b-blue-800">
            {Companies.map((place, id) => (
              <button
                className={`py-5 px-10 hover:bg-slate-300 dark:hover:bg-stone-600 dark:hover:text-[#00d4ff] hover:text-blue-800 
            ${
              selectedCompany === place.name
                ? "bg-slate-300 dark:bg-stone-600 dark:text-[#00d4ff] text-blue-800 border-b border-b-blue-900 dark:border-b-[#00d4ff]"
                : "text-[#9e9b9b]"
            } 
            rounded-t-md items-center text-nowrap w-full`}
                key={id}
                onClick={() => setSelectedCompany(place.name)}
              >
                {place.name}
              </button>
            ))}
          </div>
          {CompaniesDetails.filter(
            (details) => details.name === selectedCompany
          ).map((placedetails, id) => (
            <div className="flex flex-col justify-start mt-6 gap-2" key={id}>
              <div className="text-[#9e9b9b] text-xl font-semibold">
                {placedetails.role}
                <span className="dark:text-[#00d4ff] text-blue-800">
                  {" "}
                  @{placedetails.name}
                </span>
              </div>
              <span className="text-[#9e9b9b] mb-4">
                {placedetails.dateworked}
              </span>
              <div className="flex flex-col items-center justify-center">
                {placedetails.workdone.map((work, id) => (
                  <ul
                    className="text-[#9e9b9b] flex flex-col gap-4 w-[70%]"
                    key={id}
                  >
                    <li>{work.task}</li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
