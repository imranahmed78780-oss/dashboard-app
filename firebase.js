// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, set, get, onValue, update, remove } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// ==========================================================
// 🔥 PASTE YOUR FIREBASE CONFIG BELOW
// ==========================================================
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://PASTE_YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Helper: Get Data
export const getData = async (path) => {
    const snapshot = await get(ref(db, path));
    return snapshot.exists() ? snapshot.val() : null;
};

// Helper: Set Data
export const setData = async (path, value) => {
    await set(ref(db, path), value);
};

// Helper: Update Data
export const updateData = async (path, value) => {
    await update(ref(db, path), value);
};

// Helper: Listen to Changes
export const listen = (path, callback) => {
    onValue(ref(db, path), (snapshot) => {
        callback(snapshot.exists() ? snapshot.val() : null);
    });
};

export { db };
