const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/auto/upload`;

const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "whoozmap");

  const responseData = await fetch(url, {
    method: "POST",
    body: formData,
  }).then((res) => res.json());

  return responseData;
};

export default uploadFile;
