import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const mainCollectionName = process.env.NEXT_PUBLIC_FIREBASE_MAIN_COLLECTION_NAME;

export class DataBaseController {
  static read = async (storageName) => {
    const docRef = doc(db, mainCollectionName, storageName);
    const docData = await getDoc(docRef);

    if (!docData.exists()) return {};

    const {
      _document: {
        data: {
          value: {
            mapValue: {
              fields = {},
            } = {},
          } = {},
        } = {},
      } = {},
    } = docData;

    return fields;
  };

  static update = async (data, storageName) => {
    await setDoc(
      doc(db, mainCollectionName, storageName),
      data,
    );
  };
}

export default DataBaseController;
