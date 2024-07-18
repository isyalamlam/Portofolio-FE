import React from 'react';

interface SkillProps {
    Language: string;
    logo: string;
}

const skills: SkillProps[] = [
    { Language: 'HTML', logo: 'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png' },
    { Language: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' },
    { Language: 'JAVASCRIPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png' },
    { Language: 'REACT', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
    { Language: 'VUE', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png' },
]

const Skill: React.FC = () => {
    return (
        <>
            <section className="skill h-screen flex flex-col justify-center items-center">
                <div className="skill-title text-white text-5xl mb-10">
                    <h1>My Skill</h1>
                </div>
                <div className="skill-content w-full flex flex-col items-center justify-center gap-6">
                    {skills.map((skill) => (
                        <div key={skill.Language} className="skill-box rounded w-full max-w-2xl bg-slate-800 h-16 flex justify-between items-center px-6">
                            <span className='text-white text-left'>{skill.Language}</span>
                            <img src={skill.logo} alt={`${skill.Language}`} className="w-12 h-12 object-cover rounded" />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Skill;