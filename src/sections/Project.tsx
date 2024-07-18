import React, { useState, useEffect } from 'react';
import '../style/Project.css'
import axios from 'axios';
import EditProjectForm from '../Components/editProjectForm';
import CreateProjectForm from '../Components/CreateProjectForm';

export interface ProjectProps {
    id: number;
    image: string;
    description: string;
    title: string;
    longDescription: string;
}

const Project: React.FC = () => {
    const [projectBox, setProjectBox] = useState<ProjectProps[]>([]);
    const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);
    const [showPopup, setShowPopup] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showCreatePopup, setShowCreatePopup] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.get('http://localhost:3000/project');
            setProjectBox(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    const openEditPopup = () => setShowEditPopup(true);
    const closeEditPopup = () => setShowEditPopup(false);
    const openCreatePopup = () => setShowCreatePopup(true);
    const closeCreatePopup = () => setShowCreatePopup(false);

    const createProject = async (newProject: Omit<ProjectProps, 'id'>) => {
        try {
            const response = await axios.post('http://localhost:3000/projects', newProject);
            setProjectBox([...projectBox, response.data]);
            closeCreatePopup();
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };

    const editProject = async (updatedProject: ProjectProps) => {
        try {
            await axios.put(`http://localhost:3000/projects/${updatedProject.id}`, updatedProject);
            setProjectBox(projectBox.map(p => p.id === updatedProject.id ? updatedProject : p));
            setSelectedProject(updatedProject);
            closeEditPopup();
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };

    const deleteProject = async (id: number) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus proyek ini?')) {
            try {
                await axios.delete(`http://localhost:3000/projects/${id}`);
                setProjectBox(projectBox.filter(p => p.id !== id));
                closePopup();
            } catch (error) {
                console.error('Error deleting project:', error);
            }
        }
    };

    const openPopup = (project: ProjectProps) => {
        setSelectedProject(project);
        setShowPopup(true);
    }

    const closePopup = () => {
        setShowPopup(false);
    }

    const navigateProject = (direction: 'prev' | 'next') => {
        if (!selectedProject) return;
        const currentIndex = projectBox.findIndex(p => p.title === selectedProject.title);
        let newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;
        if (newIndex < 0) newIndex = projectBox.length - 1;
        if (newIndex >= projectBox.length) newIndex = 0;
        setSelectedProject(projectBox[newIndex]);
    }

    return (
        <>
            <section className="project h-screen flex flex-col justify-center items-center">
                <a className="text-4xl mb-8">My Project</a>
                <div className="carousel carousel-center bg-neutral rounded-box w-3/6 p-4">
                    {projectBox.map((project, index) => (
                        <div key={project.id} className="carousel-item relative overflow-hidden rounded-box group gap-6 w-full">
                            <img src={project.image} className="rounded-box w-full h-96 object-scale-down flex mr-8 p-8 pr-1 " alt={`Project ${index + 1}`} />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white p-2 transform translate-y-full transition-transform duration-800 ease-in-out group-hover:translate-y-0">
                                <p>{project.description}</p>
                                <button className="btn hover:border-indigo-700 rounded flex justify-center mt-2" onClick={() => openPopup(project)}>
                                    Find out more
                                    <i className="ph-arrow-right text-3xl" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {showPopup && selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-slate-800 rounded-lg p-6 w-3/4 h-3/4 relative">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                            <button onClick={closePopup} className="text-2xl">&times;</button>
                        </div>
                        <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-3/5 object-scale-down mb-4" />
                        <p className="mb-4">{selectedProject.longDescription}</p>
                        <div className="absolute bottom-4 left-4 flex gap-2">
                            <button className="btn" onClick={() => navigateProject('prev')}>Previous</button>
                            <button className="btn" onClick={() => navigateProject('next')}>Next</button>
                        </div>
                        <div className="absolute bottom-4 right-4 flex space-x-2">
                            <button className="btn text-white bg-green-600 hover:bg-green-700" onClick={openEditPopup}>Edit</button>
                            <button className="btn text-white bg-red-600 hover:bg-red-700" onClick={() => deleteProject(selectedProject.id)}>Delete</button>
                            <button className="btn text-white bg-blue-600 hover:bg-blue-700" onClick={openCreatePopup}>Create</button>
                        </div>
                    </div>
                </div>
            )}

            {showEditPopup && selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 w-1/2 max-h-3/4 overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-4">Edit Project</h2>
                        <EditProjectForm project={selectedProject} onSave={editProject} onClose={closeEditPopup} />
                    </div>
                </div>
            )}

            {showCreatePopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 w-1/2 max-h-3/4 overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-4">Create New Project</h2>
                        <CreateProjectForm onSave={createProject} onClose={closeCreatePopup} />
                    </div>
                </div>
            )}
        </>
    )
}

export default Project;
