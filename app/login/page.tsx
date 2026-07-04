"use client";

import { useState } from "react";
import { auth } from "../context/lib/firebase";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      alert("Login Successful ✅");

      window.location.href = "/admin";
    } catch (error: any) {
      console.log(error);

      switch (error.code) {
        case "auth/invalid-credential":
          alert("Incorrect email or password.");
          break;

        case "auth/user-not-found":
          alert("User not found.");
          break;

        case "auth/wrong-password":
          alert("Wrong password.");
          break;

        case "auth/invalid-email":
          alert("Invalid email.");
          break;

        case "auth/too-many-requests":
          alert("Too many attempts. Try again later.");
          break;

        default:
          alert(error.code);
      }
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-8">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg p-3 mb-6"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-bold disabled:bg-gray-400"
        >
          {loading ? "Logging In..." : "Admin Login"}
        </button>

      </div>

    </div>
  );
}