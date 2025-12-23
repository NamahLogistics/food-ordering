import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp();
}

export const db = admin.firestore();

export const collections = {
  orders: db.collection("orders"),
  customers: db.collection("customers"),
};
