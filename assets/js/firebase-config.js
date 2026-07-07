// Unico punto in cui cambiare config per un nuovo progetto
const firebaseConfig = {
  apiKey: "AIzaSyASPpj4mbJoMh2gNyG6o9NgHi6ensFYBjw",
  authDomain: "alessandroedeborah-feec3.firebaseapp.com",
  projectId: "alessandroedeborah-feec3",
  storageBucket: "alessandroedeborah-feec3.firebasestorage.app",
  messagingSenderId: "861118983021",
  appId: "1:861118983021:web:2140f51a92b0ae678c4864"
};

firebase.initializeApp(firebaseConfig);

export const db      = firebase.firestore();
export const storage = firebase.storage();
export const auth    = firebase.auth();
