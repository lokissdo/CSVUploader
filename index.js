import { app, auth, db } from './firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc,setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const USER_COLLECTION_NAME = "users"
function validate() {
    var email = document.getElementById("login_email").value;

    console.log(app,auth,db)
    var password = document.getElementById("login_password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      const userRef = doc(db, USER_COLLECTION_NAME, user.uid);
      console.log(userRef)
      const userInFirestore = await getDoc(userRef);
      if(userInFirestore.exists()){
        localStorage.setItem("user", JSON.stringify(user));
        alert(user.email + " Login successfully!!!");
        window.location.href = 'main.html'
      }
      else{
        alert("You are not authorized!");
      }

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });	
}
class UserModel {
    constructor(email, uid,name) {
        this.email = email;
        this.uid = uid;
        this.name = name;
    }
    toJson(){
        return {
            "name":this.name,
            "email":this.email,
            "id":this.uid
        }
    }
}
function signup() {
    var name = document.getElementById("signup_name").value;
    var email = document.getElementById("signup_email").value;

    var password = document.getElementById("signup_password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
       const user = userCredential.user
        const userRef = doc(db, USER_COLLECTION_NAME, user.uid);
        const userData = new UserModel(user.email,user.uid,name).toJson()
        await setDoc(userRef, userData);
        alert(user.email + " Sign up successfully!");
        console.log(res)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });	
}
window.validate = validate
window.signup = signup
//----- End
