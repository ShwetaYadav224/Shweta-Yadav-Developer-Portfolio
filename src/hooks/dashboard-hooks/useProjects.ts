import { useState, useEffect, useCallback } from "react";
import { useFirebaseFirestore } from "../Firebase/useFirebaseFirestore";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore/lite";
import type { Project } from "../../types/project";

export const useProjects = () => {
  const db = useFirebaseFirestore();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const projectsRef = collection(db, "projects");
      const q = query(projectsRef, orderBy("number", "asc"));
      const snapshot = await getDocs(q);
      const projectsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Project[];
      setProjects(projectsData);
    } catch (err) {
      console.error("Error fetching projects:", err);
      setError("Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  }, [db]);

  const addProject = useCallback(
    async (project: Omit<Project, "id">) => {
      try {
        setError(null);
        const projectsRef = collection(db, "projects");
        const docRef = await addDoc(projectsRef, {
          ...project,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        const newProject = { ...project, id: docRef.id };
        setProjects((prev) => [...prev, newProject]);
        return newProject;
      } catch (err) {
        console.error("Error adding project:", err);
        setError("Failed to add project");
        throw err;
      }
    },
    [db]
  );

  const updateProject = useCallback(
    async (id: string, project: Partial<Project>) => {
      try {
        setError(null);
        const projectRef = doc(db, "projects", id);
        await updateDoc(projectRef, {
          ...project,
          updatedAt: new Date(),
        });
        setProjects((prev) =>
          prev.map((p) => (p.id === id ? { ...p, ...project } : p))
        );
      } catch (err) {
        console.error("Error updating project:", err);
        setError("Failed to update project");
        throw err;
      }
    },
    [db]
  );

  const deleteProject = useCallback(
    async (id: string) => {
      try {
        setError(null);
        const projectRef = doc(db, "projects", id);
        await deleteDoc(projectRef);
        setProjects((prev) => prev.filter((p) => p.id !== id));
      } catch (err) {
        console.error("Error deleting project:", err);
        setError("Failed to delete project");
        throw err;
      }
    },
    [db]
  );

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return {
    projects,
    loading,
    error,
    fetchProjects,
    addProject,
    updateProject,
    deleteProject,
  };
};
