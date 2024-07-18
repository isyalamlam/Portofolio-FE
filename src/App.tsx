// App.tsx
import './App.css';
import Navbar from '../src/Components/Navbar';
import About from '../src/sections/About';
import Porto from '../src/sections/Porto';
import Skill from '../src/sections/Skill';
import Project from '../src/sections/Project';

function App() {
    return (
        <>
            <Navbar />
            <div className="pt-16"> {/* Adjust this value based on your Navbar's height */}
                <section className="Hero h-screen">
                    <div className="hero-content flex skeIeton gap-20 rounded-r-lg Right-to-left">
                        <div className="avatar ml-20 pl-10">
                            <div className="hero-start wavatar p-10 rounded-full">
                                <img src="../src/assets/WhatsApp Image 2024-07-18 at 22.53.47_55c8d8f8.jpg" />
                            </div>
                        </div>
                        <div className="flex flex-col p-20 ">
                            <a className="text-8xl ml-14 mb-4 text-white">Hello!</a>
                            <a className="text-2xl vertical-text ml-6 mt-5 tracking-highest text-white">I'M</a>
                            <a className="text-4xl ml-14 -mt-12 text-white">Isya Lamlam Al Sabil</a>
                            <a className="text-4xl ml-14 text-white">Full Stack Developer</a>
                        </div>
                    </div>
                </section>
                <section id="about"> <About/> </section>
                <section id="experience"> <Porto/> </section>
                <section id="skill"> <Skill/> </section>
                <section id="project"> <Project/> </section>
            </div>
        </>
    );
}

export default App;
