
import { v4 as uuidv4 } from "uuid";
import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const uploadFile = async (file, dirName) => {

  try {
    if (!file) {
      throw new Error("No se ha seleccionado ningun archivo");
    }
    const separarNombreArchivo = file.name.split(".");
    const extension = separarNombreArchivo.pop();
    const archivoNombreFinal = `${dirName}/${uuidv4()}.${extension}`;
    const storageRef = ref(storage, archivoNombreFinal);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  } catch (error) {
    console.error("Error al cargar el archivo", error);
    throw error
  }
};

export default uploadFile;
