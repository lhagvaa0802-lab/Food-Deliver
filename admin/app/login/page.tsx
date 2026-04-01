"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed.");
        return;
      }

      router.push("/admin-page");
    } catch (e) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-between">
      <div className="w-full md:w-[400px] flex flex-col justify-center px-10 py-12 bg-white relative">
        <button className="absolute top-6 left-6 w-7 h-7 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:bg-neutral-50 transition-colors text-sm">
          ‹
        </button>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-900 mb-1">Log in</h1>
          <p className="text-sm text-neutral-400">
            Log in to enjoy your favorite dishes.
          </p>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="Enter your email address"
            className="w-full px-4 py-2.5 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-300 transition"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="Password"
            className="w-full px-4 py-2.5 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-300 transition"
          />

          <button className="text-xs text-neutral-500 hover:text-neutral-700 transition-colors">
            Forgot password ?
          </button>

          {error && <p className="text-xs text-red-500">{error}</p>}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-2.5 rounded-lg bg-neutral-300 hover:bg-neutral-400 disabled:opacity-60 text-neutral-700 text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
            {loading ? "Signing in..." : "Let's Go"}
          </button>
        </div>

        <p className="text-xs text-neutral-400 mt-6 text-center">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>

      <div className="h-[1200px] w-[1400px]">
        <img
          src="/images/delivery.png"
          alt="Delivery"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
