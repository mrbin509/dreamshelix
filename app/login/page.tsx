import { useState } from "react";
import { useRouter } from "next/router";
import { loginUser } from "../api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError(null);

    // 1️⃣ Basic validation
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    setLoading(true);
    try {
      const res = await loginUser({ email, password });

      if (res.token) {
        // 2️⃣ Save JWT token to localStorage
        localStorage.setItem("token", res.token);

        // 3️⃣ Optional: Save user info
        localStorage.setItem("user", JSON.stringify(res.user));

        // 4️⃣ Redirect to wallet page after login
        router.push("/wallet");
      } else {
        setError(res.message || "Login failed. Check credentials.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h1 style={{ textAlign: "center" }}>Login to DreamsHelix</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginBottom: "10px" }}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
      </div>

      <button
        onClick={handleLogin}
        disabled={loading}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      <p style={{ marginTop: "10px", textAlign: "center" }}>
        Don't have an account? <a href="/register" style={{ color: "blue" }}>Register</a>
      </p>
    </div>
  );
}