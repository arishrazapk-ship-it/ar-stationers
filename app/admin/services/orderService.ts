import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

import { db } from "../../context/lib/firebase";
import { Order } from "../types/order";

const orderCollection = collection(db, "orders");

export async function addOrder(order: Order) {
  return await addDoc(orderCollection, order);
}

export async function getOrders() {
  const snapshot = await getDocs(orderCollection);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Order[];
}

export async function updateOrderStatus(
  id: string,
  status: Order["status"]
) {
  return await updateDoc(doc(db, "orders", id), {
    status,
  });
}