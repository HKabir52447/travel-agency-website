import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);
  return {
    user,
    loading,
    logOut,
    signInUsingGoogle,
  };
};
export default useFirebase;
