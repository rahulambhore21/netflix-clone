import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyDkeIBgZMF7cQfFSLvODAHSq1YabMC3miQ",
  authDomain: "netflix-clone-7e176.firebaseapp.com",
  projectId: "netflix-clone-7e176",
  storageBucket: "netflix-clone-7e176.firebasestorage.app",
  messagingSenderId: "364042298804",
  appId: "1:364042298804:web:9973e2d871d9343e713ee1",
  measurementId: "G-5D32N2T86F"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password) => {
   try{
    const res = await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user;
    await addDoc(collection(db,"user"),{
        uid:user.uid,
        authProvider : "local",
        name:name,
        email:user.email
    })
    // toast.success("Signup Successfull");
   }
   catch(err){
       console.error(err);
       toast.error("Problem in signup");
   }
}

const login = async (email,password) => {
    try{
        await signInWithEmailAndPassword(auth,email,password);
        // toast.success("Login Successfull");
    }
    catch(err){
        console.error(err);
        toast.error("Problem in login");
    }
}

const logout = async () => {
    try{
        await auth.signOut();
        // toast.success("Logout Successfull");
    }
    catch(err){
        console.error(err);
        toast.error("Problem in logout");
    }
}


export {signup,login,logout,db,auth};