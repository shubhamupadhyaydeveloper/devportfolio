import { cn } from "../../lib/utils";
import ScrollReveal from "../ScrollReveal";

interface SkillItemProps {
  name: string;
  level: number;
  color?: string;
}

const SkillItem = ({ name, level, color = "bg-primary" }: SkillItemProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-foreground/70">{level}%</span>
      </div>
      <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
        <div 
          className={cn("h-full rounded-full", color)}
          style={{ width: `${level}%`, transition: "width 1s ease-in-out" }}
        />
      </div>
    </div>
  );
};

const skills = [
  { name: "React / React Native", level: 95 },
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "HTML / CSS / Tailwind", level: 90 },
  { name: "MongoDB / PostgreSQL", level: 80 },
  { name: "GraphQL / REST APIs", level: 85 },
  { name: "CI/CD / DevOps", level: 75 },
  { name: "UI/UX Design", level: 70 }
];

const frontendSkills = ["React", "TypeScript", "Next.js", "TailwindCSS", "Redux", "React Native", "Vue.js", "Framer Motion"];
const backendSkills = ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "RESTful API", "Firebase", "AWS"];
const devopsSkills = ["Git", "GitHub Actions", "Docker", "Jest", "CI/CD", "Performance Optimization"];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills</h2>
          <div className="w-16 h-1 bg-primary mb-4"></div>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <p className="text-foreground/80 max-w-2xl mb-12">
            I've worked with a variety of technologies in the web and mobile development world.
            Here's an overview of my technical skill set.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            {skills.slice(0, 4).map((skill, index) => (
              <ScrollReveal key={skill.name} delay={200 + index * 100}>
                <SkillItem {...skill} />
              </ScrollReveal>
            ))}
          </div>
          <div>
            {skills.slice(4).map((skill, index) => (
              <ScrollReveal key={skill.name} delay={200 + index * 100}>
                <SkillItem {...skill} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <ScrollReveal delay={200}>
            <div className="glass-card rounded-xl p-6 h-full">
              <h3 className="text-xl font-bold mb-4 text-gradient">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map(skill => (
                  <span 
                    key={skill} 
                    className="text-sm px-3 py-1 rounded-full bg-secondary/50 text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="glass-card rounded-xl p-6 h-full">
              <h3 className="text-xl font-bold mb-4 text-gradient">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map(skill => (
                  <span 
                    key={skill} 
                    className="text-sm px-3 py-1 rounded-full bg-secondary/50 text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="glass-card rounded-xl p-6 h-full">
              <h3 className="text-xl font-bold mb-4 text-gradient">DevOps & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {devopsSkills.map(skill => (
                  <span 
                    key={skill} 
                    className="text-sm px-3 py-1 rounded-full bg-secondary/50 text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;