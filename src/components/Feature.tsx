import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-black mb-40">
        <h2
          className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-900
       ease-in-out transform hover:translate-y-[-5px] hover:text-green-300 text-red-900"
        >
          Warisha Naz : Navigating The Secrets Of Technology In Tech Chronicles Blog!
        </h2>
        <br />
        <p className="text-center m-4 mt-4 text-sm text-white sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          Welcome to the world of innovation with Warisha Naz! I m a passionate learner and tech enthusiast, and I ve created Tech Chronicles to share my journey in the ever-changing world of technology. This blog will explore the latest trends and breakthroughs shaping our digital world. From artificial intelligence to web development, each article aims to inspire and inform you about the impact of technology. Join me in exploring the secrets of tech and the exciting possibilities of the future!
        </p>
        <div className="max-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-black animate-color-change">
            Exploring Our Categories
          </h1>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {["Technology", "HTML", "CSS", "Next JS", "Web Development"].map(
              (category, index) => (
                <div
                  key={index}
                  className="relative group p-6 bg-blue-200 rounded-lg shadow-lg hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600"
                >
                  <p className="text-center text-lg font-semibold">
                    {category}
                  </p>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out gap-8"></div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
