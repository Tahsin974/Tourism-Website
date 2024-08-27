import { useEffect, useState } from "react";
import InitializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

InitializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const userSignOut = () => {
    return signOut(auth)
    
  };

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      }
    });
    return unSubscribed;
  }, []);

  return {
    signInWithGoogle,
    setUser,
    user,
    loading,
    userSignOut
  };
};

export default useFirebase;
