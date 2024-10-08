import React from 'react'
import { Code, Database, Globe, Laptop, Book, PenTool, GitBranch, Terminal } from 'lucide-react'

const SkillHexagon = ({ skill, icon, level, category }) => {
  const colors = {
    programming: { bg: 'bg-blue-500', text: 'text-blue-100' },
    frameworks: { bg: 'bg-green-500', text: 'text-green-100' },
    miscellaneous: { bg: 'bg-purple-500', text: 'text-purple-100' },
    languages: { bg: 'bg-red-500', text: 'text-red-100' },
  }

  return (
    <div
    //   whileHover={{ scale: 1.1 }}
      className="bg-white text-red-400 w-40 h-20 flex flex-col items-center justify-center text-center p-4 transform transition-transform duration-300 ease-in-out"
    >
      {/* {React.createElement(icon, { className: "w-8 h-8 mb-2" })} */}
      <span className="font-semibold text-sm">{skill}</span>
      <div className="mt-2 flex">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full mx-0.5 ${
              i < level ? 'bg-red-500' : 'bg-red-300 bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const skills = [
    { name: 'Python', icon: Code, level: 3, category: 'programming' },
    { name: 'HTML', icon: Code, level: 3, category: 'programming' },
    { name: 'CSS', icon: PenTool, level: 3, category: 'programming' },
    { name: 'PHP', icon: Code, level: 3, category: 'programming' },
    { name: 'MySQL', icon: Database, level: 3, category: 'programming' },
    { name: 'JavaScript', icon: Code, level: 2, category: 'programming' },
    { name: 'OOP', icon: Code, level: 2, category: 'programming' },
    { name: 'C++', icon: Code, level: 2, category: 'programming' },
    { name: 'React', icon: Code, level: 3, category: 'frameworks' },
    { name: 'Redux', icon: Code, level: 3, category: 'frameworks' },

    { name: 'Laravel', icon: Code, level: 3, category: 'frameworks' },
    { name: 'Bootstrap', icon: PenTool, level: 3, category: 'frameworks' },
    { name: 'Tailwind', icon: PenTool, level: 3, category: 'frameworks' },
    { name: 'Material UI', icon: PenTool, level: 3, category: 'frameworks' },
    { name: 'Jupyter', icon: Book, level: 3, category: 'frameworks' },
    { name: 'Matplotlib', icon: Book, level: 3, category: 'frameworks' },
    { name: 'Git', icon: GitBranch, level: 3, category: 'miscellaneous' },
    { name: 'Windows', icon: Laptop, level: 3, category: 'miscellaneous' },
    { name: 'Linux', icon: Terminal, level: 3, category: 'miscellaneous' },
    { name: 'LaTeX', icon: Book, level: 3, category: 'miscellaneous' },
    { name: 'MS Office', icon: Book, level: 3, category: 'miscellaneous' },
    // { name: 'Bengali', icon: Globe, level: 3, category: 'languages' },
    // { name: 'English', icon: Globe, level: 3, category: 'languages' },
    // { name: 'Hindi', icon: Globe, level: 1, category: 'languages' },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <SkillHexagon
              key={index}
              skill={skill.name}
              icon={skill.icon}
              level={skill.level}
              category={skill.category}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl font-semibold mb-4">Additional Achievements</p>
          <div className="flex justify-center space-x-8">
            <div className="bg-yellow-100 p-4 rounded-lg">
              <p className="text-yellow-800 font-bold">100+</p>
              <p className="text-yellow-600">Online Judge Problems Solved</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-green-800 font-bold">10+</p>
              <p className="text-green-600">Software Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </section>
  )
}