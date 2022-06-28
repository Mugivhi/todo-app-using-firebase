import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZfvay4mAxJ1ozRl-Ppiwz7uPfbl76YSc",
    authDomain: "completed-e3d1e.firebaseapp.com",
    projectId: "completed-e3d1e",
    storageBucket: "completed-e3d1e.appspot.com",
    messagingSenderId: "43642322434",
    appId: "1:43642322434:web:8063b4573d299e67c1711b",
    measurementId: "G-VH60GHZ55T"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db};