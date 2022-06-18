import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMINJv8WZemLzHEcE_PTaHJ8OKxmLbYdU",
  authDomain: "online-show-case.firebaseapp.com",
  databaseURL: "https://online-show-case-default-rtdb.firebaseio.com",
  projectId: "online-show-case",
  storageBucket: "online-show-case.appspot.com",
  messagingSenderId: "1056504627735",
  appId: "1:1056504627735:web:1632f63826768113425252",
  //
  // apiKey: process.env.VUE_APP_SECRET_API_KEY,
  // authDomain: process.env.VUE_APP_SECRET_authDomain,
  // databaseURL: process.env.VUE_APP_SECRET_databaseURL,
  // projectId: process.env.VUE_APP_SECRET_projectId,
  // storageBucket: process.env.VUE_APP_SECRET_storageBucket,
  // messagingSenderId: process.env.VUE_APP_SECRET_messagingSenderId,
  // appId: process.env.VUE_APP_SECRET_appId,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { auth, database };
