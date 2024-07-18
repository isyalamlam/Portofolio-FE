import React, { useState } from 'react';
import { ProjectProps } from '../sections/Project'; // Sesuaikan path sesuai struktur proyek Anda

interface CreateProjectFormProps {
  onSave: (project: Omit<ProjectProps, 'id'>) => void;
  onClose: () => void;
}

const CreateProjectForm: React.FC<CreateProjectFormProps> = ({ onSave, onClose }) => {
  const [newProject, setNewProject] = useState<Omit<ProjectProps, 'id'>>({
    title: '',
    description: '',
    longDescription: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(newProject);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        value={newProject.title}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        placeholder="Judul"
        required
      />
      <input
        type="text"
        name="description"
        value={newProject.description}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        placeholder="Deskripsi"
        required
      />
      <textarea
        name="longDescription"
        value={newProject.longDescription}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        placeholder="Deskripsi Panjang"
        required
      />
      <input
        type="text"
        name="image"
        value={newProject.image}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        placeholder="URL Gambar"
        required
      />
      <div className="flex justify-end space-x-2">
        <button type="button" onClick={onClose} className="btn">Batal</button>
        <button type="submit" className="btn btn-primary">Simpan</button>
      </div>
    </form>
  );
};

export default CreateProjectForm;