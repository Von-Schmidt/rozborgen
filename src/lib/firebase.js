import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

  apiKey: "x",

  authDomain: "rozborgen.firebaseapp.com",

  projectId: "rozborgen",

  storageBucket: "rozborgen.appspot.com",

  messagingSenderId: "x",

  appId: "x",

  measurementId: "x"

};


const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);