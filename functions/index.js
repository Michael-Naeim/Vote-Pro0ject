const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// auth trigger (new user signup)
exports.newUserSignUp = functions.auth.user().onCreate(user => {
  // for background triggers you must return a value/promise
  return admin.firestore().collection("users").doc(user.uid).set({
    email: user.email,
    upvotedOn: [],
  });
});

// auth trigger (user deleted)
exports.userDeleted = functions.auth.user().onDelete(user => {
  const doc = admin.firestore().collection("users").doc(user.uid);
  return doc.delete();
});

// http callable function (adding a request)
exports.addRequest = functions.https.onCall((data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      '. يجب ان تكون لديك حساب من فضلك قم بأنشاء حساب علي الموقع'
    );
  }
 
  return admin.firestore().collection("requests").add({
    firstSelect: data.firstSelect,
    secondInput : data.secondInput,
    linkOfTheProject : data.linkOfTheProject,
    importFile : data.importFile,
    upvotes: 0 
  });
});
