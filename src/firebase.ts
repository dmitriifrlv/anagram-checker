import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  databaseURL: import.meta.env.DATABASE_URL,
  projectId: "fireproject-26efc",
  storageBucket: "fireproject-26efc.appspot.com",
  messagingSenderId: "45166488083",
  appId: "1:45166488083:web:3da15975cb6d3ee4bd6de6",
};

initializeApp(firebaseConfig);

export const dbRef = ref(getDatabase());
