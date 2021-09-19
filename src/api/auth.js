import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnviofAwpud7RI5hOzvJPyuzqzHJ8t19A",
  authDomain: "emergency-response-system-2021.firebaseapp.com",
  projectId: "emergency-response-system-2021",
  storageBucket: "emergency-response-system-2021.appspot.com",
  messagingSenderId: "414522555581",
  appId: "1:414522555581:web:29f74477e715dc3edd0bd4",
  measurementId: "G-TF1V1JZLPV",
};

const instance = firebase.initializeApp(firebaseConfig);

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
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(data => {
      const userID = data.uid;
      firebase
        .database()
        .ref("users/" + userID)
        .set({
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
      firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then(
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

export function signUserIn(providedEmail, providedPassword, props, setLoading) {
  firebase
    .auth()
    .signInWithEmailAndPassword(providedEmail, providedPassword)
    // .then(() => {})
    .then(() => props.history.push("/admin/index"))
    .catch(function (error) {
      // Handle Errors here.
      setLoading(false);
      alert(error);
    });
  return;
}

export function forgotPassword(email, that) {
  firebase
    .auth()
    .sendPasswordResetEmail(email)
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
    await firebase.auth().signOut();
    // props.navigation.navigate("signin");
  } catch (e) {
    console.log(e);
  }
};

export function getUserData() {
  const items = [];
  const userRef = firebase.database().ref("/users");
  userRef.on("value", function (snapshot) {
    for (var key in snapshot.val()) {
      var dataOb = snapshot.val()[key];
      if (typeof dataOb === "object") items.push(dataOb);
    }
  });

  return items;
}

export function getEmergencyData() {
  const items = [];
  const emergencyRef = firebase.database().ref("/posts");
  emergencyRef.on("value", function (snapshot) {
    for (var key in snapshot.val()) {
      var dataOb = snapshot.val()[key];
      if (typeof dataOb === "object") items.push(dataOb);
    }
  });

  return items;
}

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

  firebase
    .database()
    .ref("tips")
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
