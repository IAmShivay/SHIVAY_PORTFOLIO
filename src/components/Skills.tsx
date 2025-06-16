
import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Redux", level: 88 },
        { name: "Material-UI", level: 85 },
        { name: "Framer Motion", level: 80 },
        { name: "Chart.js", level: 75 }
      ]
    },
    {
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 92 },
        { name: "MongoDB", level: 88 },
        { name: "RESTful APIs", level: 95 },
        { name: "GraphQL", level: 75 },
        { name: "JWT Auth", level: 85 }
      ]
    },
    {
      title: "Tools & Platforms",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "VS Code", level: 98 },
        { name: "Vercel", level: 85 },
        { name: "Cloudinary", level: 80 },
        { name: "CentOS 7", level: 70 },
        { name: "npm", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300">
            Proficient in modern web technologies and development tools
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${category.color} mb-6`}>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out ${
                          hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'animate-pulse' : ''
                        }`}
                        style={{
                          width: `${skill.level}%`,
                          transform: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'scaleY(1.2)' : 'scaleY(1)'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-gray-900/80 to-gray-800/80 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-white">Core Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'MongoDB Query Language'].map((lang, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
