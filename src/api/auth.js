import {
  dbRef,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signOut,
  getAuth,
  signInWithRedirect,
  database,
  onValue,
  collection,
  query,
  where,
  getDocs,
  firestoredb,
} from "../firebase";
import moment from "moment";

export function createUser({
  first_name,
  last_name,
  email,
  // phone,
  password,
  setLoading,
  // confirmPassword,
  // nationalID,
}) {
  createUserWithEmailAndPassword(email, password)
    .then(data => {
      const userID = data.uid;
      dbRef("users/" + userID).set({
        userID: userID,
        email: email,
        password: password,
        firstname: first_name,
        lastname: last_name,
        admin: true,

        // nationalID: nationalID,
        // phoneNumber: phone,
        // confirmPassword: confirmPassword,
      });

      sendEmailVerification().then(
        function () {
          setLoading(false);
        },
        function (error) {
          // An error happened.
        }
      );
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
        return false;
      } else {
        alert("Error code:" + errorCode + "\n" + errorMessage);
        console.log("Error code:" + errorCode + "\n" + errorMessage);
        return false;
      }
    });
  return true;
}

export function signUserIn(auth_obj, success = () => {}, setLoading) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, auth_obj.email, auth_obj.password)
    .then(res => {
      success(res);
      setLoading(false);
    })
    .catch(error => {
      setLoading(false);
      console.log(error);
    });
  return;
}

export function signUserInWithGoogle(email_arg, password_arg) {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
    login_hint: "user@example.com",
  });
  signInWithRedirect(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

export function forgotPassword(email, that) {
  sendPasswordResetEmail(email)
    .then(() => {
      alert("Please check your email...");
    })
    .catch(function (error) {
      alert(error.message);
    });
  return;
}

export const logout = async props => {
  try {
    await signOut();
    // props.navigation.navigate("signin");
  } catch (e) {
    console.log(e);
  }
};

export function getEmergencyData(success) {
  const postsRef = dbRef(database, "posts/");

  onValue(
    postsRef,
    snapshot => {
      const data = snapshot.val();
      success(data);
    },
    error => {
      console.log(error);
    }
  );
}

export async function getEmergencyData1(cb) {
  const q = query(collection(firestoredb, "emergencies"));
  const arr = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots
    console.log(moment.unix(doc.data().createdAt.seconds).fromNow());
    arr.push(doc.data());
  });
  cb(arr);
}

export function getTipsData(success) {
  const tipsRef = dbRef(database, "tips/");
  onValue(
    tipsRef,
    snapshot => {
      const data = snapshot.val();
      success(data);
    },
    error => {
      console.log(error);
    }
  );
}

// export function getEmergencyData() {
//   const items = [];
//   const emergencyRef = dbRef("/posts");
//   emergencyRef.on("value", function (snapshot) {
//     for (var key in snapshot.val()) {
//       var dataOb = snapshot.val()[key];
//       if (typeof dataOb === "object") items.push(dataOb);
//     }
//   });

//   return items;
// }

// export function getEmergencyReports() {
//   // Get a database reference to our posts
//   const db = admin.database();
//   const ref = db.ref("/posts");

//   // Attach an asynchronous callback to read the data at our posts reference
//   ref.on(
//     "value",
//     snapshot => {
//       console.log(snapshot.val());
//     },
//     errorObject => {
//       console.log("The read failed: " + errorObject.name);
//     }
//   );
// }

export function submitTips({ title, description, setLoading }) {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) dd = "0" + mm;
  if (mm < 10) mm = "0" + mm;
  today = mm + "/" + dd + "/" + yyyy;
  var time = new Date()
    .toLocaleTimeString()
    .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");

  dbRef("tips")
    .set({
      title: title,
      description: description,
      timeStamp: time,
      author: "",
    })
    .then(() => {
      setLoading(false);
    });
}
