import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import app from "./config";

const storage = getStorage(app);

/**
 * Upload an image to Firebase Storage
 * @param file - The file to upload
 * @param path - The storage path (e.g., "projects/image-name.jpg")
 * @returns The download URL of the uploaded image
 */
export const uploadImage = async (file: File, path: string): Promise<string> => {
  const storageRef = ref(storage, path);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
};

/**
 * Delete an image from Firebase Storage
 * @param url - The download URL of the image to delete
 */
export const deleteImage = async (url: string): Promise<void> => {
  try {
    const storageRef = ref(storage, url);
    await deleteObject(storageRef);
  } catch (error) {
    console.error("Error deleting image:", error);
  }
};

/**
 * Generate a unique filename for upload
 * @param originalName - The original filename
 * @returns A unique filename with timestamp
 */
export const generateFileName = (originalName: string): string => {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 8);
  const extension = originalName.split('.').pop();
  return `${timestamp}-${randomString}.${extension}`;
};

export { storage };
