import React from "react";
import Type from "./Type";
import MyPic from "../../Assets/Maleeha.png"
import About from "../About/About";

function Home() {
  return (
    <section>
      {/* <div className="flex flex-col items-center justify-center pt-8">
        <div className="flex flex-wrap items-center justify-between w-full max-w-5xl px-4">
          <div className="w-full md:w-7/12 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold pb-4">
              Hi There!{" "}
              <span role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="text-5xl font-bold mb-6">
              I'M
              <strong className="text-indigo-600"> Maleeha Kaikaus</strong>
            </h1>

            

            <div className="pt-6 pb-12 text-left text-3xl">
              <Type />
            </div>

            <div className="w-full md:w-5/12 flex justify-center md:justify-end">
              <img
                src={MyPic}
                alt="home pic"
                className="max-h-96 w-auto"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col items-center justify-center pt-8">
        <div className="flex flex-wrap items-center justify-between w-full max-w-screen-xl px-4">
          <div className="w-full md:w-7/12">
            <h1 className="text-4xl font-bold pb-4">
              Hi There!{" "}
              <span role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="text-5xl font-bold mb-6">
              I'm
              <strong className="text-red-400"> Maleeha Kaikaus</strong>
            </h1>

            <div className="pt-6 pb-6 text-left text-3xl font-bold">
              <Type />
            </div>
            <p className="text-lg text-gray-400 pb-12">
              A professional <span className="font-bold">Software Engineer</span> with a strong focus on <span className="font-bold">Frontend development</span>, specializing in the creation of intuitive and visually engaging user interfaces that enhance user experience and facilitate seamless interactions with backend systems. Committed to continuous learning and innovation in the field of frontend development.
            </p>
            
          </div>

          <div className="w-full md:w-5/12 flex justify-center md:justify-end">
            <div className="bg-white rounded-full flex justify-center items-center mb-6">
              <img
                // src={MyPic}
                alt="home pic"
                className="max-h-72 w-auto rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <About /> */}
    </section>
  );
}

export default Home;
