
import { v4 as uuidv4 } from "uuid";
import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadFile = async (file, dirName) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      return "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    }

    const separarNombreArchivo = file.name.split(".");
    const extension = separarNombreArchivo[separarNombreArchivo.length - 1];
    const archivoNombreFinal = `${dirName}/${uuidv4()}.${extension}`;
    const storageRef = ref(storage, archivoNombreFinal);

    uploadBytes(storageRef, file)
      .then(() => {
        return getDownloadURL(storageRef);
      })
      .then((url) => {
        resolve(url);
      })
      .catch((error) => {
        reject(error);
      })
  });
};

export default uploadFile;
