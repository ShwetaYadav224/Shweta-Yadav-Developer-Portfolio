import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, orderBy, query } from "firebase/firestore/lite";
import app from "../Firebase/config";
import type { Project } from "../../types/project";

export const useFetchProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const db = getFirestore(app);
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
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
