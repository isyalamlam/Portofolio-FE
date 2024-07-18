import React from 'react';

interface Experience {
    years: string;
    position: string;
    company: string;
    logo: string;
}

interface Education {
    years: string;
    degree: boolean | string;
    institution: string;
}

const experiences: Experience[] = [
    { years: '2023', position: 'Front End Developer', company: 'PT.Curaweda Palagan Simbiotect.', logo: 'C' },
    { years: '-', position: 'Coming soon', company: '-', logo: 'A' },
    { years: '-', position: 'Coming soon', company: '-', logo: 'B' },
    { years: '-', position: 'Coming soon', company: '-', logo: 'C' },
];

const educations: Education[] = [
    {
        years: '2022-Now',
        degree: 'SMK Negri 4 Bandung',
        institution: 'Siswa RPL',
    },
    {
        years: '2018-2022',
        degree: 'SMP Negri 2 Bojongsoang',
        institution: 'Siswa',
    },
    {
        years: '2012-2018',
        degree: 'SD YKPPK',
        institution: 'siswa',
    },
];

const Poertofolio: React.FC = () => {
    return (
        <section className="poertofolio w-screen h-screen flex justify-center items-center">
            <div className=" text-white p-8 rounded-lg w-5/6">
                <h2 className="text-2xl font-bold mb-6">Education and Experience</h2>
                <div className="flex gap-8">
                    <div className="flex-1">
                        {experiences.map((exp, index) => (
                            <div key={index} className="mb-4 bg-gray-800 p-4 rounded">
                                <div className="flex items-center mb-2">
                                    <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-2">{exp.logo}</span>
                                    <div>
                                        <p className="text-sm text-gray-400">{exp.years}</p>
                                        <p className="font-semibold">{exp.company}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-400">{exp.position}</p>
                            </div>
                        ))}
                    </div>
                    <div className="w-60">
                        {educations.map((edu, index) => (
                            <div key={index} className="mb-4">
                                <p className="text-sm text-yellow-500">{edu.years}</p>
                                <h3 className="font-semibold">{edu.degree}</h3>
                                <p className="text-sm text-gray-400">{edu.institution}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Poertofolio;