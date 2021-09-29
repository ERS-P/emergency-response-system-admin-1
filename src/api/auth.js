import {
  dbRef,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  getAuth,
} from "../firebase";

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

export function getUserData() {
  const items = [];
  const userRef = dbRef("/users");
  userRef.on("value", function (snapshot) {
    for (var key in snapshot.val()) {
      var dataOb = snapshot.val()[key];
      if (typeof dataOb === "object") items.push(dataOb);
    }
  });

  // return items;
  return {};
}

export function getEmergencyData() {
  const items = [];
  const emergencyRef = dbRef("/posts");
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
