const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export interface CloudinaryResponse {
  secure_url: string;
  public_id: string;
  width: number;
  height: number;
  format: string;
  bytes: number;
}

/**
 * Upload an image to Cloudinary
 * @param file - The file to upload
 * @returns The uploaded image data including the URL
 */
export const uploadToCloudinary = async (file: File): Promise<CloudinaryResponse> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error("Cloudinary error:", data);
    throw new Error(data.error?.message || "Failed to upload image to Cloudinary");
  }

  return data;
};

/**
 * Generate a unique filename
 */
export const generateFileName = (originalName: string): string => {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 8);
  const extension = originalName.split(".").pop();
  return `${timestamp}-${randomString}.${extension}`;
};

/**
 * Get optimized image URL from Cloudinary
 * Cloudinary can automatically optimize and resize images
 */
export const getOptimizedUrl = (url: string, width?: number): string => {
  if (!url.includes("cloudinary")) return url;
  
  // Add transformation for optimization
  const transforms = ["f_auto", "q_auto"]; // Auto format and quality
  if (width) transforms.push(`w_${width}`);
  
  return url.replace("/upload/", `/upload/${transforms.join(",")}/`);
};
