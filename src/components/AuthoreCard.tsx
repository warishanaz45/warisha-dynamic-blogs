import React from "react";

export default function AuthoreCard() {
  return (
    <div className="bg-black shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animate-fade-in-up">
        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-400"
          src="/profile.jpg"
          alt="Author Image"
        />
        <div>
          <h3 className="text-white text-xl font-bold">Warisha Naz</h3>
          <p className="text-slate-500">
            Front-end Developer | UI/UX Enthusiast | Tech Enthusiast | Digital
            Marketer
          </p>
        </div>
      </div>
      <p className="mt-4 text-white leading-relaxed">
        I am a front-end developer with a passion for creating interactive and
        dynamic web experiences, currently learning Next.js. I am studying IT
        through the Governor Initiative program while pursuing an Associate
        Degree in Commerce (ADC). I have also learned digital marketing and
        enjoy exploring innovative technologies
      </p>
      <div className="mt-4 flex space-x-3">
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Twitter
        </a>
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          YouTube
        </a>
      </div>
    </div>
  );
}
