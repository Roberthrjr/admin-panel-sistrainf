
import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCKTlIbglKR4ABedaDoV9lIvHKKGWLHuUY",
    authDomain: "frontend-defd3.firebaseapp.com",
    projectId: "frontend-defd3",
    storageBucket: "frontend-defd3.appspot.com",
    messagingSenderId: "473454270667",
    appId: "1:473454270667:web:ee009976284a419400a34e"
}

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export {storage};