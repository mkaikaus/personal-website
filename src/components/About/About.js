import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Who I am?</h2>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg">
          <p className="text-lg text-red-300 text-center">
            A professional <span className="font-semibold">Software Engineer</span> with a strong focus on <span className="font-semibold">Frontend development</span>. Specialize in creating intuitive and visually engaging user interfaces that enhance user experience and facilitate seamless interactions with backend systems. My technical expertise includes a range of programming languages, frameworks and libraries, and I utilize tools like Git to streamline my development processes. I am committed to continuous learning and innovation in the field of frontend development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;