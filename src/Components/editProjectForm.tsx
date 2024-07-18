import React, { useState } from 'react';
import { ProjectProps } from '../sections/Project';

const EditProjectForm: React.FC<{ project: ProjectProps; onSave: (project: ProjectProps) => void; onClose: () => void }> = ({ project, onSave, onClose }) => {
    const [editedProject, setEditedProject] = useState(project);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setEditedProject({ ...editedProject, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSave(editedProject);
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" value={editedProject.title} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Judul" />
        <input type="text" name="description" value={editedProject.description} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Deskripsi" />
        <textarea name="longDescription" value={editedProject.longDescription} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Deskripsi Panjang" />
        <input type="text" name="image" value={editedProject.image} onChange={handleChange} className="w-full p-2 border rounded" placeholder="URL Gambar" />
        <div className="flex justify-end space-x-2">
          <button type="button" onClick={onClose} className="btn">Batal</button>
          <button type="submit" className="btn btn-primary">Simpan</button>
        </div>
      </form>
    );
  };

export default EditProjectForm;