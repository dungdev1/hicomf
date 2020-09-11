const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

const createProfile = (userRecord, context) => {
  const { email, phoneNumber, uid, photoURL, displayName } = userRecord;
  return db
    .collection("users")
    .doc(uid)
    .set({ email, phoneNumber, photoURL, displayName })
    .catch(console.error);
};

module.exports = {
  authOnCreate: functions.auth.user().onCreate(createProfile),
};