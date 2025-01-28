import { SkillsArray } from "../constants/Skills"

const Skills = () => {

    const skills = SkillsArray;

    const getIcons = (icon: String) => {
        return `../src/assets/skills/${icon.toLowerCase()}.svg`
    }

    return (
        <div className="flex flex-col p-10">
            <span className="lg:text-4xl text-xl header text-yellow-800">Skills</span>
            <div className="flex items-center justify-center flex-wrap gap-10">
                {skills.map((skill) => (
                    <div className="flex flex-col items-center justify-center text-xs" key={skill}>
                        <img className="lg:h-16 lg:w-16 h-10 w-10" src={getIcons(skill)} alt={skill} />
                        <div className="h-2"></div>
                        <span>{skill}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills