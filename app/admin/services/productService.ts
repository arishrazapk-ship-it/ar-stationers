import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "../../context/lib/firebase";
import { Product } from "../types/product";

const productCollection = collection(db, "products");

export async function addProduct(product: Product) {
  return await addDoc(productCollection, product);
}

export async function getProducts() {
  const snapshot = await getDocs(productCollection);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
}

export async function getProductById(id: string) {
  const docRef = doc(db, "products", id);

  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return {
    id: docSnap.id,
    ...docSnap.data(),
  };
}

export async function deleteProduct(id: string) {
  return await deleteDoc(doc(db, "products", id));
}

export async function updateProduct(
  id: string,
  product: Partial<Product>
) {
  return await updateDoc(doc(db, "products", id), product);
}