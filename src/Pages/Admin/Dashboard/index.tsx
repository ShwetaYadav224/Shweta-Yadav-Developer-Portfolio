import { useState } from "react";
import { useProjects } from "../../../hooks/dashboard-hooks/useProjects";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authStateAtom, clearAuthState } from "../../../hooks/atoms/authStateAtom";
import type { Project } from "../../../types/project";
import { ProjectsTable, ProjectModal } from "./Projects";

const Dashboard = () => {
  const { projects, loading, error, addProject, updateProject, deleteProject } = useProjects();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const navigate = useNavigate();
  const authState = useRecoilValue(authStateAtom);
  const setAuth = useSetRecoilState(authStateAtom);

  const handleLogout = () => {
    clearAuthState();
    setAuth({ isAuthenticated: false, userEmail: null, uid: null });
    navigate("/admin/login");
  };

  const openAddModal = () => {
    setEditingProject(null);
    setIsModalOpen(true);
  };

  const openEditModal = (project: Project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProject(null);
  };

  const handleSubmit = async (projectData: Omit<Project, "id">) => {
    if (editingProject?.id) {
      await updateProject(editingProject.id, projectData);
    } else {
      await addProject(projectData);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteProject(id);
      } catch (err) {
        console.error("Error deleting project:", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Admin Dashboard
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Welcome, {authState.userEmail}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Projects Section */}
        <ProjectsTable
          projects={projects}
          loading={loading}
          error={error}
          onEdit={openEditModal}
          onDelete={handleDelete}
          onAddNew={openAddModal}
        />
      </main>

      {/* Add/Edit Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        editingProject={editingProject}
      />
    </div>
  );
};

export default Dashboard;